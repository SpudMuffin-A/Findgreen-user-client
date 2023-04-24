import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios';
import { config } from '../../assets/config/config'

import { Label, Input, HelperText, Button } from '@windmill/react-ui'

const apiUrl = config.api.url

function LoginForm() {
  const { login } = useContext(AuthContext)
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().required('Password is required'),
      })}
      onSubmit={({ email,  password }, { setStatus, setSubmitting }) => {
        setSubmitting(true)
        setStatus()
        login(email, password)
        .then(() => {
          history.push({ pathname: "/app/dashboard" });
        })
        .catch(error => {
          if(error.response) {
            setStatus(error.response.data.message)
          } else {
            setStatus('Some error occured. Please try again.')
          }
          setSubmitting(false)
        })
      }}
    >  
      {({ errors, status, touched, isSubmitting }) => (
        <Form>
          <Label>
            <span>Email ID</span>
            <Field className="mt-1" as={Input} name="email" type="email" placeholder="    Enter your Email ID" />
            {errors.email && touched.email ? (
              <div>   
                <HelperText valid={false}>{errors.email}</HelperText>
              </div>
            ) : null}
            
          </Label>

          <Label className="mt-4">
            <span>Password</span>
            <Field className="mt-1" as={Input} name="password" type="password" placeholder="    Enter your Password" />
            <span style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a className="text-sm #404040" href="/auth/forgot-password">Forgot Password?</a>
            </span>
            {errors.password && touched.password ? (
              <div>   
                <HelperText valid={false}>{errors.password}</HelperText>
              </div>
            ) : null}
          </Label>

          <Button style={{
              backgroundColor: "#404040",
              color: "white",
              borderColor: "black",
            }}
            className="mt-4" block type="submit" value="submit" disabled={isSubmitting} >
            Log in
          </Button>
          {status && (
            <HelperText valid={false}>{status}</HelperText>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm