
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisabel = false
}) {
    return (
        <div className="bg-white  p-3 rounded-lg flex justify-between">
            <div className="flex flex-col space-y-4 p-2">
                <label htmlFor="" className="text-[#6c6767] text-[22px] font-serif ">{label}</label>
                <input type="number" placeholder="Amount"   value={amount} className="text-2xl text-black font-semibold outline-none py-1 pl-2" 
                    onChange={(e)=>{
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }}
                />
            </div>
            <div className="flex flex-col space-y-4 p-2">
                <label htmlFor="" className="text-[#6c6767] text-[22px] font-serif ">Currency Type</label>
                <select name="" id="" className="text-black">
                    <option value="usd" className=" text-black"></option>
                </select>
            </div>
        </div>
    )
}
export default InputBox;