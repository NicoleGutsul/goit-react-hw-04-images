import Axios from 'axios';

const FetchData = async (inputFilter, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '30011716-3e5d547fa81f6796b48e23f2e';
  const searchParams = new URLSearchParams({
    q: inputFilter,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    key: API_KEY,
    page: page,
    per_page: 12,
  });

  const response = await Axios.get(`${BASE_URL}?${searchParams}`);

  return response.data;
};

export default FetchData;