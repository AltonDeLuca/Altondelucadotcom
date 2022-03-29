import { useState, useEffect } from "react";
import Canvas from "../Canvas/Canvas";

function CurrencyPage(props) {
  const [data, setData] = useState(0);
  const [data1, setData1] = useState(0);
  let todaysDate = new Date(Date.now());
  let todaysDate_str = todaysDate.toISOString().slice(0, 10);
  let oneMonthAgo = new Date(todaysDate.setDate(todaysDate.getDate() - 30));
  let oneMonthAgo_str = oneMonthAgo.toISOString().slice(0, 10);
  let requestString =
    "https://api.exchangerate.host/timeseries?start_date=" +
    oneMonthAgo_str +
    "&end_date=" +
    todaysDate_str +
    "&base=USD";

  useEffect(() => {
    async function getCurrencyData() {
      console.log(todaysDate_str);
      console.log(oneMonthAgo_str);
      console.log(requestString);

      const response = await fetch(requestString);
      const theData = await response.json();

      let arr = [];
      let itr = new Date(oneMonthAgo);
      let itr_str = itr.toISOString().slice(0, 10);
      while (itr_str !== todaysDate_str) {
        console.log(itr_str + " " + todaysDate_str);
        console.log(theData["rates"][itr_str]["EUR"]);
        arr.push(theData["rates"][itr_str]["EUR"]);
        itr.setDate(itr.getDate() + 1);
        itr_str = itr.toISOString().slice(0, 10);
      }
      setData(arr);
      setData1(arr.pop());
    }
    getCurrencyData().catch(console.error);
  }, []);
  //<Button onClick={getCurrencyData} content="GET RATES"></Button>

  return (
    <div className="center">
      <Canvas list={data}></Canvas>
      <p>USD to EUR {data1}</p>
    </div>
  );
}
export default CurrencyPage;
