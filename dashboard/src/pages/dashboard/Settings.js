import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { Card } from '@material-ui/core';
import Radio_ from './Radio_';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Settings() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          centered
        >
          <Tab style={{width: "150px"}}label="Profile settings" {...a11yProps(0)} />
          <Tab style={{width: "150px"}} label="Company settings" {...a11yProps(1)} />
          <Tab style={{width: "150px"}} label="Receiving methods" {...a11yProps(2)} />
          <Tab style={{width: "150px"}} label="Payments methods" {...a11yProps(3)} />
          <Tab style={{width: "150px"}} label="Billing" {...a11yProps(4)} />
          <Tab style={{width: "150px"}} label="Support" {...a11yProps(5)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <div>
            <div>
                <h1><span>Profile settings<Button style={{float: "right"}} variant="contained" color="primary">Edit</Button></span></h1>
            </div>
            <div style={{padding: "25px", marginTop: "20px" }} >
                <TextField required id="standard-full-width" fullWidth style={{ margin: "15px 0" }} label="Customers company name"/>
                <TextField id="standard-full-width" fullWidth style={{ margin: "15px 0" }} label="Email"/>
                <TextField id="standard-full-width" fullWidth style={{ margin: "15px 0" }} label="First name"/>
                <TextField id="standard-full-width" fullWidth style={{ margin: "15px 0" }} label="Last name"/>
                <TextField id="standard-full-width" fullWidth style={{ margin: "15px 0" }} label="Role"/>
            </div>
            <div>
                <h1 style={{ marginBottom: "20px" }}><span>Change password<Button style={{float: "right"}} variant="contained" color="primary">Edit</Button></span></h1>
            </div>
            <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                fullWidth
            />
            <div style={{paddingTop: "30px"}}>
                <h1 style={{ marginBottom: "20px" }}>Email notification</h1>
                <span>
                    Remind me when bill's due date is near
                    <div style={{float: "right"}}>
                    <Switch
                        checked={state.checkedA}
                        onChange={handleChangeSwitch}
                        name="checkedA"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    /> 
                    </div>
                </span>
            </div>
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
            <div>
                <h1><span>Comany information<Button style={{float: "right"}} variant="contained" color="primary">Edit</Button></span></h1>
            </div>
            <div>
                <div style={{padding: "20px"}}>
                    <p>Buisness name</p>
                    <h3>Aspect Solutions Inc</h3>
                </div>
                <div style={{padding: "20px"}}>
                    <p>Buisness address</p>
                    <h3>717 k St, Sacramento, CA 95814, USA</h3>
                </div>
                <div style={{padding: "20px"}}>
                    <p>Suite #</p>
                    <h3>STE 207</h3>
                </div>
                <div style={{padding: "20px"}}>
                    <p>Mobile number</p>
                    <h3>(510) 684-6842</h3>
                </div>
                <div style={{padding: "20px"}}>
                    <p>Contact first name</p>
                    <h3>Ganesh</h3>
                </div>
                <div style={{padding: "20px"}}>
                    <p>Contact first name</p>
                    <h3>Tangella</h3>
                </div>
            </div>
                <div style={{paddingTop:"20px"}}>
                    <h1>Company legal information</h1>
                    <div>
                    <div style={{padding: "20px"}}>
                        <p>Legal buisness name</p>
                        <h3>Aspect Solutions Inc</h3>
                    </div>
                    <div style={{padding: "20px"}}>
                        <p>Legal buisness address</p>
                        <h3>717 k St, Sacramento, CA 95814, USA</h3>
                    </div>
                    <div style={{padding: "20px"}}>
                        <p>Tax ID type</p>
                        <h3>EIN</h3>
                    </div>
                    <div style={{padding: "20px"}}>
                        <p>Tax ID number</p>
                        <h3>770406689</h3>
                    </div>
                </div>
                <h1>Comapany logo</h1>
                <div style={{height:"100px", width:"100px", margin: "5px 20px" ,backgroundColor:"red", borderRadius:"100%"}}></div>
            </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Card style={{padding: "10px"}}>
            <div style={{height:"100px", width:"100px", margin: "5px" ,backgroundColor:"red", borderRadius:"100%", float: "left"}}>
            </div>
            <div style={{padding: "15px"}}>
            <h1><span>
                Bank account
                <Button style={{float: "right"}} variant="contained" color="primary">...</Button>
            </span></h1>
            <p>checking account (..9418)</p>
            </div>
        </Card>
        <Radio_ />
      </TabPanel>

      <TabPanel value={value} index={3}>
      <Card style={{padding: "10px"}}>
            <div style={{height:"100px", width:"100px", margin: "5px" ,backgroundColor:"red", borderRadius:"100%", float: "left"}}>
            </div>
            <div style={{padding: "15px"}}>
            <h1><span>
                Bank of America, BC-CHK_9416
                <Button style={{float: "right"}} variant="contained" color="primary">...</Button>
            </span></h1>
            <p>Free</p>
            </div>
        </Card>
        <h3 style={{margin: "40px 0"}}><a>+ Add another bank account</a></h3>
        <Card style={{padding: "10px"}}>
            <div style={{height:"100px", width:"100px", margin: "5px" ,backgroundColor:"black", borderRadius:"100%", float: "left"}}>
            </div>
            <div style={{padding: "15px"}}>
            <h1><span>
                Bank of America, BC-CHK_9416
                <Button style={{float: "right"}}>Add this method</Button>
            </span></h1>
            <p>Defer this payment and earn card reward 2.9% free</p>
            </div>
        </Card>
      </TabPanel>

      <TabPanel value={value} index={4}>
        Billing
      </TabPanel>

      <TabPanel value={value} index={5}>
        Support
      </TabPanel>
    </div>
  );
}
