import { useEffect, useState } from "react";
import styles from "./search.module.css";
import { searchCoin } from "../services/cryptoApi";
import SearchResult from "./SearchResult";
import {RotatingLines} from "react-loader-spinner";

function SearchBox({currency, setCurrency}) {
    const [search, setSearch]=useState("");
    const [coins, setCoins]=useState([]);
    const [isloading, setIsLoading]=useState(true);

    const controller = new AbortController();

    useEffect(()=>{
        if(!search){
            setIsLoading(false);
            return;
        };
        const getCoin = async()=>{
            try {
            const res = await fetch(searchCoin(search),{signal: controller.signal});
            const json = await res.json();
            if(json.coins){
                setCoins(json.coins);
                setIsLoading(false)
            }
            else{
                alert(json.status.error_message)
            }
            } catch (error) {
                if(error.message!=="AbortError"){
                    alert(error.message)
                }
            }
        }
        setIsLoading(true)
        getCoin();
        return ()=>controller.abort()
    },[search])
  return (
    <div className={styles.searchBox}>
        <input
         type="text"
          placeholder="Search Coin"
          value={search}
          onChange={e=>setSearch(e.target.value)}/>
        <select value={currency} onChange={(e)=>setCurrency(e.target.value)}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option>
        </select>
        {search?(
            <div className={styles.searchResult}>
            {isloading?(
                <RotatingLines
                height="30"
                strokeColor='blue'
                strokeWidth='2'
                color="grey"/>
            ):(
                <ul>
                {coins.map(coin=><SearchResult coin={coin}/>)}
               </ul> 
            )}
        </div>   
        ):null}
    </div>
  )
}

export default SearchBox