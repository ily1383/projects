import chartDown from "../assets/chart-down.svg";
import chartUp from "../assets/chart-Up.svg";
import styles from "./tablerow.module.css";
import {marketChart} from "../services/cryptoApi";

function TableRow({coins,currency,setChart}) {
  const  { 
    id,
    symbol,
    name,
    image,
    current_price,
    price_change_percentage_24h:price_change,
    total_volume}=coins
const showHandler=async()=>{
  try {
    const res = await fetch(marketChart(id));
    const json = await res.json();
    console.log({...json, coins})
    //setChart({...json, coins});
  } catch (error) {
    setChart(null)
  }
}

  return (
    <tr>
        <td>
         <div className={styles.symbol} onClick={showHandler}>
            <img src={image} alt={name} />
            <span>{symbol.toUpperCase()}</span>
         </div>
        </td>
        <td>{name}</td>
        <td>
          {currency==="usd"?"$ ":currency==="eur"?"€ ":"¥ "}
          {current_price.toLocaleString()}</td>
        <td className={price_change>0?styles.success:styles.error}>
          {price_change.toFixed(2)}
          </td>
        <td>{total_volume.toLocaleString()}</td>
        <td><img src={price_change>0?chartUp:chartDown} alt="" /></td>
    </tr>
  )
}

export default TableRow