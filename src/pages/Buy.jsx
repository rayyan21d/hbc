import {useState} from 'react'

const SignIn = () => {

  const [upiId, setupiId] = useState('');
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
        <h1>Buy Membership</h1>
        <h3 className='text-sm sm:text-lg font-light mt-2 '>{"Enjoy a year long access to HBC"}</h3>
      </div>
      <div>
        <form className=" mx-auto border-2 p-6 sm:p-10 border-gray-300 rounded-2xl flex flex-col gap-6 font-semibold text-2xl sm:text-3xl w-[300px] h-[450px] sm:h-[470px] sm:w-[520px]">

          <div className="">
            <label className="block mb-3  font-medium text-black">UPI ID</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder="example@okisbi" required 
            value={upiId}
            onChange={(e)=>{
              handleChange(e, setupiId);
            }}/>
          </div>

            <div className="hidden">
            <label className="block mb-3  font-medium text-black">Phone No.</label>
            <input 
             value={phone} 
            onChange={(e)=>{
              handleChange(e, setPhone);
            }}
            type="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder=" 92910**** " required />
          </div>

           <div className="bg-gray-100 border-2 disable-pointer-events flex flex-col items-center ">
            <img src="./../../src/assets/image.png" alt="" />
           
          </div>

       
         

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={()=>{handleSubmit}}>Submit</button>
        </form>

      </div>
    
    </div>
  )
}

export default SignIn