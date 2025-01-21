'use client'
import axios from "axios";

const BASE_URL = "http://localhost:10003/wp-json/wp/v2";


// Fetch Experience
export const fetchExperience = async () => {
  const response = await axios.get(`${BASE_URL}/experience`);
  return response.data;
};
