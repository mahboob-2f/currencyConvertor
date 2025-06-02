import { useState } from "react";


function App() {
 
  // const apiUrl =`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`; 
  //              this api is not working 
  const [country,setCountry]= useState("");
  
  const apiUrl = `https://api.frankfurter.app/latest?from=${country}`;

  return (
    <div className="text-center bg-amber-200">hello ghost </div>
  )
}

export default App  
