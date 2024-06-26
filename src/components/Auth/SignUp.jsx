import { NavLink } from "react-router-dom"

import DarkModeToggle from "../DarkMode/DarkModeToggle"

const SignUp = () => {
  return (
 <div className="sign-up-pg | dark:text-neutral-200 text-neutral-900">
    <div className="sign-up-form-wrapper | flex flex-col bg-neutral-100 dark:bg-neutral-700">
      <div className="logo-dark-mode-toggle-wrapper-sign-up | logo-dark-mode-toggle-wrapper flex ">
        <p className="sign-up-logo | logo font-tilt-prism font-bold uppercase tracking-widest text-500  text-neutral-800 dark:text-neutral-100 ">ars</p>
        <DarkModeToggle/>
      </div>
      <form className="sign-up-form | flex flex-col flow">
        <p className="sign-up-form-heading | font-poppins text-700 font-semi-bold text-center capitalize">create account</p>
        {/* First Name */}
        <div className="sign-up-form-element-wrapper | flex flex-col">
          <label htmlFor="firstName" className="capitalize font-semi-bold text-500">first name</label>
          <input className="sign-up-form-input" type="text" id="firstName" name="firstName" placeholder="John" required/>
        </div>
        {/* Last Name */}
        <div className="sign-up-form-element-wrapper | flex flex-col">
          <label htmlFor="lastName" className="capitalize font-semi-bold text-500">last name</label>
          <input className="sign-up-form-input" type="lastName" id="lastName" name="lastName" placeholder="Doe" required/>
        </div>
        {/* Department */}
        <div className="sign-up-form-element-wrapper | flex flex-col">
          <label htmlFor="department" className="capitalize font-semi-bold text-500">department</label>
          <input className="sign-up-form-input" type="text" id="department" name="department" placeholder="Human resource" required/>
        </div>
        {/* Email */}
        <div className="sign-up-form-element-wrapper | flex flex-col">
          <label htmlFor="email " className="capitalize font-semi-bold text-500">email</label>
          <input className="sign-up-form-input" type="email" id="email" name="email" placeholder="johndoe@mail.com" required/>
        </div>
        {/*Phone Number*/}
        <div className="sign-up-form-element-wrapper | flex flex-col">
          <label htmlFor="phoneNumber" className="capitalize font-semi-bold text-500">phone number</label>
          <input className="sign-up-form-input" type="number" id="phoneNumber" name="phoneNumber" placeholder="+254701010101" required/>
        </div>
        {/* Password */}
        <div className="sign-up-form-element-wrapper | flex flex-col">
          <label htmlFor="password " className="capitalize font-semi-bold text-500">password</label>
          <input className="sign-up-form-input" type="password" id="password" name="password" required/>
        </div>
        <button className="sign-up-form-submit-btn | btn primary-btn uppercase text-300 font-bold">sign-up</button>
      </form>
      <div className="sign-up-to-login-redirect-link-wrapper  | italic flex text-300">
        <p className="sign-up-to-login-redirect-link-p |   text-gray-500">Already have an account ? </p>
        <NavLink to="/login" className="sign-up-to-login-redirect-link | link  font-semi-bold">Login</NavLink>
      </div>
    </div>
      </div>
  )
}

export default SignUp