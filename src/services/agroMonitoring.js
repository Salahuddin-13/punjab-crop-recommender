import axios from 'axios';

const AGRO_API_KEY = process.env.REACT_APP_AGROMONITORING_API_KEY;
const BASE_URL = 'https://api.agromonitoring.com/agro/1.0';

// Create a farm polygon for satellite monitoring
export const createFarmPolygon = async (farmCoordinates, farmName = 'MyFarm') => {
  try {
    const polygonData = {
      name: farmName,
      geo_json: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [farmCoordinates]
        }
      }
    };

    const response = await axios.post(
      `${BASE_URL}/polygons?appid=${AGRO_API_KEY}`,
      polygonData
    );
    
    return response.data.id; // This is your polygon ID for future calls
  } catch (error) {
    console.error('Error creating farm polygon:', error);
    throw error;
  }
};

// Get NDVI (crop health) data for last 30 days
export const getCropHealthData = async (polygonId) => {
  try {
    const endTime = Math.floor(Date.now() / 1000);
    const startTime = endTime - (30 * 24 * 60 * 60); // 30 days ago

    const response = await axios.get(
      `${BASE_URL}/ndvi/history?polyid=${polygonId}&start=${startTime}&end=${endTime}&appid=${AGRO_API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error('Error getting crop health data:', error);
    throw error;
  }
};

// Get current weather for your farm
export const getFarmWeather = async (polygonId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/polygons/${polygonId}/weather?appid=${AGRO_API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error('Error getting farm weather:', error);
    throw error;
  }
};

// Get soil data
export const getSoilData = async (polygonId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/polygons/${polygonId}/soil?appid=${AGRO_API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error('Error getting soil data:', error);
    return null; // Return null if soil data not available
  }
};
