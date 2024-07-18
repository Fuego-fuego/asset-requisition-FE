import { NavLink } from "react-router-dom"

import DarkModeToggle from "../DarkMode/DarkModeToggle"
import { useReducer } from "react"

const loginReducer = (state,action) => {
  switch(action.type){
    case 'email':
      return {...state,email:action.payload}
    case 'password':
      return {...state, password:action.payload}
    default:
        throw new Error("undefined action type")
  }
}


const Login = () => {
const [state,dispatch] = useReducer(loginReducer,{
                                              email:"",
                                              password:""
})
    const handleSubmit = (e) =>{
    e.preventDefault()
  }
  console.log(state)
  return (
    <div className="login-pg | grid  dark:text-neutral-200 text-neutral-900
    bg-[url('https://github.com/Fuego-fuego/asset-requisition-FE/blob/main/public/assets-requisition-system-high-resolution-logo.png?raw=true')]
    dark:bg-[url('https://github.com/Fuego-fuego/asset-requisition-FE/blob/main/public/assets-requisition-system-high-resolution-logo-white.png?raw=true')]
    
    ">
    <div className="login-form-wrapper | flex flex-col bg-neutral-100 dark:bg-neutral-700">
      <div className="logo-dark-mode-toggle-wrapper | flex ">
        <p className="login-logo | logo font-tilt-prism font-bold uppercase tracking-widest text-550  text-neutral-800 dark:text-neutral-100 ">ars</p>
        <DarkModeToggle/>
      </div>
      <p className="login-heading | font-poppins text-600 font-semi-bold text-center uppercase">log in</p>
      <form onSubmit={handleSubmit} className="login-form | flex flex-col">
        {/* Email */}
        <div className="login-form-element-wrapper | flex flex-col">
          <label htmlFor="email " className="capitalize font-semi-bold text-500">email</label>
          <input onChange= { (e) => {dispatch({type:"email",payload:e.target.value})}}className="login-form-input" type="email" id="email" name="email" placeholder="johndoe@mail.com" value={state.email}required/>
        </div>
        {/* Password */}
        <div className="login-form-element-wrapper | flex flex-col">
          <label htmlFor="password " className="capitalize font-semi-bold text-500">password</label>
          <input onChange = {(e)=>{dispatch({type:'password',payload:e.target.value})}}className="login-form-input" type="password" id="password" name="password" value={state.password}required/>
        </div>
        <button className="login-form-submit-btn | btn primary-btn uppercase text-300 font-bold">login</button>
      </form>
      <div className="login-to-sign-up-redirect-link-wrapper  | italic flex text-300">
        <p className="login-to-sign-up-redirect-link-p |   text-gray-500">Don&apos;t have an account ? </p>
        <NavLink to="/sign-up" className="login-to-sign-up-redirect-link-p | link  font-semi-bold">Sign up</NavLink>
      </div>
    </div>
      </div>
  )
}

export default Login