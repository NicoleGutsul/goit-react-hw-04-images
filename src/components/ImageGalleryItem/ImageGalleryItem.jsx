import { useState } from "react";
import Modal from "components/Modal";
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";

export default function ImageGalleryItem({ image }) {
  const { webformatURL, tags, largeImageURL } = image;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
}
   return (
      <GalleryItem>
        <GalleryItemImage
          src={webformatURL}
          alt={tags}
          width="180"
          onClick={toggleModal}
        />
        {isModalOpen && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
        )}
        </GalleryItem>
        )
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};