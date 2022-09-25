import { useState, useEffect } from "react";
import { AppStyled } from "./App.styled";
import SearchBar from "./SearchBar";
import ImageGallery from "./ImageGallery";
import { LoadMore } from "./LoadMore/LoadMore.styled";
import { Circles } from "react-loader-spinner";
import FetchData from "./FetchData/FetchData";

export default function App() {

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [inputFilter, setinputFilter] = useState('');
  const [hits, setHits] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (inputFilter === '') {
      return;
    }
    async function getImages() {
      try {
        setStatus('pending');
        const images = await FetchData(inputFilter, page);
        const { total, totalHits, hits } = images;
        if (total === 0) {
          alert.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          setStatus('idle');
          return;
        }
        setHits(prevHits => [...prevHits, ...hits]);
        setStatus('resolved');

        setTotalPage(Math.ceil(totalHits / 12));

        if (totalPage === page) {
          alert.error(
            "We're sorry, but you've reached the end of search results."
          );
        }
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
        console.log(error);
      }
    }
    getImages();
  }, [page, inputFilter, totalPage]);

  const handleOnSubmit = input => {
    setPage(1);
    setHits([]);
    setinputFilter(input.trim());
    setStatus('idle');
  };

  const handleMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  };

 
    return(
      <AppStyled>
        <>
          <SearchBar onSubmit={handleOnSubmit}/>
          {hits.length > 0 && <ImageGallery images={hits} />}
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
           {status === 'resolved' && (
          <LoadMore onClick={handleMoreClick}>Load more</LoadMore>
        )}
        {status === 'rejected' && <p>{error.message}</p>}
        </>
      </AppStyled>
    );
  
}


