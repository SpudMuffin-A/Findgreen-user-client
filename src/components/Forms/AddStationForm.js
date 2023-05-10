// import { useEffect, useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import axios from "axios";
// import { Input, Label, Select, Button, HelperText, Checkbox } from "@windmill/react-ui";
// import { useHistory } from "react-router-dom";
// // import ProfileModal from "../Modals/ProfileModal";

// const AddStationForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     email: "",
//     phoneNumber: "",
//     latitude: "",
//     longitude: "",
//     connectorType: "",
//     chargerType: "",
//     capacity: "",
//     tariff: "",
//     amenities: "",
//   });

//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       const response = await axios.post("http://172.174.202.43/find_green_admin_portal/v1/station/add-station", {
//         station_name: values.name,
//         station_address: values.address,
//         station_email: values.email,
//         station_phone: values.phoneNumber,
//         station_latitude: values.latitude,
//         station_longitude: values.longitude,
//         station_available_connector: values.connectorType,
//         station_connector_type: values.connectorType,
//         station_charger_type: values.chargerType,
//         station_capacity: values.capacity,
//         station_tariff: values.tariff,
//         station_amenities: values.amenities,
//       });
  
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//     return (
//       <div style={{ marginTop: "50px" }}>
//         <h1>Add Charging Station</h1>
//         <Formik
//           initialValues={{
//             name: "",
//             address: "",
//             email: "",
//             phoneNumber: "",
//             latitude: "",
//             longitude: "",
//             connectorType: "",
//             chargerType: "",
//             capacity: "",
//             tariff: "",
//             amenities: "",
//           }}
//           validate={(values) => {
//             const errors = {};
//             if (!values.name) {
//               errors.name = "Required";
//             }
//             if (!values.address) {
//               errors.address = "Required";
//             }
//             // Add additional validation rules here
//             return errors;
//           }}
//           onSubmit={(values, { setSubmitting }) => {
//             const data = {
//               "station_name": values.name,
//               "station_address": values.address,
//               "station_email": values.email,
//               "station_phone": values.phoneNumber,
//               "station_latitude": values.latitude,
//               "station_longitude": values.longitude,
//               "station_available_connector": values.connectorType,
//               "station_connector_type": values.connectorType,
//               "station_charger_type": values.chargerType,
//               "station_capacity": values.capacity,
//               "station_tariff": values.tariff,
//               "station_amenities": values.amenities.join(", ")
//             };
//             axios.post("http://172.174.202.43/find_green_admin_portal/v1/station/add-station", data)
//               .then((response) => {
//                 alert("Station added successfully");
//                 setSubmitting(false);
//               })
//               .catch((error) => {
//                 alert("Error occurred while adding station");
//                 setSubmitting(false);
//               });
//           }}
//         >
//           {/* onSubmit={handleSubmit} */}
//           {({ isSubmitting }) => (
//             <Form style={{ marginTop: "50px" }} >
//                 <div
//             className="mb-4 align-middle space-x-3 "
//             style={{ display: "flex", flexDirection: "row" }}
//               >
//             <Label
//               className="w-80"
//               style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
//             ><span>Name</span>
//             <Input className="mt-1" name="name" 
//             value={formData.name}
//           onChange={handleChange}/>
//               {/* <Field
//                 className="mt-4"
//                 as={Input}
//                 name="name"
//                 type="text"
//                 // value={userData.Username}
//                 // onChange={inputHandler}
//               /> */}
//             </Label>
//             <Label
//               className="w-80"
//               style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
//             > <span>Full Address</span>
//             <Input className="mt-1" name="address" value={formData.address}
//           onChange={handleChange}/>
//               {/* <Field
//                 className="mt-4"
//                 as={Input}
//                 name="address"
//                 type="text"
//                 // value={userData.Username}
//                 // onChange={inputHandler}
//               /> */}
//             </Label>
//           </div>
//           <div
//             className="mb-4 align-middle space-x-3 "
//             style={{ display: "flex", flexDirection: "row" }}
//           >
//             <Label
//               className="w-80"
//               style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px", }}
//             > <span>Email</span>
//             <Input className="mt-1" name="email" type="email" value={formData.email}
//           onChange={handleChange}/>
//               {/* <Field
//                 className="mt-4"
//                 as={Input}
//                 name="email"
//                 type="text"
//                 // value={userData.Username}
//                 // onChange={inputHandler}
//               /> */}
//             </Label>
//             <Label
//               className="w-80"
//               style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
//             > <span>Phone Number</span>
//             {/* <Input className="mt-1" name="phone" value={formData.phoneNumber}
//           onChange={handleChange}/> */}
//               <Field
//                 className="mt-4"
//                 as={Input}
//                 name="phone"
//                 type="text"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//               />
//             </Label>
//           </div>
//           <div
//             className="mb-4 align-middle space-x-3 "
//             style={{ display: "flex", flexDirection: "row" }}
//           >
//             <Label
//               className="w-80"
//               style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px", }}
//             > <span>Latitude</span>
//             <Input className="mt-1" name="latitude" value={formData.latitude}
//           onChange={handleChange}/>
//               {/* <Field
//                 className="mt-4"
//                 as={Input}
//                 name="email"
//                 type="text"
//                 // value={userData.Username}
//                 // onChange={inputHandler}
//               /> */}
//             </Label>
//             <Label
//               className="w-80"
//               style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
//             > <span>Longitude</span>
//             <Input className="mt-1" name="longitude" value={formData.longitude}
//           onChange={handleChange}/>
//               {/* <Field
//                 className="mt-4"
//                 as={Input}
//                 name="phone"
//                 type="text"
//                 // value={userData.Username}
//                 // onChange={inputHandler}
//               /> */}
//             </Label>
//           </div>
//           <div
//             className="mb-4 align-middle space-x-3 "
//             style={{ display: "flex", flexDirection: "row" }}
//           >
//             <Label
//               className="w-80"
//               style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
//             ><span>Available Connector Type</span>
//             <Select className="mt-1" name="connector_type" value={formData.connectorType}
//           onChange={handleChange}>
//             <option value=""></option>
//             <option value="type1">AC Type 1</option>
//             <option value="type2">AC Type 2</option>
//             <option value="ccs">CCS 1</option>
//           </Select>
//             </Label>
//             <Label
//               className="w-80"
//               style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
//             > <span>Available Charger Type</span>
//             <Select className="mt-1" name="charger_type" value={formData.chargerType}
//           onChange={handleChange}>
//             <option value=""></option>
//             <option value="all">All</option>
//             <option value="ac">AC</option>
//             <option value="dc">DC</option>
//           </Select>
//             </Label>
//           </div>
          
