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
import DeleteIcon from '@mui/icons-material/Delete';
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

function createData(id, title, message, status, date_created, date_sent, action) {
    return {id, title, message, status, date_created, date_sent, action};
  }
  
  const rows = [
    createData('NTF_01', 'Station Nearby', 'Book Slots Now!', 'Sent', '23/04/2023', '23/04/2023', '87'),
    createData('NTF_02', 'New Discount', 'Use Code EVFREE!', 'Sent', '18/04/2023', '18/04/2023', '87'),
    createData('NTF_03', 'New Station Added', 'New Station Near You!', 'Sent', '12/04/2023', '12/04/2023', '87'),
  ];

  
export default function NotificationForm() {
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
        <Fab variant="extended" size="medium" color="primary" aria-label="add" onClick={()=>{history.push({pathname:"/app/addNotification"})}}>
        + Add Notification
      </Fab>
    </Box>
    <TableContainer component={Paper}></TableContainer>
    <Box sx={{ width: '100%' }} style ={{marginTop:"15px"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"14pt"}}>Notification ID</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"14pt"}}align="left">Title</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"14pt"}}align="left">Message</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"14pt"}}align="left">Status</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"14pt"}}align="left">Date Created</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"14pt"}}align="left">Date Sent</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Sora",fontSize:"14pt"}}align="left">Action</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.datetime}>
              <StyledTableCell align="left">{row.id}</StyledTableCell>
              <StyledTableCell align="left">{row.title}</StyledTableCell>
              <StyledTableCell align="left">{row.message}</StyledTableCell>
              <StyledTableCell align="left">{row.status}</StyledTableCell>
              <StyledTableCell align="left">{row.date_created}</StyledTableCell>
              <StyledTableCell align="left">{row.date_sent}</StyledTableCell>
              <StyledTableCell align="left">
              <IconButton aria-label="delete" onClick={() => {}}>
            <DeleteIcon />
          </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </TabPanel>
      
    </Box>
    </TabPanel>
    // </TabPanel>
  );
}