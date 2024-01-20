import {useEffect, useState} from 'react'

function currencyinfo(currency){
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    const [data, setData] = useState({})    
    useEffect(() => {
        fetch(url).then((res) => {
        //   console.log(res); // Check the structure of the response
          return res.json();
        }).then((res) => {
        //   console.log(res); // Check the content of the response
          setData(res[currency]);
        }).catch((error) => {
        //   console.error('Error fetching currency info:', error);
        });
      }, [currency]);
      
    // useEffect(()=>{
    //     fetch(url).then((res)=>{res.json()})
    //     .then((res)=>{
    //         console.log(res)
    //         setData(res[currency])
    //     })
    // },[currency])
    // console.log(data)
    return data;
}

export default currencyinfo;




