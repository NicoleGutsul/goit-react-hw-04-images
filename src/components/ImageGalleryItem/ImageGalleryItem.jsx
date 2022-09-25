import { useState } from "react";
import Modal from "components/Modal";
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
    
}