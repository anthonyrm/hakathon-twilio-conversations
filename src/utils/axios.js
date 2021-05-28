import axios from 'axios';
export async function getService(endPoint) {
  try {
    const url = `${process.env.REACT_APP_API_URL}/${endPoint}`;
    const config = {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY,
      },
    };
    const result = await axios.get(url, config);
    const { data } = result;
    return data;
  } catch (error) {
    throw error;
  }
}
export async function postService(endPoint, body) {
  try {
    const url = `${process.env.REACT_APP_API_URL}/${endPoint}`;
    const config = {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY,
      },
    };
    const result = await axios.post(url, body, config);
    const { data } = result;
    return data;
  } catch (error) {
    throw error;
  }
}