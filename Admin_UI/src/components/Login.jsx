import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import backgroundImg from '../assets/Ancient.jpg'
const Login = () => {
  const nav = useNavigate()
    const [number,setNumber] = useState(null)
    const login=async ()=>{        
        const res= await fetch('http://localhost:3000/login',{method:"POST",headers:{
            'Content-type':'application/json'
        },body:JSON.stringify({number})})
        const result = await res.json()
        if(res.ok){
        localStorage.setItem('hotelToken',result?.token)
        nav('/')
        }
        else
          alert('error loggin in')
    }
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Panel */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage:`url(${backgroundImg})` }}>
        <div className="flex items-center justify-center h-full text-white bg-[rgba(0,0,0,0.6)] bg-opacity-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Welcome to Ladnun</h1>
            <h2 className="text-2xl mt-2">Yogshem Varsh 2026</h2>
            <p className="mt-4 text-lg">Discover the heart of Jain heritage in Ladnun.<br />Connect, explore, and cherish every sacred moment.</p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-3/4 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-yellow-600 text-center mb-4">Jai Jinendra!</h1>
          <h2 className="text-xl text-center mb-6">Welcome to Jain Vishva Bharti!</h2>
          <p className="text-gray-500 text-center mb-6">Enter your mobile number to access your account</p>
          <div className="mb-4">
            <div className="flex items-center border rounded-lg p-2">
              <span className="ml-2 text-gray-600">🇮🇳 +91</span>
              <input
              onChange={(e)=>{setNumber(e.target.value)}}
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-2 outline-none"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">You will receive an SMS verification that may apply message and data rates.</p>
          </div>
          <button onClick={login}  className="w-full bg-yellow-600 text-white p-2 rounded-lg mb-2">Sign In</button>
          <a href="#" className="text-yellow-600 text-sm text-center block">Forget password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;