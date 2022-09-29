import {ChartOptions} from 'chart.js';

const pieOptions: ChartOptions<'pie'> = {
  plugins: {
    legend: {
      position: 'right' // 범례 위치
    },
    title: {
      display: true, // 기본값은 false
      padding: {top: 30},
      text: '게시글 작성',
      color: 'brown',
      font: {
        size: 20,
      },
    },
  }
};

const lineOptions: ChartOptions<'line'> = {
  plugins: {
    title: {
      display: true,
      text: '일별 접속자 수',
      // align: 'start',
      font: {
        size: 20,
      },
      padding: {top: 30, bottom: 20},
    },
    legend: {display: false} // 범례 숨김
  },
  scales: {
    y: {
      beginAtZero: true // 0 부터 시작
    }
  }
};

export {
  pieOptions,
  lineOptions
};
