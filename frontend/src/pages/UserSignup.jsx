import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setuserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setuserData({
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password
    })

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('');
  }
  return (
    <div>
        <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
      <form onSubmit={(e)=>{
          submitHandler(e)
      }}>
        <h3 className='text-lg font-medium mb-2'>What's your name</h3>
        <div className='flex gap-4 mb-7'>
          <input 
          required 
          className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
          type="text"
          placeholder='First name'
          value={firstName}
          onChange={(e) =>{ 
            setFirstName(e.target.value)
          }}
        />

        <input 
          required 
          className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
          type="text"
          placeholder='Last name'
          value={lastName}
          onChange={(e) =>{ 
            setLastName(e.target.value)
          }}
        />
        </div>

        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input 
          required 
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
          type="email"
          placeholder='email@example.com'
          value={email}
        />

        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input 
          required 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          type="password" 
          placeholder='password' 
        />
        <button 
          className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
        >Login</button>

      </form>
        <p className='text-center'>Already have a Account?<Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
    </div>  
  )
}

export default UserSignup