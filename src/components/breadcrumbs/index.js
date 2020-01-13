import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },

      eleWrapper: {
          margin:'1% auto',
      }
    }));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BreadCrumbs() {
    const classes = useStyles();
  return (
   <div className ={classes.eleWrapper}> 
        <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
            Home
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            My-Pepsico-NexGen
        </Link>
        <Typography color="textPrimary">Manage Notifications</Typography>
        </Breadcrumbs>
    </div>  
  );
}

