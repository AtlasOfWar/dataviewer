import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function App(props) {
  
  return (
    <ResponsiveContainer width="80%" height="80%">
      <BarChart
        data={props.data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={props.dataKeyX} />
        <YAxis unit={props.yUnit ? props.yUnit : ''} />
        <Tooltip />
        <Legend />
        <Bar dataKey={props.dataKeyBar0} fill={props.fill0} name={props.nameBar0} />
        { props.dataKeyBar1 ? 
        <Bar dataKey={props.dataKeyBar1} fill={props.fill1} name={props.nameBar1} /> : ''}
        {props.dataKeyBar2 ? 
        <Bar dataKey={props.dataKeyBar2} fill={props.fill2} name={props.nameBar2} />
        : ''}
        {props.dataKeyBar3 ? 
        <Bar dataKey={props.dataKeyBar3} fill={props.fill3} name={props.nameBar3} />
        : ''}
      </BarChart>
    </ResponsiveContainer>
  );

}