import React from "react";
import { FaTelegramPlane, FaShareAlt, FaRegClock } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Card, CardBody } from "@windmill/react-ui";
import { Button } from "@windmill/react-ui";
import { useHistory } from "react-router-dom";

function CardsForm(props) {
  const history = useHistory();
  const { data } = props;

  const arr = data.station_connector_type;
  const connector_type = arr.split(",");
  console.log("connector", connector_type);

  return (
    <Card colored className="  ml-3.5 w-96 bg-white ">
      <CardBody>
        <div className="flex flex-col md:flex-row space-x-10">
          <p className="text-base" name="station_name">
            {data.station_name}
          </p>
          <p
            style={{ textColor: "#478B60" }}
            className=" mt-1 text-sm font-small text-green-400 dark:text-green-300 "
            name="station_status"
          >
            {data.station_status}
          </p>
          <p className="mt-1 flex flex-col md:flex-row space-x-5">
            <FaTelegramPlane />
            <FaShareAlt />
            <FaHeart />
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-x-0">
          <p className="mb-3 font-sans text-xs" name="area">
            {data.station_address} ,
          </p>
          <p className="mb-3 font-sans text-xs" name="city">
            {data.station_area}
          </p>
        </div>
        <div className="flex flex-col md:flex-row ">
          <MdLocationOn />
          <p className=" font-sans text-sm" name="distance">
            {" "}
            4.5 km
          </p>

          <FaRegClock className="ml-6" />
          <p className="mb-3 ml-1 font-sans text-sm" name="timing">
            {data.station_working_time}
          </p>
        </div>
        <p className="mb-3 ml-2 font-sans text-xs" name="connector">
          Available Connectors -{data.station_available_connector}
        </p>
        <div className="flex flex-col md:flex-row space-x-3  ">
          {connector_type.map((value, index) => {
            return (
              <div>
                <Button
                  className="  border-green-700 "
                  style={{ backgroundColor: "white", color: "#478B60" }}
                  onClick={() => {
                    history.push({ pathname: `/app/Bookingslot/${data.id}/${value}`});
                  }}
                >
                  {value}
                </Button>
              </div>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
}

export default CardsForm;

