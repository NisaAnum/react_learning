import { useEffect, useState} from 'react'

function useCurrency(Currency) {
    const [data, setData] = useState([])
 useEffect( ()=> {
    fetch(`https://open.er-api.com/v6/latest/${Currency}`)
    .then((res) => res.json())
    .then(res => {
      setData(res.rates);
    });
}, [Currency]);

//console.log(data);
 return data;
}

export default useCurrency