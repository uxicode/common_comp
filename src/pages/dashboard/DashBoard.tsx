import React from 'react';
import {StatusCnt, StatusItem, Icon, Count, Category, ChartCnt} from './style';
import {Line, Pie} from 'react-chartjs-2';
import {lineData, lineOptions, pieData, pieOptions} from '@/pages/dashboard/chart';

function DashBoard() {

  const statusList: Array<{icon: string; count: number; category: string;}> = [
    {icon: 'icon-users', count: 2100, category: '전체 회원'},
    {icon: 'icon-user-plus', count: 15, category: '금일 신규회원'},
    {icon: 'icon-user-minus', count: 0, category: '금일 탈퇴회원'},
    {icon: 'icon-user', count: 1200, category: 'MAU'},
    {icon: 'icon-user', count: 600, category: 'DAU'}
  ];

  return (
      <div className="main">

        <StatusCnt>
          {
            statusList.map((item, idx) => {
              return (
                  <StatusItem key={idx}>
                    <span css={Icon} className={item.icon}></span>
                    <p css={Count}>{item.count}</p>
                    <p css={Category}>{item.category}</p>
                  </StatusItem>
              )
            })
          }
        </StatusCnt>

        <ChartCnt>
          <div style={{width: '489.5px', backgroundColor: 'white'}}>
            <Pie data={pieData} options={pieOptions} />
          </div>

          <div style={{width: '777px', backgroundColor: 'white'}}>
            <Line data={lineData} options={lineOptions} />
          </div>
        </ChartCnt>

      </div>
  );
}

export default DashBoard;
