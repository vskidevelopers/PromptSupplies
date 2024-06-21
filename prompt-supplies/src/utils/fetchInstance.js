// fetchInstance.js

const baseURL = "https://api.themoviedb.org/3";

/**
 * Utility function to make GET requests using fetch
 * @param {string} endpoint - The API endpoint to request
 * @param {object} options - Additional fetch options (optional)
 * @returns {Promise<object>} - The JSON response from the API
 */
const fetchInstance = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${baseURL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export default fetchInstance;
