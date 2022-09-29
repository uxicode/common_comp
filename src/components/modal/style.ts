import {css} from '@emotion/react';
import styled from '@emotion/styled';

const ModalContainer = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  //z-index: 1055;
  z-index: 1032; // z-index 가 가장 높은 sideBar 보다 크게 설정
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  label: ModalContainer;
`;

const ModalDim = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  //z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
  label: ModalDim;
`;

const ModalDialog = styled('div')`
  min-width: 400px;
  //z-index: 1050;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  margin: 0 auto;
  label: ModalDialog;
`;

const ModalContent = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 0 solid rgba(34,41,47,.2);
  border-radius: 0.357rem;
  outline: 0;
  overflow: visible;
  box-shadow: 0 5px 20px 0 rgb(34 41 47 / 10%);
  label: ModalContent;
`;

const ModalHeader = styled('div')`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  border-bottom: 0 solid #ebe9f1;
  border-top-left-radius: 0.357rem;
  border-top-right-radius: 0.357rem;
  label: ModalHeader;
`;

const ModalBody = styled('div')`
  position: relative;
  flex: 1 1 auto;
  padding: 0.8rem 1.4rem;
  label: ModalBody;
`;

const ModalFooter = styled('div')`
  position: relative;
  display: block;
  padding: 22px 24px!important;
  border-bottom-right-radius: 0.357rem;
  border-bottom-left-radius: 0.357rem;
  label: ModalFooter;
`;

const ModalTitle = css`
  font-size: 20px;
  font-weight: bold;
  label: ModalTitle;
`;

const CloseBtn = css`
  position: relative;
  box-sizing: content-box;
  width: 0.75rem;
  height: 0.75rem;
  color: currentColor;
  padding: 0.8rem;
  margin: -0.4rem -0.7rem -0.4rem auto;
  box-shadow: 0 5px 20px 0 rgb(34 41 47 / 10%);
  border: 0;
  border-radius: 0.357rem;
  background-color: #fff;
  opacity: 1;
  transform: translate(26px, -32px);
  transition: all 0.23s ease 0.1s;
  label: CloseBtn;
  
  &:after {
    font-family: "icomoon" !important;
    content: "\\ea0f";
    position: absolute;
    width: auto;
    height: auto;
    left: 50%;
    top: 8px;
    transform: translateX(-50%);
  }
  
  &:hover {
    transform: translate(16px, -22px);
  }
`;

export {
  ModalContainer,
  ModalDim,
  ModalDialog,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalTitle,
  CloseBtn
}
