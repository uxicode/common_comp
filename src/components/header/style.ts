import {css} from '@emotion/react';

// Header
const navStyle = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: calc(100vw - 328px);
  min-width: 1352px !important;
  max-width: 1592px !important;
  position: absolute;
  top: 30px;
  left: 304px;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 14%);
  background-color: #fff;
  padding: 0.5rem 0px;
  min-height: 4.45rem;
  transition: 300ms ease all, background 0s;
  z-index: 997;
  label: Nav;
  
  @media (min-width: 992px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`;

const navCntStyle = css`
  display: flex;
  justify-content: flex-end;
  flex-basis: 100%;
  padding: 0;
  margin-left: 0;
  transition: 0.3s ease all;
  label: NavCnt;
`;

const dropdownBtnStyle = css`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  padding: 0 1rem;
  color: #6e6b7b;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  label: DropdownBtn;
`;

const userCntStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  float: left;
  margin-right: 0.8rem;
`;

const userNameStyle = css`
  display: inline-block;
  margin-left: 0.2rem;
  margin-bottom: 0 !important;
  font-weight: 500;
`;

const userLevelStyle = css`
  display: block;
  margin-top: 3px;
  text-align: right;
  font-size: smaller;
  font-weight: 300;
`;

// UserMenu
const userMenuStyle = css`
  position: absolute;
  top: 48px;
  right: 0;
  width: 200px;
  border-radius: 6px;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 14%);
  background: #fff;
  overflow: hidden;
  height: 0;
  opacity: 0;
  transition: all 0.5s ease;
  label: UserMenuList;
  &.active {
    height: 100px;
    opacity: 1;
    padding: 10px 0;
  }
`;

const userMenuItemStyle = css`
  display: block;
  padding: 10px 0 10px 22px;
  label: UserMenuItem;
  
  &:hover {color: #6d62e4}
  
  span {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #6e6b7b;
  }
`;


export {
  navStyle,
  navCntStyle,
  dropdownBtnStyle,
  userCntStyle,
  userNameStyle,
  userLevelStyle,
  userMenuStyle,
  userMenuItemStyle,
};
