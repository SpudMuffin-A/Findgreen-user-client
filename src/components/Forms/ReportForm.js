import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useHistory } from "react-router-dom";
// import BookingModal from '../Modals/BookingModal';
import { Link } from 'react-router-dom';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    style={{ marginRight: "0px", marginLeft: "100px" }}
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

function createData(col1, col2) {
    return { col1, col2};
  }
  function cancelData(cs_id, station, weekly, monthly, yearly) {
    return { cs_id, station, weekly, monthly, yearly};
  }
  
  const rows = [
    createData('Active Users', '376'),
    createData('New Users', '89'),    
    createData('Newly Registered Stations', '18'),    
    createData('Total Charging Stations', '28'),
    createData('Total Charging Sessions', '789'),    
  ];

  const cancelrows = [
    cancelData('CS_101', 'Shell Recharge', '2100', '8000', '18000'), 
    cancelData('CS_102', 'Tata Power', '1500', '6790', '12800'),
    cancelData('CS_103', 'Ather Energy', '4500', '9908', '21000'),
    cancelData('CS_104', 'Adani Power', '1300', '6100', '12000'),
    
  ];
  
export default function MyBookingForm() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
    //   backgroundColor: "#3B7CFF",
    backgroundColor: "rgba(0, 0, 256, 0.1)",
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
     
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type()': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 10,
    },
  }));
  return (
    <Box sx={{ width: '100%' ,  maxWidth: 700 }} style ={{marginTop:"15px",marginLeft:"-20px"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} textColor='primary' indicatorColor='primary'>
          <Tab label="Find Green Usage" {...a11yProps(0)}/>
          <Tab label="Charging Station Revenue"  {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 , maxWidth: 700, border: "1px solid #000"}} aria-label="customized table" style={{ fontSize: '20px' }}>
        {/* <TableHead >
          <TableRow >
            <StyledTableCell style={{fontFamily:"Poppins",fontSize:"14pt"}}> Date & Time</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Poppins",fontSize:"14pt"}}align="left">Stations</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Poppins",fontSize:"14pt"}}align="left">Payment</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Poppins",fontSize:"14pt"}}align="left">Slot</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Poppins",fontSize:"14pt"}}align="left">Time</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Poppins",fontSize:"14pt"}}align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow >
              <StyledTableCell align="left" style={{ border: '1px solid #333', fontSize: '18px' }}>{row.col1}</StyledTableCell>
              <StyledTableCell align="center" style={{ border: '1px solid #333', fontSize: '18px' }}>{row.col2}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" style={{ border: '5px solid #333' }}>
        <TableHead >
          <TableRow >
            <StyledTableCell style={{fontFamily:"Poppins",fontSize:"14pt"}}> Date & Time</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Poppins",fontSize:"14pt"}}align="left">Stations</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Poppins",fontSize:"14pt"}}align="left">Payment</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Poppins",fontSize:"14pt"}}align="left">Slot</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Poppins",fontSize:"14pt"}}align="left">Time</StyledTableCell>
            <StyledTableCell style={{fontFamily:"Poppins",fontSize:"14pt"}}align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cancelrows.map((row) => (
            <StyledTableRow >
              <StyledTableCell align="left">{row.cs_id}</StyledTableCell>
              <StyledTableCell align="left">{row.station}</StyledTableCell>
              <StyledTableCell align="left">{row.weekly}</StyledTableCell>
              <StyledTableCell align="left">{row.monthly}</StyledTableCell>
              <StyledTableCell align="left">{row.yearly}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </TabPanel>
      
    </Box>
  );
}