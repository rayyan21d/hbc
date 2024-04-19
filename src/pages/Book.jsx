import {useState} from 'react'

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleChange = (e, setFn) => {
    e.preventfault();
    setFn(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventfault();
    const payload = {
      email: email,
      password: password,
      phone: phone
    }

    fetch('http://localhost:8000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

  }






  return (
    <div className=' flex flex-1 items-center flex-col w-full p-0 h-full'>
      <div className='font-bold text-3xl sm:text-4xl p-4 mt-14 sm:mb-4'>
        <h1>Book a Session</h1>
        <h3 className='text-sm sm:text-lg font-light mt-2 '>{"Choose your cycle Date and time"}
        </h3>
      </div>
      <div>
        <form className=" mx-auto border-2 p-6 sm:p-10 border-gray-300 rounded-2xl flex flex-col gap-6 font-semibold text-2xl sm:text-3xl w-[300px] h-[420px] sm:h-[450px] sm:w-[500px]">

          <div className="">
            <label className="block mb-3  font-medium text-black">Cycle Type</label>
            <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder="Mountain bike" required  
            value={email}
            onChange={(e)=>{
              handleChange(e, setEmail);
            }}/>
          </div>

              <div className="">
            <label className="block mb-3  font-medium text-black">Date</label>
            <input 
             value={date} 
            onChange={(e)=>{
              handleChange(e, setDate);
            }}
            type="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder=" 21 - 5 - 2024 " required />
          </div>

           <div className="mb-2">
            <label className="block mb-3  font-medium text-black">Time</label>
            <input 
            value={time} 
            onChange={(e)=>{
              handleChange(e, setTime);
            }}
            type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder="4:40 AM" required />
          </div>

       
         

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={()=>{handleSubmit}}>Submit</button>
        </form>

      </div>
    
    </div>
  )
}

export default SignIn