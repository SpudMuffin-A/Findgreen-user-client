import React from "react";
import { Breadcrumbs, Typography, Box,Tab,TabPanel,value } from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserForm from "../components/Forms/UserForm";
export default function User() {
  const history = useHistory();
  return (
    <main className="flex items-center sm:p-12 md:w-11/14">
      <div className="w-full" style={{ marginRight: "0px", marginLeft: "100px" }}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/app/dashboard">
            Home
          </Link>
          <Typography color="text.primary">User Management</Typography>
        </Breadcrumbs>
       <UserForm/>
      </div>
    </main>
  );
}
