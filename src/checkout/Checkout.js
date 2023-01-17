import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@mui/material/Button';
import NavigationBar from "../commons/navigation-bar-admin";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    totalRow: {
        fontWeight: 'bold',
    },
}));

export default function Checkout() {
    const classes = useStyles();
    const items = [{
        "name": "Acetaminophen",
        "dosage": "325-650 mg every 4-6 hours, up to 4g/day",
        price: Math.random() * 100,
        quantity: Math.random() * 5
    }, {
        "name": "Ibuprofen",
        "dosage": "200-800 mg every 4-6 hours, up to 3.2g/day",
        price: Math.random() * 100,
        quantity: Math.random() * 5
    }, {
        "name": "Aspirin",
        "dosage": "325-650 mg every 4-6 hours, up to 4g/day",
        price: Math.random() * 100,
        quantity: Math.random() * 5
    }];


    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;


    return (
        <div>
            <NavigationBar></NavigationBar>
            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '150px'}}>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: 'column',
                    justifyContent: "center",
                    gap: "50px"
                }}>
                    {items.map(medicine => (
                        <Card key={medicine.name} className={classes.card} style={{width: "240px"}}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {medicine.name}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {Math.trunc(medicine.quantity)} x ${Math.trunc(medicine.price)}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div class="total">
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <tbody>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1">Subtotal</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Chip label={`$${subtotal.toFixed(2)}`}/>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1">Tax</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Chip label={`$${tax.toFixed(2)}`}/>
                                </TableCell>
                            </TableRow>
                            <TableRow className={classes.totalRow}>
                                <TableCell>
                                    <Typography variant="body1">Total</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Chip label={`$${total.toFixed(2)}`}/>
                                </TableCell>
                            </TableRow>
                            </tbody>
                        </Table>
                    </Paper>
                    <Button style={{marginTop: '16px', float: 'right'}} onClick={() => {
                        alert("Comanda a fost plasata cu succes!");
                        window.location.href = '/';
                    }}>Plaseaza comanda</Button>
                </div>
            </div>
        </div>
    );
}