import React from 'react'
import { SeriesCollectionDirective, ChartComponent, SplineAreaSeries, SeriesDirective, Inject, DateTime, Legend }
  from '@syncfusion/ej2-react-charts'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import { Header } from '../../components'

function Area() {
  const { currenMode } = useStateContext()
  return (
    <>
      <div className='m-4 md:m-10 mt-24 p-10 bg-white  rounded-3xl'>
        <Header category='Chart' title="Inflation Rate in Percentage" />
        <ChartComponent
          id='area-chart'
          height='420px'
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currenMode === 'Dark' ? '#33373E' : '#fff'}>
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) =>
              <SeriesDirective key={index} {...item} />
            )}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </>
  )
}

export default Area