// src/api/musicApi.js

const BASE_URL = 'https://api.spotify.com/v1';

// This function fetches multiple albums by their IDs
export const fetchAlbumsByIds = async (ids, accessToken) => {
  try {
    const response = await fetch(`${BASE_URL}/albums?ids=${ids.join(',')}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error.message || 'Failed to fetch albums');
    }

    const data = await response.json();
    return data.albums;
  } catch (error) {
    console.error('Spotify API error:', error);
    return [];
  }
};
