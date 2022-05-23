import React, { useState } from "react";
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const url=""
  const [data , setData] =useState ({
    firstName: '',
    telephone: '',
    lastName: '',
    adresse: '',
    code: '',
    email: '',

  })
  const [field, meta] = useField(props);
  function handle (e) {
    const newdata={...data}
    newdata[e.target.id] =e.target.value
    setData(newdata)
    console.log(newdata)

  }  
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input onChange={(e) => handle(e)}
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}
