import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import { navigate } from "@reach/router"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },

      eleWrapper: {
          margin:'1% auto 0',  
      }
    }));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
  navigate(`/app`)
}

export default function BreadCrumbs({ appName }) {
    const classes = useStyles();
  return (
   <div className ={classes.eleWrapper}> 
        <Breadcrumbs aria-label="breadcrumb" color="textPrimary">
        <Link  href="/" onClick={ handleClick }>
            Home
        </Link>
        <Link  href="/" onClick={ handleClick }>
            { appName }
        </Link>
        <Typography color="textPrimary">Manage Notifications</Typography>
        </Breadcrumbs>
    </div>  
  );
}