//           <div
//             className="mb-4 align-middle space-x-3 "
//             style={{ display: "flex", flexDirection: "row" }}
//           >
//             <Label
//               className="w-80"
//               style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
//             ><span>Capacity</span>
//             <Input className="mt-1" name="capacity" value={formData.capacity}
//           onChange={handleChange}/>
//             </Label>
//             <Label
//               className="w-80"
//               style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
//             ><span>Tariff</span>
//             <Input className="mt-1" name="tariff" value={formData.tariff}
//           onChange={handleChange}/>
//             </Label>
//           </div><br></br>
          
//                   <div className="font-medium mb-1">Amenities</div>
//               <div>
//                 <div class="mb-2">
//                   <Label check>
//                     <Input type="checkbox" name='1' value={formData.amenities}
//           onChange={handleChange}/>
//                     <span className="ml-2">Parking</span> 
//                   </Label>
//                 </div>
//                 <div class="mb-2">
//                   <Label check>
//                     <Input type="checkbox" name='2'/>
//                     <span className="ml-2">Restroom</span>
//                   </Label>
//                 </div>
//                 <div class="mb-2">
//                   <Label check>
//                     <Input type="checkbox" name='3'/>
//                     <span className="ml-2">Hotel</span>
//                   </Label>
//                 </div>
//                 <div class="mb-2">
//                   <Label check>
//                     <Input type="checkbox" name='4'/>
//                     <span className="ml-2">Hospital</span>
//                   </Label>
//                 </div>
//               </div>
//               <div
//             className="mb-4 align-right space-x-3 "
//             style={{ display: "flex", flexDirection: "row", marginRight: "50px", position: "absolute",bottom: "50px", right: "200px" }}
//           >
//             <Button
//               style={{
//                 backgroundColor: "#FFFFFF",
//                 color: "#3B7CFF",
//                 borderColor: "#3B7CFF",
//                 borderRadius: "20px",
//                 marginLeft: "400px",
//                 marginTop: "15px",
//                 width: "120px",
//                 height: "40px",
//               }}
//               className="mt-4"
              
//               // onClick={handleClear}
//               // type="button"
//               >
//               Cancel
//             </Button>

//             <Button
//               style={{
//                 width: "120px",
//                 height: "40px",
//                 backgroundColor: "#3B7CFF",
//                 color: "white",
//                 borderColor: "#3B7CFF",
//                 borderRadius: "20px",
//               }}
//               className="mt-4"
//               block
//               type="submit"
//               value="submit"
//             >
//               Add
//             </Button>
//           </div>
//           </Form>
//             )}
//         </Formik>
//         </div>
//     );
// };

// export default AddStationForm;


import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Input, Label, Select, Button, HelperText, Checkbox } from "@windmill/react-ui";
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
            latitude: "",
            longitude: "",
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
            </Label>
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
            ><span>Full Address</span>
            <Input className="mt-1" name="address" />
            </Label>
          </div>
          <div
            className="mb-4 align-middle space-x-3 "
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
            ><span>Email</span>
            <Input className="mt-1" name="email" type="email"/>
            </Label>
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
            ><span>Phone Number</span>
            <Input className="mt-1" name="phoneNumber" />
            </Label>
          </div>
          <div
            className="mb-4 align-middle space-x-3 "
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
            ><span>Latitude</span>
            <Input className="mt-1" name="latitude" />
            </Label>
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
            ><span>Longitude</span>
            <Input className="mt-1" name="longitude" />
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
            <Select className="mt-1" name="connector_type">
            <option value=""></option>
            <option value="type1">AC Type 1</option>
            <option value="type2">AC Type 2</option>
            <option value="ccs">CCS 1</option>
          </Select>
            </Label>
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
            > <span>Available Charger Type</span>
            <Select className="mt-1" name="charger_type">
            <option value=""></option>
            <option value="all">All</option>
            <option value="ac">AC</option>
            <option value="dc">DC</option>
          </Select>
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
            </Label>
            <Label
              className="w-80"
              style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
            ><span>Tariff</span>
            <Input className="mt-1" name="tariff" />
            </Label>
          </div><br></br>
          
                  <div className="font-medium mb-1">Amenities</div>
              <div>
                <div class="mb-2">
                  <Label check>
                    <Input type="checkbox" name='1'/>
                    <span className="ml-2">Parking</span> 
                  </Label>
                </div>
                <div class="mb-2">
                  <Label check>
                    <Input type="checkbox" name='2'/>
                    <span className="ml-2">Restroom</span>
                  </Label>
                </div>
                <div class="mb-2">
                  <Label check>
                    <Input type="checkbox" name='3'/>
                    <span className="ml-2">Hotel</span>
                  </Label>
                </div>
                <div class="mb-2">
                  <Label check>
                    <Input type="checkbox" name='4'/>
                    <span className="ml-2">Hospital</span>
                  </Label>
                </div>
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
              Add
            </Button>
          </div>
          </Form>
            )}
        </Formik>
        </div>
    );
};

export default AddStationForm;