import { useId } from "react";



function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",

}) {

    const amountInputId = useId();

    return (
        <div className="bg-white  p-3 rounded-lg flex justify-between">
            <div className="flex flex-col space-y-4 p-2">
                <label htmlFor={amountInputId} className="text-[#6c6767] text-[22px] font-serif ">{label}</label>
                <input type="number" placeholder="0" id={amountInputId}  className="text-2xl text-black font-semibold outline-none py-1 pl-2" 
                    onChange={onAmountChange} value={amount}
                     
                />
            </div>
            <div className="flex flex-col space-y-4 p-2">
                <label htmlFor="" className="text-[#6c6767] text-[22px] font-serif ">Currency Type</label>
                <select  className="text-black"
                    onChange={onCurrencyChange} 
                     
                >
                    {currencyOptions.map((currency,index)=>
                        <option value={currency} key={index}>
                            {currency}
                        </option>
                    )}
                    
                </select>
            </div>
        </div>
    )
}
export default InputBox;