import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className='relative w-screen h-screen'>
      <Header />
      <div className='absolute inset-0'>
        <img
          className='w-full h-full object-cover'
          src='/images/background.png'  // Ensure the path is correct
          alt='background'
        />
      </div>
      <form className='absolute inset-0 flex items-center justify-center p-12 bg-black bg-opacity-50 text-white'>
        <div className='bg-opacity-70 p-10 w-4/12 rounded-lg shadow-lg bg-gradient-to-b from-green-400 via-blue-500 to-blue-600 via-black/70 to-transparent'>
          <h1 className='font-bold text-3xl mb-4'>
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </h1>
          {
            !isSignInForm && (
              <input
                type='text'
                placeholder='Full Name'
                className='block w-full mb-6 p-2 border border-gray-800 bg-gray-600 rounded'
              />
            )
          }
          <input
            type='text'
            placeholder='Email Address'
            className='block w-full mb-6 p-2 border border-gray-800 bg-gray-600 rounded'
          />

          {
            !isSignInForm && (
              <input
                type='text'
                placeholder='Phone No.'
                className='block w-full mb-6 p-2 border border-gray-800 bg-gray-600 rounded'
              />
            )
          }

          <input
            type='password'
            placeholder='Password'
            className='block w-full mb-12 p-2 border border-gray-800 bg-gray-600 rounded'
          />

          {
            !isSignInForm ? (
              <button
                type='submit'
                className='w-full py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600'
              >Sign Up</button>
            ) : (
              <button
                type='submit'
                className='w-full py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600'
              >
                Sign In
              </button>
            )
          }

          <p className='text-center text-white mt-8 cursor-pointer'>
            {isSignInForm
              ? <>
                New to Netflix? <a href='#' className='text-green-300 hover:text-green-500' onClick={toggleSignInForm}>SIGN UP.</a>
              </>
              : <>
                Already a member? <a href='#' className='text-green-300 hover:text-green-500' onClick={toggleSignInForm}>SIGN IN.</a>
              </>
            }
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login


// 1:20:00