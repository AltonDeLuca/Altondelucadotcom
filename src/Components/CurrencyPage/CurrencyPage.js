import Button from "../Buttons/Button";
import { useState, useEffect } from "react";

function CurrencyPage(props) {
  const [data, setData] = useState(0);
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

  async function getCurrencyData() {
    console.log(todaysDate_str);
    console.log(oneMonthAgo_str);
    console.log(requestString);

    const response = await fetch(requestString);
    const theData = await response.json();
    console.log(theData);
    // let USD = theData["rates"]["USD"];
    console.log("EUR : " + theData["rates"][todaysDate_str]["EUR"]);
    setData(theData["rates"][todaysDate_str]["EUR"]);

    // console.log(data);
    // console.log(data.rates);
  }
  useEffect(() => {}, []);

  return (
    <div className="center">
      <p>USD to EUR {data}</p>
      <Button onClick={getCurrencyData} content="GET RATES"></Button>
    </div>
  );
}
export default CurrencyPage;
