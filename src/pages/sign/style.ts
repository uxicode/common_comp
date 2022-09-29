import { css } from '@emotion/react';

const loginCntStyle = css`
  position: relative;
  height: 100vh;
  background-color: #262731;
`;

const loginFormStyle = css`
  position: absolute;
  width: 360px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  h1 {
    font-size: 30px;
    color: #d9dadd;
    padding-bottom: 60px;
  }
`;

const loginLabelStyle = css`
  display: block;
  font-size: 16px;
  font-weight: 300;
  color: #72747f;
`;

const loginInputStyle = css`
  font-size: 13px;
  font-weight: 300;
  color: #ffffff;
  padding: 10px 15px;
  border: solid 1px #404656;
  background-color: #262731;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
`;

const loginBtnStyle = css`
  font-size: 16px;
  font-weight: 500;
`;

export {
  loginCntStyle,
  loginFormStyle,
  loginLabelStyle,
  loginInputStyle,
  loginBtnStyle
};
