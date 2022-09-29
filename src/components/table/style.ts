import {css} from '@emotion/react';

const tableTopStyle = css`
    display: flex;
    align-items: center;
    margin: 1rem;
    justify-content: space-between;
  
    p span {
      color: #7367f0;
      font-weight: bold;
    }
  `;

const tableCntStyle = css`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(34, 41, 47, 0.125);
    border-radius: 8px;
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 14%);
    transition: all 0.3s ease-in-out, background 0s, color 0s, border-color 0s;
    transition-timing-function: ease;
  `;

const tableStyle = css`
    table-layout: fixed;
    font-size: 12px;
  `;

const thStyle = css`
    text-align: center;
    padding: 10px 16px;
    font-weight: 500;
    background-color: #f3f2f7;
    &:first-of-type {border-left: none;}
  `;

const trStyle = css`
    border-bottom: 1px solid #ebe9f1;
    cursor: pointer;
    &:hover {
      td {
        background-color: #fffaeb;
      }
    }
  `;

const tdStyle = css`
    text-align: center;
    padding: 14px 16px;
    background-color: #fff;
    &:first-of-type {
      text-align: start;
      padding-left: 30px;
      border-left: none;
    }
  `;

export {
  tableTopStyle,
  tableCntStyle,
  tableStyle,
  thStyle,
  trStyle,
  tdStyle
};
