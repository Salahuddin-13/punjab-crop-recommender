import axios from 'axios';

const CROP_HEALTH_API_KEY = process.env.REACT_APP_CROP_HEALTH_API_KEY;

// Detect plant diseases from uploaded image
export const detectPlantDisease = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append('images', imageFile);
    formData.append('modifiers', JSON.stringify([
      'crops_fast',
      'similar_images',
      'disease_similar_images'
    ]));
    formData.append('plant_details', JSON.stringify([
      'common_names',
      'url'
    ]));

    const response = await axios.post(
      'https://api.kindwise.com/v1/crop_health',
      formData,
      {
        headers: {
          'Api-Key': CROP_HEALTH_API_KEY,
          'Content-Type': 'multipart/form-data'
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Disease detection error:', error);
    throw error;
  }
};

// Process disease detection results for easy display
export const processDiseaseResults = (apiResponse) => {
  if (!apiResponse.suggestions || apiResponse.suggestions.length === 0) {
    return {
      disease: 'No disease detected',
      confidence: 0,
      severity: 'Unknown',
      treatment: ['No treatment needed'],
      prevention: ['Continue good farming practices']
    };
  }

  const topResult = apiResponse.suggestions[0];
  
  return {
    disease: topResult.name || 'Unknown Disease',
    confidence: Math.round(topResult.probability * 100),
    severity: topResult.details?.severity || 'Moderate',
    treatment: topResult.details?.treatment || [
      'Consult agricultural expert',
      'Apply appropriate treatment',
      'Monitor plant health'
    ],
    prevention: topResult.details?.prevention || [
      'Use disease-resistant varieties',
      'Practice crop rotation',
      'Maintain field hygiene'
    ]
  };
};
