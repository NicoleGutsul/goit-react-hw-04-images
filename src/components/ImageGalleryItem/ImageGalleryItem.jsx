import { GalleryItemImage } from "./ImageGalleryItem.styled";
import { useState } from "react";
import { Overlay } from "components/Modal/Modal.styled";

export const ImageGalleryItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const {webformatURL, tags, largeImageURL} = item;

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };
    return (
      <>
      <GalleryItemImage
        src={webformatURL}
        alt={tags}
        width="180"
        onClick={toggleModal}
      />
      {showModal && (
        <Overlay closeModal={toggleModal}>
           <img src={largeImageURL} alt={tags}/>
        </Overlay>
      )}
      </>
    );
};
export default ImageGalleryItem;