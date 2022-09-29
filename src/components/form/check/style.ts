import {css} from '@emotion/react';
import styled from '@emotion/styled';

const CheckboxContainerStyle=styled.div`
  display: block;
  min-height: 1.45rem;
  padding-left: 1.785rem;
  margin-bottom: 0;
  &:hover{}
`;


const CheckboxStyledComp=styled.input`
  float: left;
  margin-left: -1.785rem;
  width: 1.285rem;
  height: 1.285rem;
  margin-top: 0.0825rem;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid #d8d6de;
  appearance: none;
  color-adjust: exact;
  &[type=checkbox]{
    border-radius: 3px;
  }
  &:active{
    filter: brightness(90%);
  }
  &:focus {
    border-color: #7367f0;
    outline: 0;
    box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4);
  }
  &:checked {
    background-color: #7367f0;
    border-color: #7367f0;
    background-size: 65%;
  }

  &:checked[type=checkbox] {
    background-image: url("data:image/svg+xml;charset=utf8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9.5 7.5'%3e%3cpolyline points='0.75 4.35 4.18 6.75 8.75 0.75' style='fill:none;stroke:%23fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px'/%3e%3c/svg%3e");
  }

  &[type=checkbox]:indeterminate {
    background-color: #7367f0;
    border-color: #7367f0;
    background-image: url("data:image/svg+xml;charset=utf8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-minus'%3e%3cline x1='5' y1='12' x2='19' y2='12'%3e%3c/line%3e%3c/svg%3e");
  }
  &:disabled {
    pointer-events: none;
    filter: none;
    opacity: 0.65;
  }

  &:disabled:not(:checked) {
    background-color: #efefef;
    border-color: #efefef;
    opacity: 1;
  }

  &:not(:disabled) {
    &:checked {
      box-shadow: 0 2px 4px 0 rgba(#0d6efd, 0.4);
    }
    &:indeterminate {
      background-size: 85%;
    }
  }

  &[disabled] ~ .form-check-label, &:disabled ~ .form-check-label {
    opacity: 0.65;
  }
`;

const LabelStyledComp=styled.label`
  padding-left: 3px !important;
  vertical-align: middle;
`

export {
    CheckboxContainerStyle,
    CheckboxStyledComp,
    LabelStyledComp
}
