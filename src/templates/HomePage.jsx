import { useEffect, useState } from "react";
import { getCoinList } from "../services/cryptoApi";
import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";
import SearchBox from "../modules/SearchBox";
import Chart from "../modules/Chart";



function HomePage() {
  const [coins, setCoins]=useState([]);
  const [isLoading, setIsLoading]=useState(true)
  const [page, setPage]=useState(1);
  const [currency, setCurrency]=useState("usd");
  const [chart, setChart]=useState(null);

  useEffect(()=>{
  const fetchData = async()=>{
    const res = await fetch(getCoinList(page,currency));
    const json = await res.json();
    setCoins(json);
    setIsLoading(false)
  }
  fetchData();
},[page, currency])
 return(
  <div>
    <SearchBox currency={currency} setCurrency={setCurrency}/>
    <TableCoin coins={coins} isLoading={isLoading} currency={currency} setChart={setChart}/>
    <Pagination setPage={setPage} page={page}/>
    {!!chart && <Chart setChart={setChart} chart={chart}/>}
  </div>
 )
}
export default HomePage;
