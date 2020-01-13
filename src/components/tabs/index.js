import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Router,Link } from "@reach/router"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent"
    
  },
  tabBar:{
    borderBottom:"#bdbcbc solid 1px"
  }
}));
function Display({ label }) {
    return <div style={{
      backgroundColor: `white`,
      padding: `10px`,
      minHeight:`500px`
    }}>
    {label}
    </div>;
  }

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
  const handleTabChange = index => {
    setValue(index);
  };
  const NavLink = React.forwardRef((props, ref) => (
    <Link
      {...props}
      getProps={({ isPartiallyCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        if (isPartiallyCurrent) {
          handleTabChange(props.index);
        }
      }}
    />
  )); 
  return (
    <div className={classes.root}>
    <div position="static">
    <Fragment>
        <Tabs
            value={value}
            onChange={(e, val) => {
                setValue(val);
                console.log(value);
            }}
            >
            <Tab label="Manage Notifications" index={0} component={NavLink} to="/app/notification" />
            <Tab label="Manage Templates" index={1} component={NavLink} to="/app/notification/Templates" />
            <Tab label="Manage Report" index={2} component={NavLink} to="/app/notification/Reports" />
        </Tabs>
        <Router>
            <Display path="/Templates" label="Manage Templates" />
            <Display path="/Reports" label="Manage Reports" />
            <Display path="/" label="Manage Notifications" />
        </Router>
            
      </Fragment>  
    </div>
  </div>
    
  );
}