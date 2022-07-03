import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(order, trackingID, date, status) {
    return { order, trackingID, date, status };
}

const rows = [
    createData("IPhone 13 Pro", 37202212491094, "3 July 2022", "Approved"),
    createData("Xiaomi Smart Watch", 37202212511182, "3 July 2022", "Pending"),
    createData("Samsung S20", 37202210011277, "3 July 2022", "Delivered"),
    createData("OPPO Reno 6 5G ", 37202210101336, "3 July 2022", "Approved"),
    createData("Amazfit Neo Sports Watch", 37202210151487, "3 July 2022", "Approved"),
    createData("Xiaomi Redmi Note 11", 37202210181501, "3 July 2022", "Delivered"),
];


const makeStyles = (status) => {
    if (status === 'Approved') {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color:'green'
        }
    }
    else if (status === 'Pending') {
        return {
            background: '#ffadad8f',
            color:'red'
        }
    }
    else{
        return {
            background: '#59bfff',
            color:'white'
        }
    }
}


const BasicTable = () => {
    return (
        <div className="Table">
            <h3>Recent Orders</h3>
            <TableContainer component={Paper} style={{boxShadow:"0px 13px 20px 0px #80808029"}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>Order</TableCell>
                    <TableCell align="left">Tracking ID</TableCell>
                    <TableCell align="left">Date</TableCell>
                    <TableCell align="left">Status</TableCell>
                    <TableCell align="left">Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow
                        key={row.order}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                        {row.order}
                        </TableCell>
                        <TableCell align="left">{row.trackingID}</TableCell>
                        <TableCell align="left">{row.date}</TableCell>
                        <TableCell align="left">
                            <span class="status" style={makeStyles(row.status)}>{row.status}</span>
                        </TableCell>
                        <TableCell align="left" className='Details'>Details</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default BasicTable