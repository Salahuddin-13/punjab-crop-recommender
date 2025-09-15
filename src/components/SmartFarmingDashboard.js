import React, { useState, useEffect } from 'react';
import { createFarmPolygon, getCropHealthData, getFarmWeather } from '../services/agroMonitoring';
import { detectPlantDisease, processDiseaseResults } from '../services/cropHealth';
import './SmartFarmingDashboard.css';

const SmartFarmingDashboard = () => {
  // State variables for different features
  const [farmData, setFarmData] = useState({
    location: '',
    cropType: '',
    farmSize: ''
  });
  
  const [satelliteData, setSatelliteData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [polygonId, setPolygonId] = useState(null);
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [diseaseResults, setDiseaseResults] = useState(null);
  
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('farm-setup');

  // Handle farm setup
  const handleFarmSetup = async () => {
    if (!farmData.location || !farmData.cropType) {
      alert('Please fill in location and crop type');
      return;
    }

    setLoading(true);
    try {
      // Sample coordinates for demonstration - Replace with actual farm coordinates
      // These coordinates represent a small rectangular area
      const farmCoordinates = [
        [85.28, 23.61], // Bottom-left
        [85.29, 23.61], // Bottom-right
        [85.29, 23.62], // Top-right
        [85.28, 23.62], // Top-left
        [85.28, 23.61]  // Close the polygon
      ];

      // Create polygon for your farm
      const polyId = await createFarmPolygon(farmCoordinates, farmData.location);
      setPolygonId(polyId);

      // Get satellite data (crop health)
      const cropHealth = await getCropHealthData(polyId);
      setSatelliteData(cropHealth);

      // Get weather data
      const weather = await getFarmWeather(polyId);
      setWeatherData(weather);

      alert('✅ Farm setup complete! You can now view satellite and weather data.');
      setActiveTab('satellite-monitoring');
      
    } catch (error) {
      console.error('Farm setup error:', error);
      alert('❌ Error setting up farm. Please try again or check your internet connection.');
    }
    setLoading(false);
  };

  // Handle image upload for disease detection
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      setSelectedImage(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Detect plant disease
  const handleDiseaseDetection = async () => {
    if (!selectedImage) {
      alert('Please select an image first');
      return;
    }

    setLoading(true);
    try {
      const apiResponse = await detectPlantDisease(selectedImage);
      const processedResults = processDiseaseResults(apiResponse);
      setDiseaseResults(processedResults);
    } catch (error) {
      console.error('Disease detection error:', error);
      alert('❌ Error detecting disease. Please check your internet connection and try again.');
    }
    setLoading(false);
  };

  // Reset disease detection
  const resetDiseaseDetection = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setDiseaseResults(null);
  };

  return (
    <div className="smart-farming-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h1>🤖 AI-Powered Farming Assistant</h1>
        <p>Advanced satellite monitoring, disease detection, and weather insights for smart farming</p>
      </div>

      {/* Navigation Tabs */}
      <div className="navigation-tabs">
        <button 
          className={activeTab === 'farm-setup' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('farm-setup')}
        >
          🏡 Farm Setup
        </button>
        <button 
          className={activeTab === 'satellite-monitoring' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('satellite-monitoring')}
        >
          🛰️ Satellite Monitoring
        </button>
        <button 
          className={activeTab === 'disease-detection' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('disease-detection')}
        >
          🔬 Disease Detection
        </button>
        <button 
          className={activeTab === 'weather-insights' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('weather-insights')}
        >
          🌦️ Weather Insights
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        
        {/* Farm Setup Tab */}
        {activeTab === 'farm-setup' && (
          <div className="tab-section">
            <h2>🏡 Setup Your Farm for AI Monitoring</h2>
            <p className="description">Configure your farm details to enable satellite monitoring and AI-powered insights.</p>
            
            <div className="form-grid">
              <div className="form-group">
                <label>📍 Farm Location:</label>
                <input
                  type="text"
                  placeholder="e.g., Ranchi, Jharkhand"
                  value={farmData.location}
                  onChange={(e) => setFarmData({...farmData, location: e.target.value})}
                />
                <small>Enter your farm's city and state</small>
              </div>
              
              <div className="form-group">
                <label>🌾 Crop Type:</label>
                <select
                  value={farmData.cropType}
                  onChange={(e) => setFarmData({...farmData, cropType: e.target.value})}
                >
                  <option value="">Select your main crop</option>
                  <option value="rice">🌾 Rice (Paddy)</option>
                  <option value="wheat">🌾 Wheat</option>
                  <option value="maize">🌽 Maize (Corn)</option>
                  <option value="soybean">🫘 Soybean</option>
                  <option value="cotton">🌸 Cotton</option>
                  <option value="sugarcane">🎋 Sugarcane</option>
                  <option value="potato">🥔 Potato</option>
                  <option value="tomato">🍅 Tomato</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>📏 Farm Size:</label>
                <input
                  type="number"
                  placeholder="Enter size in hectares"
                  value={farmData.farmSize}
                  onChange={(e) => setFarmData({...farmData, farmSize: e.target.value})}
                />
                <small>Area of your farmland in hectares</small>
              </div>
            </div>
            
            <button 
              onClick={handleFarmSetup} 
              disabled={loading || !farmData.location || !farmData.cropType}
              className="setup-button"
            >
              {loading ? '⏳ Setting up your farm...' : '🚀 Start AI Monitoring'}
            </button>
            
            {polygonId && (
              <div className="success-message">
                ✅ Farm successfully registered! Polygon ID: {polygonId}
              </div>
            )}
          </div>
        )}

        {/* Satellite Monitoring Tab */}
        {activeTab === 'satellite-monitoring' && (
          <div className="tab-section">
            <h2>🛰️ Satellite Crop Health Monitoring</h2>
            <p className="description">View real-time crop health data from satellite imagery using NDVI analysis.</p>
            
            {satelliteData && satelliteData.length > 0 ? (
              <div className="satellite-data">
                <h3>📊 NDVI (Crop Health) Analysis - Last 30 Days</h3>
                <div className="data-cards">
                  {satelliteData.map((data, index) => (
                    <div key={index} className="data-card">
                      <h4>📅 {new Date(data.dt * 1000).toLocaleDateString('en-IN')}</h4>
                      <div className="ndvi-info">
                        <p><strong>🌿 NDVI Value:</strong> {data.data?.ndvi?.toFixed(3) || 'N/A'}</p>
                        <p><strong>☁️ Cloud Cover:</strong> {data.data?.clouds || 'N/A'}%</p>
                        <div className="health-indicator">
                          <span className={`status ${
                            data.data?.ndvi > 0.6 ? 'good' : 
                            data.data?.ndvi > 0.3 ? 'moderate' : 'poor'
                          }`}>
                            {data.data?.ndvi > 0.6 ? '✅ Excellent Health' : 
                             data.data?.ndvi > 0.3 ? '⚠️ Moderate Health' : '❌ Needs Attention'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="ndvi-guide">
                  <h4>📖 NDVI Guide:</h4>
                  <ul>
                    <li><span className="status good">0.6 - 1.0</span> = Healthy, dense vegetation</li>
                    <li><span className="status moderate">0.3 - 0.6</span> = Moderate vegetation health</li>
                    <li><span className="status poor">0.0 - 0.3</span> = Stressed or sparse vegetation</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="no-data">
                <div className="no-data-icon">🛰️</div>
                <h3>No Satellite Data Available</h3>
                <p>Please complete the farm setup first to enable satellite monitoring.</p>
                <button onClick={() => setActiveTab('farm-setup')} className="setup-link-btn">
                  Go to Farm Setup →
                </button>
              </div>
            )}
          </div>
        )}

        {/* Disease Detection Tab */}
        {activeTab === 'disease-detection' && (
          <div className="tab-section">
            <h2>🔬 AI Plant Disease Detection</h2>
            <p className="description">Upload a photo of your crop to detect diseases and get instant treatment recommendations.</p>
            
            <div className="upload-section">
              <div className="upload-area">
                <label className="upload-label">
                  📷 Upload Plant Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="file-input"
                  />
                </label>
                <p className="upload-hint">Click to select image • Max size: 5MB • Formats: JPG, PNG</p>
              </div>
              
              {imagePreview && (
                <div className="image-preview">
                  <h4>📸 Selected Image:</h4>
                  <img src={imagePreview} alt="Plant to analyze" />
                  <button onClick={resetDiseaseDetection} className="reset-btn">
                    🔄 Select Different Image
                  </button>
                </div>
              )}
              
              <button 
                onClick={handleDiseaseDetection} 
                disabled={!selectedImage || loading}
                className="detect-button"
              >
                {loading ? '🔍 AI Analyzing Image...' : '🧠 Detect Disease with AI'}
              </button>
            </div>

            {diseaseResults && (
              <div className="disease-results">
                <h3>🔍 AI Analysis Results</h3>
                <div className="result-card">
                  <div className="result-header">
                    <h4>🦠 {diseaseResults.disease}</h4>
                    <div className="confidence-badge">
                      {diseaseResults.confidence}% Confidence
                    </div>
                  </div>
                  <p className="severity">
                    <strong>⚠️ Severity Level:</strong> {diseaseResults.severity}
                  </p>
                  
                  <div className="treatment-section">
                    <h5>💊 Recommended Treatment:</h5>
                    <ul>
                      {diseaseResults.treatment.map((item, index) => (
                        <li key={index}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="prevention-section">
                    <h5>🛡️ Prevention Measures:</h5>
                    <ul>
                      {diseaseResults.prevention.map((item, index) => (
                        <li key={index}>→ {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Weather Insights Tab */}
        {activeTab === 'weather-insights' && (
          <div className="tab-section">
            <h2>🌦️ Weather Insights for Your Farm</h2>
            <p className="description">Real-time weather conditions and forecasts to help plan your farming activities.</p>
            
            {weatherData ? (
              <div className="weather-data">
                <div className="weather-card">
                  <h3>🌡️ Current Weather Conditions</h3>
                  <div className="weather-grid">
                    <div className="weather-item">
                      <span className="weather-icon">🌡️</span>
                      <div>
                        <strong>Temperature</strong>
                        <p>{weatherData.main?.temp || 'N/A'}°C</p>
                      </div>
                    </div>
                    <div className="weather-item">
                      <span className="weather-icon">💧</span>
                      <div>
                        <strong>Humidity</strong>
                        <p>{weatherData.main?.humidity || 'N/A'}%</p>
                      </div>
                    </div>
                    <div className="weather-item">
                      <span className="weather-icon">💨</span>
                      <div>
                        <strong>Wind Speed</strong>
                        <p>{weatherData.wind?.speed || 'N/A'} m/s</p>
                      </div>
                    </div>
                    <div className="weather-item">
                      <span className="weather-icon">🌤️</span>
                      <div>
                        <strong>Condition</strong>
                        <p>{weatherData.weather?.[0]?.description || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="farming-advice">
                    <h4>🌾 Farming Advice Based on Weather:</h4>
                    <ul>
                      {weatherData.main?.humidity > 80 && (
                        <li>⚠️ High humidity - Monitor for fungal diseases</li>
                      )}
                      {weatherData.wind?.speed > 10 && (
                        <li>💨 High wind - Avoid spraying pesticides</li>
                      )}
                      {weatherData.main?.temp < 15 && (
                        <li>🥶 Low temperature - Protect crops from cold</li>
                      )}
                      {weatherData.main?.temp > 35 && (
                        <li>🌡️ High temperature - Ensure adequate irrigation</li>
                      )}
                      <li>✅ Good conditions for field activities</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="no-data">
                <div className="no-data-icon">🌦️</div>
                <h3>No Weather Data Available</h3>
                <p>Please complete the farm setup first to get weather insights for your location.</p>
                <button onClick={() => setActiveTab('farm-setup')} className="setup-link-btn">
                  Go to Farm Setup →
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartFarmingDashboard;
