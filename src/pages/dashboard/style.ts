import {css} from '@emotion/react';
import styled from '@emotion/styled';

const StatusCnt = styled('div')`
  display: flex;
  justify-content: space-between;
  label: StatusCnt;
`;

const StatusItem = styled('div')`
  width: 202px;
  height: 188px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 14%);
  label: StatusItem;
`;

const Icon = css`
  margin-top: 33px;
  display: inline-block;
  width: 46px;
  height: 46px;
  padding: 11px;
  border-radius: 50%;
  font-size: 24px;
  line-height: 0.83;
  label: Icon;
  
  &.icon-users {
    color: #00cfe8;
    background-color: rgba(0, 207, 232, 0.12);
  }
  &.icon-user-plus {
    color: #ea5455;
    background-color: rgba(234, 84, 85, 0.12);
  }
  &.icon-user-minus {
    color: #7367f0;
    background-color: rgba(115, 103, 240, 0.12);
  }
  &.icon-user {
    color: #ff9f43;
    background-color: rgba(255, 159, 67, 0.12);
  }
`;

const Count = css`
  margin-top: 21px;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  color: #5e5873;
  label: Count;
`;

const Category = css`
  margin-top: 4px;
  font-size: 14px;
  line-height: 1.5;
  color: #6e6b7b;
  label: Category;
`;

const ChartCnt = styled('div')`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  label: ChartCnt;
`;

export {
  StatusCnt,
  StatusItem,
  Icon,
  Count,
  Category,
  ChartCnt
}
