const BASE_URL = "https://admin.innovatework.net/api";  // Your API base URL

/**
 * Universal function to handle API requests
 * @param {string} endpoint - The API endpoint (e.g., 'clients', 'projects')
 * @param {string} method - The HTTP method ('GET', 'POST', 'PUT', 'DELETE')
 * @param {object} [data=null] - The payload/data to send (for POST/PUT requests)
 * @returns {Promise<any>}
 */
export const apiRequest = async (endpoint, method = 'POST', data = null) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (data) {
      options.body = JSON.stringify(data);  // Add the data for POST/PUT requests
    }

    const response = await fetch(`${BASE_URL}/${endpoint}`, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${response.status} - ${errorData.message || 'Unknown error'}`);
    }

    return await response.json();  // Return the parsed JSON response
  } catch (error) {
    console.error(`Failed to make ${method} request to ${endpoint}:`, error);
    throw error;
  }
};