import React, {useState, useEffect} from 'react';
import './Report.css';
import axios from 'axios';

function BarGroup(props) {
  const barPadding = 2
  const barColour = '#348AA7'
  const widthScale = d => d * 2
  const width = widthScale(props.d.value)
  const yMid = props.barHeight * 0.5
  
  return <g className="bar-group">
    <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
    <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
    <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{props.d.value}</text>
  </g>
}

function Report() {

  const barHeight = 30;
  const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('/api/revenue')
      .then(res => {
        console.log("Res",res);
        setData(res.data)
        console.log("Data",data);
      })
      .catch(err => {
        console.log(err);
      })
    }, [])

    const barGroups = data.map((d, i) => 
      <g transform={`translate(0, ${i * barHeight})`}>                                           
        <BarGroup d={d} barHeight={barHeight} />
      </g>)                         
    
    return <svg width="800" height="400" >
      <g className="container">
        <text className="title" x="100" y="30">Monthly Revenue Report</text>
        <g className="chart" transform="translate(100,60)">
          {barGroups}
        </g>
      </g>
    </svg>
  }

export default Report;
