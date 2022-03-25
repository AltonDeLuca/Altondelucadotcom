import Button from "../Buttons/Button";
import { useState, useEffect } from "react";

function CurrencyPage(props) {
  const [data, setData] = useState(0);
  async function getCurrencyData() {
    const response = await fetch(
      "https://api.exchangerate.host/timeseries?start_date=2020-01-01&end_date=2020-01-04"
    );
    const theData = await response.json();
    // let USD = theData["rates"]["USD"];
    console.log("USD : " + theData["rates"]["2020-01-01"]["USD"]);
    //setData(USD);

    // console.log(data);
    // console.log(data.rates);
  }
  useEffect(() => {}, []);

  return (
    <div className="center">
      <p>EUR to USD : {data}</p>
      <Button onClick={getCurrencyData} content="GET RATES"></Button>
    </div>
  );
}
export default CurrencyPage;
