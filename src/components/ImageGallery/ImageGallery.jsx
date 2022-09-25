import PropTypes from 'prop-types';
import { GalleryImage } from "./ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem";

const ImageGallery = ({ images }) => {

   return (
        <GalleryImage>
          {images.map((image, index) => {
              return  <ImageGalleryItem  image={image} key={index}/>;
           })}  
            </GalleryImage>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.array,
    image: PropTypes.shape({
      key: PropTypes.number.isRequired,
    }),
  };
  export default ImageGallery;