import React, { useContext } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../context/AuthContext'
import { Input, Label, HelperText, Button } from '@windmill/react-ui'

function CreateAccountForm() {
  const { register } = useContext(AuthContext)
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        customCheckLogin: false
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().min(8)
          .matches('^.*[0-9].*$', 'Atleast one number required')
          .matches('^.*[a-zA-Z].*$', 'Atleast one letter required')
          .required('Password is required'),
        customCheckLogin: Yup.boolean().oneOf([true], 'Must agree Privacy Policy'),
      })}
      onSubmit={({ username, email,  password }, { setStatus, setSubmitting }) => {
        setSubmitting(true)
        setStatus()
        register(username, email, password)
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
            <span>Name</span>
            <Field className="mt-1" as={Input} name="username" type="text" placeholder="John Doe" />
            {errors.username && touched.username ? (
              <div>   
                <HelperText valid={false}>{errors.username}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label className="mt-4">
            <span>Email</span>
            <Field className="mt-1" as={Input} name="email" type="email" placeholder="john@doe.com" />
            {errors.email && touched.email ? (
              <div>   
                <HelperText valid={false}>{errors.email}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label className="mt-4">
            <span>Password</span>
            <Field className="mt-1" as={Input} name="password" type="password" placeholder="***************" />
            {errors.password && touched.password ? (
              <div>   
                <HelperText valid={false}>{errors.password}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label className="mt-6 flex flex-col" check>
            <div className="flex flex-none items-center">
              <Field as={Input} name="customCheckLogin" type="checkbox" />
              <div className="ml-2">
                I agree to the <span className="underline">privacy policy</span>
              </div>
            </div>
            {errors.customCheckLogin && touched.customCheckLogin ? (
              <div className="flex flex-none items-center w-full">
                <HelperText valid={false}>{errors.customCheckLogin}</HelperText>
              </div>
            ) : null}
          </Label>

          <Button className="mt-4" block type="submit" value="submit" disabled={isSubmitting}>
            Create Account
          </Button>
          {status && (
            <HelperText valid={false}>{status}</HelperText>
          )}
          
        </Form>
      )}
    </Formik>
  )
}

export default CreateAccountForm