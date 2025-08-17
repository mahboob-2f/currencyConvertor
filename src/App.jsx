import { useEffect, useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";


function App() {

  // const apiUrl =`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`; 
  //              this api is not working 

  // const apiUrl = `https://api.frankfurter.app/latest?from=${country}`;     => this is working api in this project


  const [currency, setCurrency] = useState("usd");
  const [amount,setAmount]= useState(0)
  const [from,setFrom]= useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swapping =()=>{
    setFrom(to);
    setTo(from);  
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = ()=>{
    setConvertedAmount(amount * options[to]);
  }


  return (
    <>
      <div className="w-screen min-h-screen flex justify-center items-center " style={{backgroundImage:
       " url('https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg')",backgroundSize:"cover" ,backgroundRepeat:"no-repeat"}} >
        <div className="w-[45%] border-2 border-white rounded-lg p-4 bg-[#ffffff7b]
        ">

          <form action="" className="pt-3 px-2"
          onSubmit={(e)=>{
            e.preventDefault();
          }}
          >
            <InputBox label="From"   currencyOptions={options} amount={amount}  ></InputBox>
            <p>Swap</p>
            <InputBox></InputBox>
            <div className="w-full bg-blue-500 py-3 mt-4 rounded-lg flex justify-center hover:bg-blue-600
            transition-all duration-200 group: ">
              <button className="text-white text-2xl font-serif group " onClick={console.log("clicked")} >Convert{} to{}</button>
            </div>
            
          </form>

        </div>
      </div>
    </>

  )
}

export default App  
