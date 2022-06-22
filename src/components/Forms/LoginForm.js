import React, { useContext } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { AuthContext } from '../../context/AuthContext'

import { Label, Input, HelperText, Button } from '@windmill/react-ui'

function LoginForm() {
  const { login } = useContext(AuthContext)
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
            <Field className="mt-1" as={Input} name="email" type="email" placeholder="rocket@admin.com" />
            {errors.email && touched.email ? (
              <div>   
                <HelperText valid={false}>{errors.email}</HelperText>
              </div>
            ) : null}
            
          </Label>

          <Label className="mt-4">
            <span>Password</span>
            <Field className="mt-1" as={Input} name="password" type="password" placeholder="admin123" />
            {errors.password && touched.password ? (
              <div>   
                <HelperText valid={false}>{errors.password}</HelperText>
              </div>
            ) : null}
          </Label>

          <Button className="mt-4" block type="submit" value="submit" disabled={isSubmitting}>
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