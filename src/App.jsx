import { useEffect } from 'react';
import './App.css'
import { getDates } from './api/apiServices';
import { useState } from 'react';
import { CellContainer } from './components/CellContainer';
import { getDateArray, months } from './utils';

function App() {

  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDates();
      const data = response.data;

      const newData = Object.keys(data).map((date) => ({
        date: date,
        contributions: data[date]
      }));
  
      setDates(newData);
    }

    fetchData();
  }, []);
  

  const dateArray = getDateArray(dates);

  return (
    <div className='container'>
      <div className='monthNames'>
        {
          months.map((item, index) => {
            return <span key={index}>{item}</span>
          }) 
        }
      </div>
      <div className='weeksAndCells'>
        <div className='weeks'>
          <span>Пн</span>
          <span>Ср</span>
          <span>Пт</span>
        </div>
        <CellContainer dateArray={dateArray} />
      </div>
      <div className='levelContainer'>
        <span>Меньше</span>
        <div className='cellBox'>
          <div title='No contribution' className='item cell'></div>
          <div title='1-9 contributions' className='item cell nine'></div>
          <div title='10-19 contributions' className='item cell nineteen'></div>
          <div title='20-29 contributions' className='item cell twentyNine'></div>
          <div title='30+ contributions' className='item cell thirtyPlus'></div>
        </div>
        <span>Больше</span>
      </div>
    </div>
  )
}

export default App
