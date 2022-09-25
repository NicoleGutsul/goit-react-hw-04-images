import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '30011716-3e5d547fa81f6796b48e23f2e';

const FetchData = async (inputFilter, page) => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: inputFilter,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 12,
  });

  const response = await axios.get(`/?${searchParams}`);
  return response.data.hits.map(
    ({ id, largeImageURL, webformatURL, tags }) => ({
      id,
      largeImageURL,
      webformatURL,
      tags,
    })
  );
};
export default FetchData;