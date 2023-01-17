import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Avatar from "@material-ui/core/Avatar";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import CancelIcon from "@material-ui/icons/Cancel";
import React from 'react';
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    card: {
        display: "flex",
        width: '500px',
        height: '300px'
    },
    avatar: {
        margin: 10,
        width: 120,
        height: 120
    },
    details: {
        display: "flex",
        flexDirection: "column"
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

const DoctorCard = ({
                        id,
                        first_name,
                        last_name,
                        specialization
                    }) => {
    const classes = useStyles();

    let navigate = useNavigate();

    return (<div style={{display: "inline-block"}}>
            <Card style={{background: "#990D0D"}} className={classes.card} onClick={() => navigate(`/doctor-details/${id}`)}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Avatar
                            className={classes.avatar}
                            alt="Remy Sharp"
                            src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
                        />
                        <Typography component="subtitle1" color="textPrimary">
                            {first_name + " " + last_name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {specialization}
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <IconButton aria-label="previous">
                            <AddCircleIcon/>
                        </IconButton>
                        <IconButton aria-label="previous">
                            <CreditCardIcon/>
                        </IconButton>
                        <IconButton aria-label="previous">
                            <CancelIcon/>
                        </IconButton>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default DoctorCard;