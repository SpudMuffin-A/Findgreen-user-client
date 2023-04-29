import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, IconButton } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import BookingModal from '../Modals/BookingModal';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import Button from '@mui/material-next/Button';
import Fab from '@mui/material/Fab';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function createData(userName, role, description, status) {
    return { userName, role, description, status};
  }
  
  const rows = [
    createData('Shubham', 'Admin','To manage charging station', true),
    createData('Virat', 'Admin','To manage charging station', false),
    createData('Rahul', 'Support','Customer support', true),
    createData('Aman', 'Admin','To manage charging station', false),
    
  ];

//   const cancelrows = [
//     cancelData('17Jan-2022, 10:12 AM','Shell Recharge,Tokyo', 'Refund in process', '3:00 PM', '15 Min',<Link
//     style={{ textColor: "#478B60" }}
//     className="text-sm font-small text-red-400 dark:text-red-300 hover:underline "
//     to="/auth/login"
//   > Visit Again
//   </Link>),
//     cancelData('27Jan-2022, 10:12 AM','Tata Power,Tokyo', 'Cash On Delivery', '5:00 PM', '30 Min',<Link
//     style={{ textColor: "#478B60" }}
//     className="text-sm font-small text-red-400 dark:text-red-300 hover:underline "
//     to="/auth/login"
//   > Visit Again
//   </Link>),
//     cancelData('23Jan-2022, 10:12 AM','Shell Recharge,Monay', 'Cash On Delivery', '8:00 PM', '20 Min',<Link
//     style={{ textColor: "#478B60" }}
//     className="text-sm font-small text-red-400 dark:text-red-500 hover:underline "
//     to="/auth/login"
//   > Visit Again
//   </Link>),
//     cancelData('29Jan-2022, 10:12 AM','Adani Power,Monay', 'Refund In Process', '7:00 PM', '25 Min',<Link
//     style={{ textColor: "#478B60" }}
//     className="text-sm font-small text-red-400 dark:text-red-300 hover:underline "
//     to="/auth/login"
//   > Visit Again
//   </Link>),
    
//   ];
  
export default function MyBookingForm() {
  const [value, setValue] = React.useState(0);
  const history =useHistory()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "rgba(0, 0, 256, 0.03)",
      color: "#7B7B7B",
      fontFamily:"Sora",

    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      backgroundColor: "rgba(0, 0, 256, 0.03)",
      borderColor: "#7B7B7B",
      color: "#000000",
      width:"200px",
      fontFamily:"Sora"
     
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type()': {
      backgroundColor: "#4B93FF",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
    <TabPanel value={value} index={0}>
    <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
    {/* <Link to="/addStation">
        <IconButton sx={{ bgcolor: "#3B7CFF", borderRadius: "15%", color: "white" }}>
        <AddCircleIcon sx={{ color: "common.white" }} /> 
        Add New Station
        </IconButton>
    </Link> */}
    {/* <Button
    component={Link}
    to="/app/addStation"
  color="primary"
  disabled={false}
  size="large"
  variant="filledTonal"
  fontFamily="Poppins">  + Add New Station </Button> */}
        <Fab variant="extended" size="medium" color="primary" aria-label="add" onClick={()=>{history.push({pathname:"/app/addUser"})}}>
        + Add User
      </Fab>
    </Box>
    <TableContainer component={Paper}></TableContainer>
    <Box sx={{ width: '100%' }} style ={{marginTop:"15px"}}>
      <Box sx={{ border: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} textColor='primary' indicatorColor='primary'>
          {/* <Tab label="Upcoming Bookings" {...a11yProps(0)}/> */}
          {/* <Tab label="Cancelled Bookings" {...a11yProps(1)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" >
        <TableHead >
          <TableRow >
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"16pt"}}> User Name</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"16pt"}}align="left">Role</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"16pt"}}align="left">Description</StyledTableCell>
            {/* <StyledTableCell style={{fontFamily:"Sora",fontSize:"14pt"}}align="left">Email</StyledTableCell> */}
            {/* <StyledTableCell style={{fontFamily:"Sora",fontSize:"14pt"}}align="left">Phone Number</StyledTableCell> */}
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"16pt"}}align="left">Status</StyledTableCell>
            {/* <StyledTableCell style={{fontFamily:"Sora",fontSize:"14pt"}}align="left">Total Slots Booked</StyledTableCell> */}
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow >
              <StyledTableCell align="left">{row.userName}</StyledTableCell>
              <StyledTableCell align="left">{row.role}</StyledTableCell>
              <StyledTableCell align="left">{row.description}</StyledTableCell>
              <StyledTableCell align="left"><Switch checked={row.status} onChange={() => {}} color="primary" /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" >
        <TableHead >
          <TableRow >
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"14pt"}}> Date & Time</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"14pt"}}align="left">Stations</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"14pt"}}align="left">Payment</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"14pt"}}align="left">Slot</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"14pt"}}align="left">Time</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"14pt"}}align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {cancelrows.map((row) => (
            <StyledTableRow key={row.datetime}>
              <StyledTableCell component="th" scope="row">
                {row.datetime}
              </StyledTableCell>
              <StyledTableCell align="left">{row.station}</StyledTableCell>
              <StyledTableCell align="left">{row.payment}</StyledTableCell>
              <StyledTableCell align="left">{row.slot}</StyledTableCell>
              <StyledTableCell align="left">{row.time}</StyledTableCell>
              <StyledTableCell align="left">{row.cancel}</StyledTableCell>
            </StyledTableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
      </TabPanel>
      
    </Box>
    </TabPanel>
    // </TabPanel>
  );
}