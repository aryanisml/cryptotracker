import { useContext, useState } from "react";
import CryptoContext from "../hooks/CryptoContext";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
const SearchCrypto = (props) => {
    const classes = useStyles();
    const { originalData, usedata, setData } = useContext(CryptoContext);
    const [query, setQuery] = useState('');

    const changeHandler = (e) => {
        setQuery(e.target.value);
        setData([...originalData].filter(d => d.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    return (
        <>
            <div className={classes.root}>
                <TextField id="outlined-basic" label="Crypto" variant="outlined" placeholder="Search Crypto Currency"
                    value={query}
                    onChange={changeHandler} style ={{width: '95%'}}/>
            </div>
        </>
    )
}

export default SearchCrypto;