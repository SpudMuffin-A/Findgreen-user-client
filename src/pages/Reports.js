import React from "react";
import { Breadcrumbs, Typography, Box,Tab,TabPanel,value } from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ReportForm from "../components/Forms/ReportForm";
export default function MyBooking() {
  const history = useHistory();
  return (
    <main className="flex items-center sm:p-12 md:w-11/14">
      <div className="w-full" style={{ marginRight: "0px", marginLeft: "150px" }}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Reports For Admin</Typography>
        </Breadcrumbs>
       <ReportForm/>
      </div>
    </main>
  );
}
