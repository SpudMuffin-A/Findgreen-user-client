import React from "react";
import { Breadcrumbs, Typography, Box,Tab,TabPanel,value } from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import RoleForm from "../components/Forms/RoleForm";
export default function Role() {
  const history = useHistory();
  return (
    <main className="flex items-center sm:p-12 md:w-11/14">
      <div className="w-full" style={{ marginRight: "0px", marginLeft: "100px" }}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/app/dashboard">
            Home
          </Link>
          <Typography color="text.primary">Role Management</Typography>
        </Breadcrumbs>
       <RoleForm/>
      </div>
    </main>
  );
}
