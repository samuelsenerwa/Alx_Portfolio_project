// utils/api.js

const API_KEY = '96d8094b9d584e4baa94603f7125144b';

export const getHealthNewsById = async (id) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?id=${id}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch news detail');
  }
};
