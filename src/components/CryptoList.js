import useFetch from "../hooks/useFetch";
import CryptoCard from "./CryptoCard";
import { useContext } from "react";
import CryptoContext from "../hooks/CryptoContext";
const CryptoList = (props) => {
    const {originalData, usedata} = useContext(CryptoContext);
    const cryptoData = usedata;
    return (
        <>
            {
                cryptoData && cryptoData.length > 0
                && cryptoData.map(data => (
                    <CryptoCard data={data} key={data.id} />
                ))
            }
        </>
    )
}
export default CryptoList;