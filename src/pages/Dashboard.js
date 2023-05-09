import React, { useState, useEffect } from 'react'

import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, ClockIcon, MoneyIcon, PeopleIcon, ChargingStation } from '../icons'
import RoundIcon from '../components/RoundIcon'
import response from '../utils/demo/tableData'
import Homescreen from "../components/Home/Homescreen";
import axios from "axios";
import { Bar } from 'react-chartjs-2';


import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from '@windmill/react-ui'

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
  barOptions,
  barLegends,
  lineOptions1,
  barChartOptions,
  BarChart
} from '../utils/demo/chartsData'

function Dashboard() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [search, setSearch] = useState("");
  const [totalStations, setTotalStations] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [totalHours, setTotalHours] = useState(null);

  useEffect(() => {
    axios.get("http://172.174.202.43/find_green_admin_portal/v1/station/dashboard/").then((response) => {
        setTotalStations(response.data.stations['Total Charging Stations']);
        setActiveUsers(response.data.users['Active Users']);
        // setTotalHours(response.data.bookings[0]['Total Charging Duration']);
        const totalDuration = response.data.bookings.reduce((acc, curr) => acc + parseInt(curr["Total Charging Duration"]), 0);
        setTotalHours(totalDuration);
    });
    
  }, []);

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  function handleInputChange(e) {
    const Timer = setTimeout(() => {
      setSearch(e.target.value);
      clearTimeout(Timer);
    }, 1000);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }


  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  

  return (
    <main className="flex items-center sm:p-12 md:w-11/14">
      <div className="w-full" style={{ marginRight: "0px", marginLeft: "100px" }}>
    <>
      {/* <PageTitle>Dashboard</PageTitle> */}
      <span className="text-2xl font-semibold" style={{marginBottom: "100px"}}>Dashboard</span>

      <Homescreen
            openModal={openModal}
            handleInputChange={handleInputChange}
            apiData={apiData}
          />
      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3" style={{marginTop: "10px"}}>
        <InfoCard title="Total Charging Stations" value={totalStations} >
          <RoundIcon
            icon={ChargingStation}
            
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4 "
            
          />
        </InfoCard>

        <InfoCard title="Total Charging Hours" value={totalHours}>
          <RoundIcon
            icon={ClockIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Active Users" value={activeUsers}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

      </div>
    <div className="flex flex-col mt-8 md:grid-cols-2 xl:grid-cols-2">
      <PageTitle style={{marginTop: "100px"}}>Find Green Statistics</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
      <ChartCard title="Revenue">
          {/* <Line {...barOptions} />
          <ChartLegend legends={barLegends} /> */}
          <Bar {...barChartOptions} />
          <ChartLegend legends={barLegends} />
        </ChartCard>
        <ChartCard title="Connectors Used">
          <div className="flex justify-center w-full">
            <div className="w-1/2">
              <Doughnut {...doughnutOptions} />
            </div>
          </div>
          {/* <ChartLegend legends={doughnutLegends} /> */}
          </ChartCard>
        </div>
        <div className="grid gap-6 mb-8 " >  
        
        <ChartCard title="Total Charging Customers">
          <Line {...lineOptions1} />
          {/* <ChartLegend legends={barLegends} /> */}
        </ChartCard>
      </div>
    </div>
    </>
    </div>
    </main>
    
  )
}

export default Dashboard
