import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        margin: 'auto',
        maxWidth: 550,
    },
    image: {
        width: 30,
        height: 27
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    symbolColor: {
        color: '#ffab00',
        fontSize: '0.885rem', 
    },
    low: {
        color: 'red'
        ,   fontSize: '0.885rem', 
    },
    high: {
        color: 'blue',
        fontSize: '0.885rem', 
    },
    currency: {
        fontSize: '0.885rem',
        color: '#212121',
        fontWeight:550
    },
    commonFont :{
        fontSize: '0.885rem', 
    }
}));
const CryptoCard = ({ data }) => {
    const classes = useStyles();
    return (<>
        <div className={classes.root}>
            <br />
            <Paper className={classes.paper}>
                <Grid container spacing={2} >
                    <Grid item>
                        <Typography variant="body1" className={classes.commonFont}>Coin</Typography>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={data.image} />
                        </ButtonBase>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" className={classes.commonFont}>Currency</Typography>
                        <Typography gutterBottom variant="subtitle1" className={classes.currency} >
                            {data.name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" className={classes.commonFont}>Symbol</Typography>
                        <Typography gutterBottom variant="subtitle1" className={classes.symbolColor}>
                            {data.symbol.toUpperCase()}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" className={classes.commonFont}>Price</Typography>
                        <Typography variant="subtitle1" className={classes.commonFont}>{data.current_price}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" className={classes.commonFont}>Low</Typography>
                        <Typography variant="subtitle1" className={classes.low}>{data.low_24h}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" className={classes.commonFont}>High</Typography>
                        <Typography variant="subtitle1" className={classes.high}> {data.high_24h}</Typography>
                    </Grid>
                    {/* <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Standard license
                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    ID: 1030114
                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    Remove
                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">$19.00</Typography>
                        </Grid>
                    </Grid> */}
                </Grid>
            </Paper>
        </div>
    </>);
}
export default CryptoCard;