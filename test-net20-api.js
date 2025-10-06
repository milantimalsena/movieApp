// Test script for Net20 API - Browser Console Version
// Copy and paste this into browser console to test

async function testNet20DirectCall() {
  console.log('Testing Net20 API Direct Call...');
  
  try {
    // Test if the website is accessible
    console.log('\n=== Testing Basic Connectivity ===');
    const response = await fetch('https://net20.cc/home', {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      }
    });
    
    console.log('Response Status:', response.status);
    console.log('Response Headers:', [...response.headers.entries()]);
    
    if (response.ok) {
      const text = await response.text();
      console.log('Response Preview:', text.substring(0, 500));
      
      // Look for API endpoints in the HTML
      const apiMatches = text.match(/api\/[^"'\s]+/g);
      if (apiMatches) {
        console.log('Found API endpoints:', apiMatches);
      }
    }
    
  } catch (error) {
    console.error('Direct API Test Error:', error);
    console.log('CORS or network error - this is expected for cross-origin requests');
  }
}

// Also test our local fallback
async function testLocalFallback() {
  console.log('\n=== Testing Local Fallback ===');
  
  // Import our local movie data
  try {
    const response = await fetch('/src/data/moviesData.js');
    console.log('Local data accessible:', response.ok);
  } catch (error) {
    console.log('Local data test error:', error);
  }
}

console.log('Test functions created. Run testNet20DirectCall() and testLocalFallback() in console.');