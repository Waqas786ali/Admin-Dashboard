import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel }
  from '@syncfusion/ej2-react-charts'
import { barCustomSeries,barChartData, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import { Header } from '../../components'

function Bar() {
  const { currenMode } = useStateContext()
  return (
    <>
      <div className='m-4 md:m-10 mt-24 p-10 bg-white  rounded-3xl'>
        <Header category='Chart' title="Olympic Medal Counts - RIO" />
        <ChartComponent
          id='charts'
          dataSource={barChartData}
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currenMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{background:'white'}}>
          <Inject services={[ Category, Tooltip, ColumnSeries, DataLabel, Legend]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) =>
              <SeriesDirective key={index} {...item} />
            )}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </>
  )
}

export default Bar