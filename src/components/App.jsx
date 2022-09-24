import { useState, useEffect } from "react";
import { AppStyled } from "./App.styled";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery";
import FetchData from "./FetchData/FetchData";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { Circles } from "react-loader-spinner";

const App = () => {

  const [inputFilter, setInputFilter] = useState('');
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (inputFilter === '') {
      return;
    }

    async function fetchImages() {
      setStatus('pending');
      const newImages = await FetchData(inputFilter, page);
      setGallery(prev => [...prev, ...newImages]);
      setStatus('resolved');
    }

    fetchImages();
  }, [inputFilter, page]);


  const handleOnSubmit = inputFilter => {
    setInputFilter(inputFilter);
    setPage(1);
    setGallery([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };


    return(
      <AppStyled>
        <>
          <SearchBar onSubmit={handleOnSubmit}/>
          {gallery.length > 0 && 
             <ImageGallery gallery={gallery} />}
          {gallery.length > 0 && 
             status !== 'pending' &&
             <LoadMoreBtn 
                 onLoadMore={handleLoadMore} 
              />
          }
          {status === 'pending' &&
             <Circles
             height="80"
             width="80"
             color="#4fa94d"
             ariaLabel="circles-loading"
             wrapperStyle={{}}
             wrapperClass=""
             visible={true}
             />
          }
        </>
      </AppStyled>
    );
}


export default App;
