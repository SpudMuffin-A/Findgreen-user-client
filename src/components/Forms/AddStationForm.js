import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Input, Label, Select, Button,HelperText } from "@windmill/react-ui";
import { useHistory } from "react-router-dom";
// import ProfileModal from "../Modals/ProfileModal";

const AddStationForm = () => {
    return (
      <div style={{ marginTop: "50px" }}>
        <h1>Add Charging Station</h1>
        <Formik
          initialValues={{
            name: "",
            address: "",
            email: "",
            phoneNumber: "",
            connectorType: "",
            chargerType: "",
            capacity: "",
            tariff: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Required";
            }
            if (!values.address) {
              errors.address = "Required";
            }
            // Add additional validation rules here
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form style={{ marginTop: "50px" }}>
                <div
            className="mb-4 align-middle space-x-3 "
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
            ><span>Name</span>
            <Input className="mt-1" name="name" />
              {/* <Field
                className="mt-4"
                as={Input}
                name="name"
                type="text"
                // value={userData.Username}
                // onChange={inputHandler}
              /> */}
            </Label>
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
            > <span>Full Address</span>
            <Input className="mt-1" name="address" />
              {/* <Field
                className="mt-4"
                as={Input}
                name="address"
                type="text"
                // value={userData.Username}
                // onChange={inputHandler}
              /> */}
            </Label>
          </div>
          <div
            className="mb-4 align-middle space-x-3 "
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px", }}
            > <span>Email</span>
            <Input className="mt-1" name="email" />
              {/* <Field
                className="mt-4"
                as={Input}
                name="email"
                type="text"
                // value={userData.Username}
                // onChange={inputHandler}
              /> */}
            </Label>
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
            > <span>Phone Number</span>
            <Input className="mt-1" name="phone" />
              {/* <Field
                className="mt-4"
                as={Input}
                name="phone"
                type="text"
                // value={userData.Username}
                // onChange={inputHandler}
              /> */}
            </Label>
          </div>
          <div
            className="mb-4 align-middle space-x-3 "
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
            ><span>Available Connector Type</span>
            <Input className="mt-1" name="connector_type" />
              {/* <Field
                className="mt-4"
                as={Input}
                name="connector_type"
                type="text"
                // value={userData.Username}
                // onChange={inputHandler}
              /> */}
            </Label>
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
            > <span>Available Charger Type</span>
            <Input className="mt-1" name="charger_type" />
              {/* <Field
                className="mt-4"
                as={Input}
                name="charger_type"
                type="text"
                // value={userData.Username}
                // onChange={inputHandler}
              /> */}
            </Label>
          </div>
          <div
            className="mb-4 align-middle space-x-3 "
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
            ><span>Capacity</span>
            <Input className="mt-1" name="capacity" />
              {/* <Field
                className="mt-4"
                as={Input}
                name="capacity"
                type="text"
                // value={userData.Username}
                // onChange={inputHandler}
              /> */}
            </Label>
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
            ><span>Tariff</span>
            <Input className="mt-1" name="tariff" />
              {/* <Field
                className="mt-4"
                as={Input}
                name="tariff"
                type="text"
                // value={userData.Username}
                // onChange={inputHandler}
              /> */}
            </Label>
          </div>
              
              <div
            className="mb-4 align-right space-x-3 "
            style={{ display: "flex", flexDirection: "row", marginRight: "50px", position: "absolute",bottom: "50px", right: "200px" }}
          >
            <Button
              style={{
                backgroundColor: "#FFFFFF",
                color: "#3B7CFF",
                borderColor: "#3B7CFF",
                borderRadius: "20px",
                marginLeft: "400px",
                marginTop: "15px",
                width: "120px",
                height: "40px",
              }}
              className="mt-4"
              
              // onClick={handleClear}
              // type="button"
              >
              Cancel
            </Button>

            <Button
              style={{
                width: "120px",
                height: "40px",
                backgroundColor: "#3B7CFF",
                color: "white",
                borderColor: "#3B7CFF",
                borderRadius: "20px",
              }}
              className="mt-4"
              block
              type="submit"
              value="submit"
              
            >
              Save
            </Button>
          </div>
          </Form>
            )}
        </Formik>
        </div>
    );
};

  
  
  
            

export default AddStationForm;
