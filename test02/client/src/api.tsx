import axios from 'axios';

const API_URL = 'https://apitest.likewatt-infra.com/entry-test/2';

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const updateData = async (updatedData) => {
  try {
    await axios.put(API_URL, updatedData);
    console.log('Data updated successfully');
  } catch (error) {
    console.error('Error updating data:', error);
  }
};
