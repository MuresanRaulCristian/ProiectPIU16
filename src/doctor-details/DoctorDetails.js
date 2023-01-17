import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { CalendarPicker } from '@mui/x-date-pickers';
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles(theme => ({
    card: {
      display: "flex",
      width: '1000px',
      height: '300px',
      marginTop: '100px',
      marginLeft: '300px'
    },
    avatar: {
      margin: 10,
      width: 120,
      height: 120
    },
    details: {
      display: "flex",
      flexDirection: "column",
      marginLeft: '150px'
    },
    content: {
      flex: "1 0 auto"
    },
    cover: {
      width: 130
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    playIcon: {
      height: 35,
      width: 35
    }
  }));

const DoctorDetails  = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const classes = useStyles();  
    return (
        <div className={classes.card}>
        <Avatar
          className={classes.avatar}
          alt="Remy Sharp"
          src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
        />
        <div className={classes.details}>
            <h3 component="subtitle1" color="textPrimary">
              Ferdinand Angrave
            </h3>
            <Typography variant="subtitle1" color="textSecondary">
                Cardiolog
            </Typography>
            <div style={{display: "flex", height: "16px", paddingRight:"600px"}}>
            <FontAwesomeIcon icon={faStar} class="checked" size="xs" color="orange"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} class="checked" size="xs" color="orange"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} class="checked" size="xs" color="orange"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} class="checked" size="xs"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} class="checked" size="xs"></FontAwesomeIcon>
            </div>.
            <p style={{marginTop:"100px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis quis nibh maximus ullamcorper. Curabitur facilisis mi ut lobortis consectetur. Cras venenatis eros odio, quis feugiat massa tincidunt id. Proin auctor vulputate dui, et feugiat neque vestibulum ac. Etiam et ipsum vitae est congue tincidunt vitae non ipsum. Maecenas quis lectus dapibus, porta libero vel, gravida est. Aenean non convallis leo. Aenean sagittis, nibh nec interdum viverra, est quam ullamcorper enim, ultricies feugiat lacus tortor vitae tortor.
            </p>
            <div>
            <button onClick={handleClickOpen} style={{borderRadius:"10px",background: "#990d0d",height:"30px",fontSize:"20px", marginLeft:"500px", marginTop:"100px", border:"none"}}>Make an appointment</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Schedule an appointment</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="firstName"
                    label="First name"
                    type="name"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="lastName"
                    label="Last name"
                    type="name"
                    fullWidth
                    variant="standard"
                />
                <input type={"date"}></input>
                <input type={"time"}></input>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Make appointment</Button>
        </DialogActions>
      </Dialog>
            </div>
            
        </div>
       
        </div>
    )
}
export default DoctorDetails;