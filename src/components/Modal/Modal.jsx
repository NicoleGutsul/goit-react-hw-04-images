import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalList } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);
 

    const backDropClick = e => {
        if (e.target === e.currentTarget) {
           onClose();
        }    
    };

 
        return createPortal(
            <Overlay onClick={backDropClick}>
                <ModalList>
                    {children}
                </ModalList>
            </Overlay>,
            modalRoot
        );  
};

