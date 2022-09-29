import {css} from '@emotion/react';
import styled from '@emotion/styled';

const SideBarContainer = styled('div')`
  position: fixed;
  width: 280px;
  z-index: 1031;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background: #262731;
  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background 0s;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  label: SideBarContainer;
`;

const SideHeader = styled('div')`
  position: relative;
  padding: 2.35rem 0 3.3rem;
  transition: 0.3s ease all, background 0s;
  background: #262731;
  label: SideHeader;

  h1 {text-align: center;}
`;

const logoTitStyle = css`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  vertical-align: top;
  padding-top: 5px;
  label: LogoTit;
`;

// MenuItem
const SideContent = styled('div')`
  overflow-y: scroll;
  height: calc(100vh - 150px);
  color: #b4b7bd;
  label: SideContent;
`;

const listStyle = css`
  padding: 10px 0 20px 0;
  margin: 0 22px;
  label: MenuList;
`;

const itemStyle = css`
  margin-bottom: 30px;
  label: MenuItem;

  a {
    position: relative;
    width: 100%;
    color: #d0d0d0;
    padding: 6px 13px;
    line-height: 1.45;
    transition: all 0.5s ease;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 34px;
      border-radius: 4px;
      background: #7e72f2;
      transform-origin: 0 50%;
      opacity: 0;
      transform: scaleX(0);
      transition: all 0.5s ease;
      z-index: -1;
    }

    &.active {
      margin-left: 3px;

      i {
        color: #fff;
        opacity: 1;
      }

      &:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const iconStyle = css`
  height: 20px;
  width: 20px;
  font-size: 20px;
  text-align: center;
  margin-right: 14px;
  opacity: 0.4;
  vertical-align: middle;
  label: MenuIcon;
`;

const titStyle = css`
  color: #fff;
  font-size: 13px;
  vertical-align: bottom;
  label: MenuTit;
`;

export {
  SideBarContainer,
  SideHeader,
  logoTitStyle,
  SideContent,
  listStyle,
  itemStyle,
  iconStyle,
  titStyle
};
