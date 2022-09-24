import { useEffect } from "react";
import { Overlay, ModalList } from "./Modal.styled";

export const Modal = ({closeModal, children}) => {

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [closeModal]);
   

    const backDropClick = e => {
        if (e.currentTarget === e.target) 
        closeModal();     
    };

  
    return (
        <Overlay onClick={backDropClick}>
            <ModalList>
                {children}
            </ModalList>
        </Overlay>
    );
    
};