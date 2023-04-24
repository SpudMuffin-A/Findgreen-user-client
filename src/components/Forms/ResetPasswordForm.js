import React, { useContext } from 'react'
import { useLocation } from "react-router-dom"

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { AuthContext } from '../../context/AuthContext'

import { Label, Input, HelperText, Button } from '@windmill/react-ui'
import { useHistory } from "react-router-dom";

// const email = sessionStorage.getItem('email');
const email = 'aman@email.com'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ResetPasswordForm() {
  const { resetPassword } = useContext(AuthContext)
  const [saved, setSaved] = React.useState(false)
  const query = useQuery()
  const history = useHistory();

  if(saved) {
    return (
      <p className="text-sm font-medium text-gray-600">
        Your password has been reset. Please login using your new password.
      </p>
    )
  }

  return (
    <Formik
      initialValues={{
        email: email,
        currentPassword: '',
        newPassword: '',
      }}
      validationSchema={Yup.object().shape({
        currentPassword: Yup.string().required('Password is required'),
        newPassword: Yup.string().required('Password is required'),
      })}
      onSubmit={({email, currentPassword, newPassword }, { setStatus, setSubmitting }) => {
        setSubmitting(true)
        setStatus()
        resetPassword(email, currentPassword, newPassword)
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
            <span>Current Password</span>
            <Field className="mt-1" as={Input} name="currentPassword" type="password" placeholder="***************" />
            {errors.password && touched.password ? (
              <div>   
                <HelperText valid={false}>{errors.password}</HelperText>
              </div>
            ) : null}
            
          </Label>
          <Label>
            <br></br>
            <span>New Password</span>
            <Field className="mt-1" as={Input} name="newPassword" type="password" placeholder="***************" />
            <span style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a className="text-sm #404040" href="/auth/forgot-password">Forgot Password?</a>
            </span>
            {errors.password && touched.password ? (
              <div>   
                <HelperText valid={false}>{errors.password}</HelperText>
              </div>
            ) : null}
            
          </Label>

          <Button 
          style={{
            backgroundColor: "#404040",
            color: "white",
            borderColor: "black",
          }}
          className="mt-4" block type="submit" value="submit" disabled={isSubmitting}>
            Log In
          </Button>
          {status && (
            <HelperText valid={false}>{status}</HelperText>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default ResetPasswordForm