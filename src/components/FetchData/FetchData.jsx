const fetchData = (inputFilter, page) => {
    return fetch(
      `https://pixabay.com/api/?q=${inputFilter}&page=${page}&key=30011716-3e5d547fa81f6796b48e23f2e&image_type=photo&orientation=horizontal&per_page=12`
    ).then(res => {
      if (res.ok) {
        return res.json();
      }
    });
  };
  export default fetchData;