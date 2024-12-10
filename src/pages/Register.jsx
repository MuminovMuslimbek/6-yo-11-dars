import React, { useState } from 'react'
import { backend } from '../axios'
import { useNavigate, Link } from 'react-router-dom'
import show from '../assets/show.svg'
import hide from '../assets/hide.svg'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [isShow, setIsShow] = useState(true)
    const navigate = useNavigate()

    function validate() {
        if (!username) {
            alert('Iltimos username ni kiriting!!')
            return false
        }
        if (!email) {
            alert('Iltimos email ni kiriting!!')
            return false
        }
        if (!password) {
            alert('Iltimos password ni kiriting!!')
            return false
        }
        if (!rePassword) {
            alert('Iltimos rePassword ni kiriting!!')
            return false
        }
        if (password !== rePassword) {
            alert('Iltimos confirm, password bilan birhil emas!!')
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
            email,
            password,
        }
        setLoading(true)

        backend.post('auth/signup', user, {
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((response) => {
                if (response.status == 200) {
                    navigate('/login')
                }
            })
            .catch((err) => {
                if (err.status == 400) {
                    console.log(err);
                    alert(err.message)
                }
            })
            .finally(() => { setLoading(false) })
    }

    return (
        <form onSubmit={handleSubmit} className='max-w-[400px] w-full h-lvh mx-auto flex flex-col justify-center items-center gap-5'>
            <h1 className='text-[30px]'>Register</h1>
            <input className="input input-bordered input-success w-full" type="text" value={username} minLength={5} onChange={(e) => { setUsername(e.target.value) }} placeholder='Enter your username..' />
            <input className="input input-bordered input-success w-full" type="email" value={email} minLength={7} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter your email..' />
            <div className="input input-bordered input-success w-full flex justify-between items-center"><input className='w-full' minLength={5} maxLength={15} type={isShow ? 'password' : 'text'} value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter your password..' /> <img onClick={() => { setIsShow(!isShow) }} className='cursor-pointer' src={isShow ? show : hide} /></div>
            <input className="input input-bordered input-success w-full" type={isShow ? 'password' : 'text'} value={rePassword} minLength={5} maxLength={15} onChange={(e) => { setRePassword(e.target.value) }} placeholder='Confirm password..' />
            <button type='submit' className='btn btn-outline btn-success w-full uppercase' disabled={loading} >{loading ? 'Loading..' : 'Register'}</button>
            <div className='flex gap-[15px] justify-center items-center w-full mt-[-10px]'>
                <p className='text-[15px]'>Already a member?</p>
                <Link to={'/login'} className='text-blue-500 hover:underline'>Login</Link>
            </div>
        </form>
    )
}

export default Register
