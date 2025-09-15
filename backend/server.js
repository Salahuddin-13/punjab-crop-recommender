const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    service: 'Punjab Agriculture Backend',
    timestamp: new Date().toISOString(),
    openai_connected: process.env.OPENAI_API_KEY ? true : false
  });
});

// Simple chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Try OpenAI API
    if (process.env.OPENAI_API_KEY) {
      try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a Punjab agriculture expert. Help farmers with crop advice, disease management, and farming techniques specific to Punjab, India.'
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 300,
          temperature: 0.7
        }, {
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          }
        });

        const aiResponse = response.data.choices[0].message.content;
        
        return res.json({
          response: aiResponse,
          source: 'openai',
          timestamp: new Date().toISOString()
        });

      } catch (openaiError) {
        console.log('OpenAI Error:', openaiError.message);
        // Fall back to local response
      }
    }

    // Fallback response
    const fallbackResponse = getFallbackResponse(message);
    res.json({
      response: fallbackResponse,
      source: 'fallback',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chat Error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Simple fallback responses
function getFallbackResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('wheat')) {
    return `🌾 **Punjab Wheat Varieties:**\n\n• PBW 725 - High yielding, disease resistant\n• HD 3086 - Good for late sowing\n• WH 1105 - Suitable for irrigated areas\n\n**Sowing Time:** October 25 - November 15\n**MSP:** ₹2,275/quintal\n\n📞 **PAU Helpline:** 0161-2401960`;
  }
  
  if (lowerMessage.includes('rice')) {
    return `🌾 **Punjab Rice Varieties:**\n\n• PR 126 - High yielding basmati\n• Pusa 44 - Non-basmati, good yield\n• PR 121 - Disease resistant\n\n**Transplanting:** June 20 - July 15\n**MSP:** ₹2,183/quintal\n\n📞 **PAU Helpline:** 0161-2401960`;
  }
  
  if (lowerMessage.includes('disease') || lowerMessage.includes('pest')) {
    return `🔬 **Common Punjab Crop Diseases:**\n\n**Rice:** Blast, Brown spot\n**Wheat:** Yellow rust, Leaf rust\n**Cotton:** Pink bollworm, Whitefly\n\n**Treatment:** Contact PAU Plant Pathology Department\n📞 **Emergency:** 0161-2401273`;
  }
  
  return `🙏 **Sat Sri Akal!**\n\nI'm your Punjab Agriculture Assistant. I can help with:\n\n🌾 Crop varieties and recommendations\n🔬 Disease and pest management\n💰 Market prices and MSP information\n🌦️ Weather and seasonal advice\n\n**Ask me about:**\n• "Which wheat variety for Punjab?"\n• "Rice transplanting time"\n• "Disease treatment"\n\n📞 **PAU Ludhiana:** 0161-2401960`;
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Punjab Agriculture Backend running on port ${PORT}`);
  console.log(`🔑 OpenAI: ${process.env.OPENAI_API_KEY ? 'Connected ✅' : 'Not configured ❌'}`);
  console.log(`🌾 Ready to help Punjab farmers!`);
});
