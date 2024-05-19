import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common['Authorization'] = 'Client-ID jhQcplBUoglEL_QTQ7BQ096tyd_nHu5rVCFrZ0UPCbM';

export const fetchPictures = async (topic, currentPage) => {
  try {
    const response = await axios.get("/search/photos", {
      params: {
        query: topic,
        page: currentPage,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching pictures:", error);
    throw error;
  }
};