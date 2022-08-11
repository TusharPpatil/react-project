import React, {} from "react";
import {useFormik} from 'formik'
import "./Register.css"
import * as yup from 'yup'
const Register =()=>{
  const formik =useFormik({
    initialValues:{
      FirstName:"",
      LastName:"",
    email:"",
    password:"",
    conformPassword:""
  },
  onSubmit:(values)=>{
    console.log("form submitted",values)
},
validationSchema:yup.object({
  FirstName:yup.string()
  .max(10,"please provied vaild First Name")
  .required(" this is required field"),

  LastName:yup.string()
  .max(10,"please provied vaild Last Name")
  .required(" this is required field"),

  email:yup.string()
  .email("please provied vaild email")
  .required(" this is required field"),

  password:yup.number()
  .min(8,"Password is to short- should be 8 chars minimum")
  .required(" this is required field"),
  conformPassword:yup.number()
  .min(8,"conformPassword is excatly same as password")
  .required(" this is required field"),
})
    })
    console.log(formik.touched)
  

    return(
<div className="register">
<form className="register_form" onSubmit={formik.handleSubmit}>
        <h1> Register  here </h1>
        
        <input type="text"
          placeholder=" First Name"
          name="FirstName"
        value={formik.values.FirstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
        {formik.touched.FirstName && formik.errors.FirstName && <p style={{color:"red"}}>{formik.errors.FirstName}</p>}


        <input type="text" 
         placeholder=" Last Name"
         name="LastName"
         value={formik.values.LastName} 
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}/>
         {formik.touched.LastName && formik.errors.LastName && <p style={{color:"red"}}>{formik.errors.LastName}</p>}

        <input type="email"
          placeholder=" Email Id" 
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}/>
          {formik.touched.email && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}

        <input type="password" 
         placeholder=" Password"
         name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
 {formik.touched.password && formik.errors.password && <p style={{color:"red"}}>{formik.errors.password}</p>}

        <input type="password"  
        placeholder="Conform Password"
        name="conformPassword"
        value={formik.values.conformPassword} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
{formik.touched.conformPassword && formik.errors.conformPassword && <p style={{color:"red"}}>{formik.errors.conformPassword}</p>}
        <button type="submit" className="submit_btn">Submit</button>
     </form>

</div>
    )
};
 export default Register;