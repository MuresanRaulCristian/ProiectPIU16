import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import Icon from '@mui/material/Icon';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

const Login = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const textStyle = {marginTop: "5px"}
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Login</h2>
                    <Typography variant='caption' gutterBottom>Enter your credentials to login</Typography>
                </Grid>
                <form>
                    <TextField style={textStyle} fullWidth label='Email' type="email" placeholder="Enter your email" />
                    <TextField style={textStyle} fullWidth label='Password' type="password" placeholder="Enter your password"/>
                    <Button type='submit' variant='contained' color='primary'>Login</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login;