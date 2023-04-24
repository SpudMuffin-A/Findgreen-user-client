import React, { useState, useContext } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { AuthContext } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom';

import { Label, Input, HelperText, Button } from '@windmill/react-ui'

function ForgotPasswordForm() {
  const { forgotPassword } = useContext(AuthContext)
  const [saved, setSaved] = useState(false)
  const history = useHistory();

  if(saved) {
    return (
      <p className="text-sm font-medium text-gray-600">
        We've emailed you instructions on how to reset your password. If you don't see it, don't forget to check your spam folder.
      </p>
    )
  }

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
      })}
      onSubmit={({ email }, { setStatus, setSubmitting }) => {
        setSubmitting(true)
        setStatus()
        forgotPassword(email)
        .then((res) => {
          // if (res.status === 200) {
            history.push({ pathname: "/auth/otp" });
            sessionStorage.setItem("userId", res.data.data.userId);
            sessionStorage.setItem("email", res.data.data.email);
            console.log(res.data.data.userId);
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
            <span>Email</span>
            <Field className="mt-1" as={Input} name="email" type="email" placeholder="  Enter your Email ID" />
            {errors.email && touched.email ? (
              <div>   
                <HelperText valid={false}>{errors.email}</HelperText>
              </div>
            ) : null}
            
          </Label>

          <Button style={{
              backgroundColor: "#404040",
              color: "white",
              borderColor: "black",
            }}className="mt-4" block type="submit" value="submit" disabled={isSubmitting}>
            Proceed
          </Button>
          <Button style={{
              backgroundColor: "white",
              color: "#404040",
              borderColor: "#404040",
            }}className="mt-4" block type="button" onClick={() => history.push('/auth/login')}>
            Back to Sign In
          </Button>

          {status && (
            <HelperText valid={false}>{status}</HelperText>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default ForgotPasswordForm