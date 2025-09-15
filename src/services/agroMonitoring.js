import axios from 'axios';

const AGRO_API_KEY = process.env.REACT_APP_AGROMONITORING_API_KEY;
const BASE_URL = 'https://api.agromonitoring.com/agro/1.0';

// Create a farm polygon for satellite monitoring
export const createFarmPolygon = async (farmCoordinates, farmName = 'MyFarm') => {
  try {
    console.log('Creating farm polygon with API key:', AGRO_API_KEY ? 'Key exists' : 'No key found');
    
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
      polygonData,
      {
        timeout: 10000, // 10 second timeout
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('Polygon created successfully:', response.data);
    return response.data.id;
    
  } catch (error) {
    console.error('Error creating farm polygon:', error.response?.data || error.message);
    
    // Return a mock polygon ID for testing
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout. Please check your internet connection.');
    } else if (error.response?.status === 401) {
      throw new Error('API authentication failed. Please check your API key.');
    } else if (error.response?.status === 400) {
      throw new Error('Invalid farm coordinates. Please try again.');
    } else {
      // For now, return a demo polygon ID to test other features
      console.log('Using demo polygon ID for testing');
      return 'demo_polygon_' + Date.now();
    }
  }
};

// Get NDVI (crop health) data for last 30 days
export const getCropHealthData = async (polygonId) => {
  try {
    // If using demo polygon, return demo data
    if (polygonId.startsWith('demo_polygon_')) {
      return generateDemoNDVIData();
    }

    const endTime = Math.floor(Date.now() / 1000);
    const startTime = endTime - (30 * 24 * 60 * 60); // 30 days ago

    const response = await axios.get(
      `${BASE_URL}/ndvi/history?polyid=${polygonId}&start=${startTime}&end=${endTime}&appid=${AGRO_API_KEY}`,
      { timeout: 10000 }
    );

    return response.data;
  } catch (error) {
    console.error('Error getting crop health data:', error);
    // Return demo data if API fails
    return generateDemoNDVIData();
  }
};

// Get current weather for your farm
export const getFarmWeather = async (polygonId) => {
  try {
    // If using demo polygon, return demo data
    if (polygonId.startsWith('demo_polygon_')) {
      return generateDemoWeatherData();
    }

    const response = await axios.get(
      `${BASE_URL}/polygons/${polygonId}/weather?appid=${AGRO_API_KEY}`,
      { timeout: 10000 }
    );

    return response.data;
  } catch (error) {
    console.error('Error getting farm weather:', error);
    // Return demo data if API fails
    return generateDemoWeatherData();
  }
};

// Demo data generators for testing
const generateDemoNDVIData = () => {
  const demoData = [];
  for (let i = 0; i < 10; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i * 3);
    
    demoData.push({
      dt: Math.floor(date.getTime() / 1000),
      data: {
        ndvi: 0.3 + Math.random() * 0.5, // Random NDVI between 0.3 and 0.8
        clouds: Math.floor(Math.random() * 100)
      }
    });
  }
  return demoData;
};

const generateDemoWeatherData = () => {
  return {
    main: {
      temp: 25 + Math.random() * 10, // Temperature between 25-35°C
      humidity: 60 + Math.random() * 30 // Humidity between 60-90%
    },
    wind: {
      speed: 2 + Math.random() * 8 // Wind speed between 2-10 m/s
    },
    weather: [{
      description: 'partly cloudy'
    }]
  };
};

// Get soil data
export const getSoilData = async (polygonId) => {
  try {
    if (polygonId.startsWith('demo_polygon_')) {
      return null;
    }

    const response = await axios.get(
      `${BASE_URL}/polygons/${polygonId}/soil?appid=${AGRO_API_KEY}`,
      { timeout: 10000 }
    );

    return response.data;
  } catch (error) {
    console.error('Error getting soil data:', error);
    return null;
  }
};
