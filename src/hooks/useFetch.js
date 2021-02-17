import { useState, useEffect } from 'react';
import axios from 'axios';
const useFetch = url => {
    const [originalData, setOriginalData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    useEffect(() => {
        const getCryptoData = async () => {
            const result = axios.get(url);
            const response = (await result).data;
            setOriginalData(response);
            setFilterData(response);
        }
        getCryptoData();
    }, [url])
    return [originalData, filterData];
}

export default useFetch;