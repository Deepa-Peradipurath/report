import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    //display: 'flex',
    textAlign:'center',
    height :'500px',
    marginTop:"20%",
    '& > * + *': {
      //marginLeft: theme.spacing(2),
    },
  },
}));

export default function CircularDeterminate() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container maxWidth="sm"  className={classes.root}>
        <CircularProgress variant="determinate" value={progress} color="primary" />
    </Container>
  );
}