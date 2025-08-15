import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch(`https://api.frankfurter.app/latest?from=${currency}`);
                let respnseData = await response.json();
                setData(respnseData);
            } catch (err) {
                console.log("error in api fetching data");
            }
        }
        fetchData();
    },[currency]);
    console.log(data);
    return data;
}
export default useCurrencyInfo;