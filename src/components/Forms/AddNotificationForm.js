import { useEffect, useState, forwardRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Input, Label, Select, Button, HelperText, Textarea } from "@windmill/react-ui";
import { useHistory } from "react-router-dom";
// import ProfileModal from "../Modals/ProfileModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddNotificationForm = () => {
    const [startDate, setStartDate] = useState();
    const [message, setMessage] = useState();
    const handleChange = event => {
        setMessage(event.target.value);
      };
    const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
        <input
          value={value}
          className="example-custom-input"
          onClick={onClick}
          onChange={onChange}
          ref={ref}
        ></input>
      ));
    return (
        <div style={{ marginTop: "50px" }}>
            <h1>Add Notification</h1>
            <Formik 
            initialValues={{
                // title: "",
                // date: "",
                // description: "",
            }}
            validate={(values) => {
                const errors = {};
                if (!values.title) {
                    errors.title = "Required";
                }
                if (!values.date) {
                    errors.date = "Required";
                }
                if (!values.description) {
                    errors.description = "Required";
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) =>{
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }} >

            {({ isSubmitting }) => (
                <Form style={{ marginTop: "50px" }}>
                    <div className="mb-4 align-middle space-x-3" 
                    style={{ display:"flex", flexDirection:"row" }}>

                    </div>

                    <div className="mb-4 align-middle space-x-3" 
                    style={{ display:"flex", flexDirection:"row" }}>

                        <Label className="w-80" 
                        style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}>
                            <span>Title</span>
                            <Input className="mt-1" name="title" onChange={handleChange} value={message} /> 
                            {/* <Field className="mt-4" as={Input} name="title" type="text" onChange={handleChange} value={message} /> */}
                        </Label>
                        <Label className="w-80"
                        style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}>
                            <span>Date</span>
                            <DatePicker
                                as={Input}
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                customInput={<ExampleCustomInput />}
                                todayButton="TODAY"
                            />
                        </Label>
                    </div>
                    <div
                    className="mb-4 align-middle space-x-3 "
                    style={{ display: "flex", flexDirection: "row" }}
                    >
                        <Label
                        className="w-full h-32"
                        style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
                        ><span>Description</span>
                        <Textarea className="mt-1" name="description" />
                        </Label>
                    </div>  
                    <div
                    className="mb-4 align-middle space-x-3 "
                    style={{ display: "flex", flexDirection: "row" }}
                    >
                        <Label
                        className="w-full h-32"
                        style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
                        ><span>Description</span>
                        <Textarea className="mt-1" name="description" />
                        </Label>
                    </div>  
                    <div
                    className="mb-4 align-middle space-x-3 "
                    style={{ display: "flex", flexDirection: "row" }}
                    >
                        <Label
                        className="w-full h-32"
                        style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
                        ><span>Description</span>
                        <Textarea className="mt-1" name="description" />
                        </Label>
                        <Label className="w-80"
                        style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}>
                            <span>Date</span>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                customInput={<ExampleCustomInput />}
                                todayButton="TODAY"
                            />
                        </Label>
                    </div>  
                    <div
                    className="mb-4 align-middle space-x-3 "
                    style={{ display: "flex", flexDirection: "row" }}
                    >
                        <Label
                        className="w-full h-32"
                        style={{ border: "1px", borderRadius: "10px", marginRight: "50px", width: "420px" }}
                        ><span>Description</span>
                        <Textarea className="mt-1" name="description" />
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
            )
}
            </Formik>

        </div>
    )
    };

export default AddNotificationForm;
