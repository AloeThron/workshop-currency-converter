import { useEffect, useState } from "react";
import "./App.css";
import Currency from "./components/Currency";

function App() {

  const [currency, setCurrency] = useState([])

  const [cf, setCf] = useState("THB")
  const [ct, setCt] = useState("USD")

  const [r, setR] = useState(0)
  const [v, setV] = useState(0)

  const [checkFrom, setCheckFrom] = useState(true)
  let fa, ta

  if (checkFrom) {
    fa = v
    ta = (fa * r).toFixed(2)
  }
  else {
    ta = v
    fa = (ta / r).toFixed(2)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${cf}`
        );
        const data = await res.json();
        setCurrency([...Object.keys(data.rates)]);
        setR(data.rates[ct])
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [cf, ct]);

  function vfc(e) {
    setV(e.target.value)
    setCheckFrom(true)
  }

  function vtc(e) {
    setV(e.target.value)
    setCheckFrom(false)
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-10">
      <div className="text-2xl font-bold mb-10">Currency Converter API</div>
      <Currency currency={currency} cur={cf} setC={setCf} val={fa} vc={vfc} />
      <div className="text-2xl font-bold">=</div>
      <Currency currency={currency} cur={ct} setC={setCt} val={ta} vc={vtc} />
    </div>
  );
}

export default App;
