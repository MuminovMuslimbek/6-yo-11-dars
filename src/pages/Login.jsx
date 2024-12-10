import React, { useState } from 'react'
import { backend } from '../axios'
import { useNavigate, Link } from 'react-router-dom'
import show from '../assets/show.svg'
import hide from '../assets/hide.svg'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [isShow, setIsShow] = useState(true)
  const navigate = useNavigate()

  function validate() {
    if (!username) {
      alert('Iltimos username ni kiriting!!')
      return false
    }
    if (!password) {
      alert('Iltimos password ni kiriting!!')
      return false
    }
    return true
  }

  function handleSubmit(event) {
    event.preventDefault()
    let isValid = validate()
    if (!isValid) {
      return
    }

    const user = {
      username,
      password,
    }

    setLoading(true)

    backend.post('auth/signin', user, {
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then((response) => {
        if (response.status == 200) {
          localStorage.setItem('user', JSON.stringify(response.data))
          localStorage.setItem('token', response.data.accessToken)
          navigate('/', { state: { token: response.data.accessToken } })
        }
      })
      .catch((err) => {
        if (err.status == 400 || err.status == 404) {
          alert('Siz registerdan otmagansiz!!')
          navigate('/register')
        }
      })
      .finally(() => { setLoading(false) })
  }

  return (
    <form onSubmit={handleSubmit} className='max-w-[400px] w-full h-lvh mx-auto flex flex-col justify-center items-center gap-5'>
      <h1 className='text-[30px]'>Login</h1>
      <input className="input input-bordered input-success w-full" type="text" value={username} minLength={5} onChange={(e) => { setUsername(e.target.value) }} placeholder='Enter your username..' />
      <div className="input input-bordered input-success w-full flex justify-between items-center"><input className='w-full' minLength={5} maxLength={15} type={isShow ? 'password' : 'text'} value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter your password..' /> <img onClick={() => { setIsShow(!isShow) }} className='cursor-pointer' src={isShow ? show : hide} /></div>
      <button type='submit' className='btn btn-outline btn-success w-full uppercase' disabled={loading} >{loading ? 'Loading..' : 'Login'}</button>
      <div className='flex gap-[15px] justify-center items-center w-full mt-[-10px]'>
        <p className='text-[15px]'>Not a member yet?</p>
        <Link to={'/register'} className='text-blue-500 hover:underline'>Register</Link>
      </div>
    </form>
  )
}

export default Login
