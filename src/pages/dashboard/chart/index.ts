import {
  ArcElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import {lineData, pieData } from './ChartData';
import {lineOptions, pieOptions } from './ChartOption';

Chart.register(
    Title,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

export {
  lineData,
  pieData,
  lineOptions,
  pieOptions
}
