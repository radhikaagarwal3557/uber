import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
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
        <div className='py-5 px-5 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
      <form onSubmit={(e)=>{
          submitHandler(e)
      }}>
        <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
        <div className='flex gap-4 mb-7'>
          <input 
          required 
          className='bg-[#eeeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base'
          type="text"
          placeholder='First name'
          value={firstName}
          onChange={(e) =>{ 
            setFirstName(e.target.value)
          }}
        />

        <input 
          required 
          className='bg-[#eeeeee] w-full rounded-lg px-4 py-2 border text-lg placeholder:text-base'
          type="text"
          placeholder='Last name'
          value={lastName}
          onChange={(e) =>{ 
            setLastName(e.target.value)
          }}
        />
        </div>

        <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
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
        <p className='text-center'>Already have a Account?<Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainSignup