import { FC } from 'react';
import './PaymentsChart.scss';
import { LineChart, BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import expandIcon from '../../assets/svg/expand_icon.svg';

interface PaymentsChartProps { }
const lineData = [
  {
    name: 'Jul 10',
    l1: 0,
    l2: 250,
    l3: 550,
  },
  {
    name: 'Aug 10',
    l1: 700,
    l2: 420,
    l3: 330,
  },
  {
    name: 'Sep 10',
    l1: 420,
    l2: 150,
    l3: 500,
  },
  {
    name: 'Oct 10',
    l1: 500,
    l2: 200,
    l3: 350,
  },
];

const barData = [
  {
    name: 'Jul 10',
    sp: 1.5,
    b1: 0.5,
  },
  {
    name: 'Aug 10',
    sp: 0.2,
    b2: 1,
  },
  {
    name: 'Sep 10',
    sp: 1.3,
    b3: 2.1,
  },
  {
    name: 'Oct 10',
    sp: 1,
    b4: 1.2,
  },
  {
    name: 'Nov 10',
    sp: 1.8,
    b5: 2.1,
  },
];

const PaymentsChart: FC<PaymentsChartProps> = () => (
  <div className="PaymentsChart" data-testid="PaymentsChart">
    <div className="chart">
      <div className="header">
        Refunded
        <img src={expandIcon} />
      </div>
      <ResponsiveContainer width={340} height={236}>
        <LineChart
          data={lineData}
          margin={{
            top: 0,
            right: 0,
            left: -25,
            bottom: 0,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#EFF1F8" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#888FA7" }} stroke="transparent" />
          <YAxis tick={{ fontSize: 12, fill: "#888FA7" }} stroke="transparent" />
          <Line type="monotone" dataKey="l1" dot={false} stroke="#EB90E8" strokeWidth={2} />
          <Line type="monotone" dataKey="l2" dot={false} stroke="#BDBDFE" strokeWidth={2} />
          <Line type="monotone" dataKey="l3" dot={false} stroke="#FF6765" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="chart">
      <div className="header">
        Uncaptured
        <img src={expandIcon} />
      </div>
      <ResponsiveContainer width={340} height={226}>
        <BarChart
          data={barData}
          margin={{
            top: 0,
            right: 0,
            left: -30,
            bottom: 0,
          }}
          barSize={30}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#EFF1F8" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#888FA7" }} stroke="transparent" />
          <YAxis tick={{ fontSize: 12, fill: "#888FA7" }} unit="K" stroke="transparent" />
          <Bar dataKey="b1" stackId="a" fill="#B5B5FF" />
          <Bar dataKey="b2" stackId="a" fill="#97D5FB" />
          <Bar dataKey="b3" stackId="a" fill="#EB8FE7" />
          <Bar dataKey="b4" stackId="a" fill="#FF6664" />
          <Bar dataKey="b5" stackId="a" fill="#96CCFF" />
          <Bar dataKey="sp" stackId="a" fill="#EDF4FB" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default PaymentsChart;
