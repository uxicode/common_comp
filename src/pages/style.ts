import { css } from '@emotion/react';


const wrapperStyle=css`
  position: relative;
  overflow-x: hidden;
`;

const containerStyle=css`
  position: relative;
  max-width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const contentsWrapStyle=css`
  margin-left: 280px;
`;

const contentsStyle=css`
  width: 100%;
  min-width: 1400px;
  max-width: 1640px;
  padding: 112px 24px 20px;

  &.full {
    padding: 0;
    margin: 0;
  }
`;

export {
    wrapperStyle,
    containerStyle,
    contentsWrapStyle,
    contentsStyle
};
