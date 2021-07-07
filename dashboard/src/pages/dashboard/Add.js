import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Add() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openInvoiceAppNew = () => {
    window.open("https://invoice-app-ashen.vercel.app/", "_blank");
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        + New
      </Button>
      <Button variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }} color="primary" onClick={openInvoiceAppNew}>
        Create a new Invoice
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Create
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
            <div style={{backgroundColor: '#f0f0f0',textAlign: 'center', padding: "25px", marginTop: "25px" }} >
                <h1>Add a new contact</h1>
                <TextField required id="standard-full-width" fullWidth style={{ margin: "15px 0" }} label="Customers company name"/>
                <TextField id="standard-full-width" fullWidth style={{ margin: "15px 0" }} label="Customer's full name (optional)"/>
                <TextField id="standard-full-width" fullWidth style={{ margin: "15px 0" }} label="Email (optional)"/>
                <TextField id="standard-full-width" fullWidth style={{ margin: "15px 0" }} label="Phone (optional)"/>
                <Button variant="contained" color="primary" fullWidth>
                    Add customer
                </Button>
            </div>
        </Container>
      </Dialog>
    </div>
  );
}
