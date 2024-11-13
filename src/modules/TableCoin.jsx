import TableRow from './TableRow';
import {RotatingLines} from "react-loader-spinner";
import styles from "./tablecoin.module.css"
 
function TableCoin({coins, isLoading, currency, setChart}) {
  return (
    <div className={styles.container}>
        {isLoading ? (
            <RotatingLines
            height="30"
            strokeColor='blue'
            strokeWidth='2'
            color="grey"/>
            ):(
            <table className={styles.table}>
            <thead>
                <tr>
                    <th>Coin</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>Total Volume</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {coins.map((coin)=><TableRow key={coin.id} coins={coin} currency={currency} setChart={setChart}/>)}      
            </tbody>
        </table>
        )}
    </div>
  )
}

export default TableCoin