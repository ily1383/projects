import {ResponsiveContainer, LineChart, CartesianGrid, Line, YAxis, XAxis, Legend} from "recharts";

function ChartComponent({data, type}) {
  return (
     <ResponsiveContainer width="100%" height="100%">
        <LineChart 
        width={400} 
        height={400} 
        data={data}>
        <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth="2"/>
        <CartesianGrid stroke="#404042" />
        <YAxis dataKey={type} domain={["auto","auto"]}/>
        <XAxis dataKey="date" hide/>
        <Legend/>
        </LineChart>
     </ResponsiveContainer>
  )
}

export default ChartComponent