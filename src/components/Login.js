import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const handleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div >
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
       alt="bg-image"/>
      
       </div>
       <div className="flex items-center justify-center min-h-screen">
  <form className="w-3/12 p-8 absolute bg-black rounded-lg shadow-lg bg-opacity-80">
    <h1 className="text-2xl font-bold text-center text-white mb-4">{isSignInForm?"Sign In": "Sign Up"}</h1>
    {!isSignInForm && (<input type="text" placeholder="Full Name" 
    className="w-full p-2 my-2 rounded border focus:outline-none focus:ring focus:border-blue-400 bg-gray-700" />)}
    <input type="text" placeholder="Email Address" 
    className="w-full p-2 my-2 rounded border focus:outline-none focus:ring focus:border-blue-400 bg-gray-700" />
    <input type="password" placeholder="Password" 
    className="w-full p-2 my-2 rounded border focus:outline-none focus:ring focus:border-blue-400  bg-gray-700" />
    <button 
    className="w-full p-2 my-4 text-white font-semibold rounded-lg hover:bg-blue-700 
    focus:outline-none focus:ring focus:ring-blue-400 bg-red-700">
     {isSignInForm?"Sign In": "Sign Up"}
    </button>
    <p onClick={handleSignInForm}
    className="text-white font-semibold">{isSignInForm?"New to Netflix? Sign Up Now": "Already Registered? SignIn Now"}</p>
  </form>
</div>







   </div>
  )
}

export default Login;
