import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green,grey} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    buttonSyle: {
        margin: theme.spacing(1),
        color: grey[50],
        height: '44px',
        textTransform: "capitalize"
    }
}));

const TYPE_COLOR_MAP = {
    primary: green,
    secondary : grey,
    default: grey
    //success: green
}

export default function CustomizedButton({ type, text }) {
    
    const classes = useStyles();
    const theme = React.useMemo(() => {
        return createMuiTheme({
            palette: {
                primary: TYPE_COLOR_MAP[type]
            }
        });
    }, [type])

    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" className={classes.buttonSyle}>
                {text}
            </Button>
        </ThemeProvider>
    );
}
