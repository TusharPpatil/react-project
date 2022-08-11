import React, {  } from "react";
import {useFormik} from 'formik'
 import"./login.css";
 import * as yup from 'yup'
// import { paste } from "@testing-library/user-event/dist/paste";
const Login =()=>{
    const formik =useFormik({
        initialValues:{
        email:"",
        password:""
        },
        onSubmit:(values)=>{
            console.log("form submitted",values)
        },
        validationSchema:yup.object({
            email:yup.string()
            .email("please provied vaild email")
            .required(" this is required field"),
            password:yup.number()
  .min(8,"Password is to short- should be 8 chars minimum")
  .required(" this is required field"),
        })
    })
    console.log(formik.touched)
     
    return(
<div className="login">
    <form className="login_form" onSubmit={formik.handleSubmit}>
        <h1> Login here </h1>
        <input type="email" placeholder="Email"
        name="email"
         value={formik.values.email} 
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}/>
         {formik.touched.email && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}

        <input type="password" placeholder="password"
        name="password"
         value={formik.values.password} 
         onChange={formik.handleChange}/>
         {formik.touched.password && formik.errors.password && <p style={{color:"red"}}>{formik.errors.password}</p>}


        <button type="submit" className="submit_btn">Submit</button>
    </form>

</div>


    )
}
 export default Login;