import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import Icon from '@mui/material/Icon';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { Navigate, useNavigate } from 'react-router-dom';

const Register = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const textStyle = {marginTop: "5px"}

    const navigate = useNavigate();

    const navigateToLogin = () => {
         navigate('/login');
    };

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Register</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField style={textStyle} fullWidth label='Name' placeholder="Enter your name" />
                    <TextField style={textStyle} fullWidth label='Email' type="email" placeholder="Enter your email" />
                    <TextField style={textStyle} fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField style={textStyle} fullWidth label='Password' type="password" placeholder="Enter your password"/>
                    <TextField style={textStyle} fullWidth label='Confirm Password' type="password" placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary' onClick={navigateToLogin}>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Register;