import {css} from '@emotion/react';

const ulStyle = css`
  display: flex;
  justify-content: center;
  padding-left: 0;
  list-style: none;
`;

const liStyle = css`
  border-radius: 5rem;
  &.active {
    background-color: #f3f2f7;
    border-radius: 0;
    a {
      z-index: 3;
      border-radius: 5rem;
      color: #fff;
      font-weight: 600;
      background-color: #7367f0;
      border-color: #7367f0;
    }
  }
`;

const prevStyle = css`
  height: 100%;
  border-top-left-radius: 1.428rem;
  border-bottom-left-radius: 1.428rem;
`;

const nextStyle = css`
  height: 100%;
  border-top-right-radius: 1.428rem;
  border-bottom-right-radius: 1.428rem;
`;

const linkStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  min-width: 2.286rem;
  padding: 0.5rem 0.85rem;
  color: #6e6b7b;
  background-color: #f3f2f7;
  border: 0 solid #dae1e7;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
`;

export {ulStyle, liStyle, prevStyle, nextStyle, linkStyle};
