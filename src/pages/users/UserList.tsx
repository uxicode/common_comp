import UserFilters from '@/pages/users/userFilter/UserFilters';
import React, {useState} from 'react';
import Pagination from '@/components/pagination/Pagination';
import {tableTopStyle, tableCntStyle, tableStyle, tdStyle, thStyle, trStyle} from '@/components/table/style';

interface ITableInfo {
  tw: string;
  tit: string;
  addClass?: string;
  align?: string;
}

const cellInfos: Array<ITableInfo> = [
  { tw: '10%', tit: 'No', addClass: 'lt pdl-25' },
  { tw: 'auto', tit: '아이디' },
  { tw: '30%', tit: '이름' },
  { tw: '20%', tit: '등급' },
];

interface IData {
  no: number;
  userId: string;
  name: string;
  grade: string
}

// paging 및 pageSize 는 api 에서 입력받는다고 가정.
const DUMMY_DATA: Array<IData[]> = [
  [
    { no: 1, userId: 'sjkim1@inition.kr', name: '김석진1', grade: '골드'},
    { no: 2, userId: 'sjkim2@inition.kr', name: '김석진2', grade: '골드'},
    { no: 3, userId: 'sjkim3@inition.kr', name: '김석진3', grade: '브론즈'},
    { no: 4, userId: 'sjkim4@inition.kr', name: '김석진4', grade: '플래티넘'},
    { no: 5, userId: 'sjkim5@inition.kr', name: '김석진5', grade: '실버'}
  ],
  [
    { no: 6, userId: 'sjkim6@inition.kr', name: '김석진6', grade: '플래티넘'},
    { no: 7, userId: 'sjkim7@inition.kr', name: '김석진7', grade: '골드'},
    { no: 8, userId: 'sjkim8@inition.kr', name: '김석진8', grade: '실버'},
    { no: 9, userId: 'sjkim9@inition.kr', name: '김석진9', grade: '브론즈'},
    { no: 10, userId: 'sjkim10@inition.kr', name: '김석진10', grade: '골드'}
  ],
  [
    { no: 11, userId: 'sjkim11@inition.kr', name: '김석진11', grade: '실버'},
    { no: 12, userId: 'sjkim12@inition.kr', name: '김석진12' , grade: '브론즈'}
  ]
];

function UserList() {
  const onTableCellClick = (no: number) => {
    console.log(no);
  };

  const [curPageNum, setCurPageNum] = useState<number>(1);

  const dataLength = DUMMY_DATA.flat().length;

  const onPageChange = (num: number) => {
    // 현재 페이징 갱신
    setCurPageNum(num);
    console.log(num);

    // 페이징 넘버에 따른 리스트 api 호출
    // getList(curPageNum);
  }

  const curPaging = DUMMY_DATA[curPageNum-1];

  return (
      <div css={tableCntStyle}>
        <div css={tableTopStyle}>
          <p>총 <span>{dataLength}</span> 명</p>
          <UserFilters />
        </div>
        <div>
          <table css={tableStyle}>
            <colgroup>
              {
                cellInfos.map((item, idx) => {
                  return <col key={idx} style={{width: item.tw}} />
                })
              }
            </colgroup>
            <thead>
            <tr>
              {
                cellInfos.map((item, idx) => {
                  return <th scope="col" key={idx} css={thStyle} className={item.addClass} >{item.tit}</th>
                })
              }
            </tr>
            </thead>
            <tbody>
            {
              DUMMY_DATA.length > 0
                  ? curPaging.map((item, idx) => {
                    return (
                        <tr key={idx} css={trStyle} onClick={() => {onTableCellClick(item.no)}}>
                          <td css={tdStyle}>
                            <span>{item.no}</span>
                          </td>
                          <td css={tdStyle}>
                            <span>{item.userId}</span>
                          </td>
                          <td css={tdStyle}>
                            <span>{item.name}</span>
                          </td>
                          <td css={tdStyle}>
                            <span>{item.grade}</span>
                          </td>
                        </tr>
                    )
                  })
                  : <tr><td colSpan={cellInfos.length}><p>데이터가 없습니다.</p></td></tr>
            }
            </tbody>
          </table>
        </div>
        <Pagination
            total={dataLength}
            numOfPage={5}
            pageSize={10}
            pageChange={onPageChange}
        />
      </div>
  );
}

export default UserList;
