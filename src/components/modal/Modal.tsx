import React, { PropsWithChildren } from 'react';
import {createPortal} from 'react-dom';
import {
  ModalContainer,
  ModalDim,
  ModalDialog,
  ModalContent,
} from './style';

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function Modal({ onClickToggleModal, children }: PropsWithChildren<ModalDefaultType>) {
  // Wrapper 와 형제 관계인 div#modal 로 Modal 이 렌더링 된다.

  const modalRoot = document.getElementById('modal');
  const modalComponent =
      <ModalContainer>
        <ModalDim onClick={ (e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }} />
        <ModalDialog>
          <ModalContent>
            {children}
          </ModalContent>
        </ModalDialog>
      </ModalContainer>;

  if (modalRoot) {
    return createPortal(modalComponent, modalRoot);
  }
  return <></>;
}

export default Modal;
