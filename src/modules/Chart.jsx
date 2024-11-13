import { useState } from 'react'
import styles from './chart.module.css'

import ChartComponent from './ChartComponent';
import convertData from '../helpers/converData'

function Chart({chart,setChart}) {
    const[type, setType] = useState("prices");

    const typeHandler=(event)=>{
        if(event.target.tagName==="BUTTON"){
        const type = event.target.innerText.toLowerCase().replace(" ","_");
        setType(type);   
    }
    }

  return (
    <div className={styles.container}>
        <span className={styles.cross} onClick={()=>setChart(null)}>
            X
        </span>
        <div className={styles.chart}>
            <div className={styles.name}>
               <img src={chart.coins.image} alt={chart.coins.name} />
               <p>{chart.coins.name}</p>
            </div>
            <div className={styles.graph}>
                <ChartComponent data={convertData(chart, type)} type={type}/>
            </div>
            <div className={styles.types} onClick={typeHandler}>
                <button 
                className={type==="prices"?styles.selected:null}>
                Prices
                </button>
                <button 
                className={type==="market_cap"?styles.selected:null}>
                Market Cap
                </button>
                <button 
                className={type==="total_volume"?styles.selected:null}>
                Total Volume
                </button>
            </div>
            <div className={styles.details}>
                <div>
                 <p>Prices:</p>
                 <span>{chart.coins.current_price}</span>
                </div>
                <div>
                  <p>ATH:</p>
                  <span>{chart.coins.ath}</span>
                </div>
                <div>
                 <p>Market Cap:</p>
                 <span>{chart.coins.market_cap}</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Chart