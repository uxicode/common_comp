import arrowDown from '@/assets/images/common/icon-chevron-down.png';
import {css} from '@emotion/react';

const selectStyle = css`
    display: block;
    padding: 0.71428rem 1rem;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.4;
    color: #6e6b7b;
    background-color: #fff;
    background-image: url(${arrowDown});
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 15px 14px;
    border: 1px solid #d8d6de;
    border-radius: 0.357rem;
  `;

export { selectStyle };
