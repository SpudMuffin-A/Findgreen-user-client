import React, { useState, useEffect } from "react";
import { Input } from "@windmill/react-ui";
import { SearchIcon } from "../../icons/index";
import { VscFilter } from "react-icons/vsc";
import CardsForm from "./CardsForm";

export default function Homescreen(props) {
  const { openModal, apiData, handleInputChange } = props;
  console.log("api", apiData);
  return (
    <div className="w-full">
      <div className="relative w-full max-w-xl mr-10">
        <div className="flex items-center">
        </div>

        {/* <div>
          <Input
            style={{ marginLeft: "1rem", marginTop: "-75px" }}
            className="pl-8 text-gray-700"
            placeholder="    Search Here"
            aria-label="Search"
            type="search"
            onChange={handleInputChange}
          />

          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <SearchIcon className="w-5 h-5" style={{ marginTop: "35px" }} />
          </div>

          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <VscFilter
              className="w-5 h-5"
              style={{ marginTop: 35 }}
              onClick={openModal}
            />
          </div>
        </div> */}
      </div>
      {/* <div className="mt-2" style={{ overflow: "auto" ,height:'70vh'}}>
        {apiData && apiData.length > 0
          ? apiData.map((data, index) => {
              return <CardsForm data={data} />;
            })
          : null}
      </div> */}
    </div>
  );
}
