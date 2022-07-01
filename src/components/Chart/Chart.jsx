import "./chart.css";
import { AreaChart, Area, XAxis, Tooltip } from "recharts";

export default function Chart({ data, dataKey }) {
  return (
    <div className="chart">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 10,
        }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Area type="monotone" dataKey={dataKey} stroke="#8884d8" />
      </AreaChart>
    </div>
  );
}
