import {useState} from 'react'

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

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
        <h1>Thank You!</h1>
        <h3 className='text-sm sm:text-lg font-light mt-2 '>{"Your session has been booked "}<a href="/siginup" className='hover:text-blue-500 underline font-medium'>Download here.</a></h3>
      </div>
      <div>
        <form className=" mx-auto border-2 p-6 sm:p-10 border-gray-300 rounded-2xl flex flex-col gap-6 font-semibold text-xl sm:text-2xl w-[300px] h-[500px] sm:h-[600px] sm:w-[540px]">

          <div className="flex h-14 gap-2 sm:h-14">
            <label className="block mb-3  font-medium text-black  ">Cycle Type</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder="MTB" required 
            value={email}
            onChange={(e)=>{
              handleChange(e, setEmail);
            }}/>
          </div>

            <div className="flex h-14 gap-7 sm:h-14 sm:gap-12">
            <label className="block mb-3  font-medium text-black">Date </label>
            <input 
             value={phone} 
            onChange={(e)=>{
              handleChange(e, setPhone);
            }}
            type="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder=" 24 - 5 - 2025" required />
          </div>

           <div className="flex  gap-7 sm:h-14 sm:gap-11">
            <label className="block mb-3  font-medium text-black">Time</label>
            <input 
             value={phone} 
            onChange={(e)=>{
              handleChange(e, setPhone);
            }}
            type="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder=" 4: 40 AM" required />
          </div>

          <div className="flex h-14  gap-12 sm:gap-16">
            <label className="block mb-3  font-medium text-black">QR</label>

            <div className="block bg-gray-100 border-2 disable-pointer-events  ">
            <img src="/src/assets/image.png" alt="" />
           
          </div>

           





          </div>

       
         

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-28  sm:mt-44 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={()=>{handleSubmit}}>Print Recipt</button>
        </form>

      </div>
    
    </div>
  )
}

export default SignIn