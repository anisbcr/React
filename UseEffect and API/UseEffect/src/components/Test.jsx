import axios from "axios";
import React, { useEffect, useState } from "react";
import "../components/Test.css";
function Test() {
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);
  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "x-rapidapi-key": "02e3b30362mshb1b1104986bf70ap1e6be3jsnc20a9e313251",
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const fetchUrl = async () => {
      if (started) {
        try {
          const res = await axios.request(options);
          console.log(res.data);
          setTable(res.data.data.coins);
          setLoading(false);
        } catch {
          console.log("error to fetch");
          setLoading(false);
        }
      }
    };
    fetchUrl();
  }, [started]);
  const start = () => {
    setStarted(true);
  };
  return (
    <div className="container">
      {!started ? (
        <button onClick={start}>start</button>
      ) : loading ? (
        <p>loading</p>
      ) : (
        <div className="table">
          {table.map((coin, index) => (
            <div key={index} className="coins">
              <img src={coin.iconUrl} alt={coin.name} />
              <div>
                <h1>{coin.name}</h1>
                <p>prix:${parseFloat(coin.price).toFixed(2)}</p>
                <p>marctcap:${parseFloat(coin.marketCap).toLocaleString()}</p>
                <p>rank:{coin.rank}</p>
                <a href={coin.coinrankingUrl}>Rank</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Test;
