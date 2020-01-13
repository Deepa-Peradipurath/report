import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    formWrapper: {
        backgroundColor :'white',
        height:"400px",
        margin:"2% 0"
      }
}));


const OnBoardForm = () => {
    const classes = useStyles();
    return (
        <form>
            <Grid xs={12} item className={classes.buttonWrapper} >
                <h3>Application OnBoarding Form </h3>
            </Grid>
            <Grid xs={12} item className={classes.buttonWrapper} >
                <div className={classes.formWrapper}></div>
            </Grid>
        </form >

    )
}

export default OnBoardForm;