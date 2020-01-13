import React from "react";
import PepsicoLogo from '../../images/pepsico-logo-black-and-white.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    logo: {
        maxWidth: '100%',
        margin:'-13`px 10px 0 0'
      } 
}));

const Logo = () => {
    const classes = useStyles();
    return (
            <img className={classes.logo} data-test="logo" alt="Logo" src={PepsicoLogo}></img> 
    )
    
}
export default Logo