import React from 'react'
import {SeriesCollectionDirective,ChartComponent,LineSeries,SeriesDirective,Inject,DateTime,Legend,Tooltip}
 from '@syncfusion/ej2-react-charts'
 import { lineCustomSeries,LinePrimaryXAxis,LinePrimaryYAxis } from '../../data/dummy'
 import { useStateContext } from '../../contexts/ContextProvider'

function LineChart() {

  const {currenMode} = useStateContext()
  return (
    <ChartComponent
    id='line-chart'
    height='420px'
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    background={currenMode === 'Dark'? '#33373E':'#fff'}>
      <Inject services={[LineSeries,DateTime,Legend,Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item,index)=>
        <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart