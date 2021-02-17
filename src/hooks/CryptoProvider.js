import useFetch from "./useFetch";
import { useState, useEffect } from "react";
import CryptoContext from "./CryptoContext";
import { ROOT_API } from "../api-config";

const CryptoProvider = (props) => {
    const [originalData, filterData] = useFetch(ROOT_API);
    const [usedata, setData] = useState([]);
    useEffect(() => {
        setData(filterData);
    },[filterData])
    return (
        <CryptoContext.Provider value={{ originalData, usedata , setData}}>
            {props.children}
        </CryptoContext.Provider>
    )
}
export default CryptoProvider;