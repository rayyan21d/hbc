import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Havbar = () => {

    const [onMobile, setOnMobile] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isOpen, setisOpen] = useState(false);

    

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth)
            if (window.innerWidth < 768) {
                setOnMobile(true);
                setisOpen(false)
                
            } else {
                setOnMobile(false)
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    
    }, [windowWidth, onMobile])

   
   

    const links = [{
        name: 'Home',
        path: '/signin'
    }, {
        name: 'Login',
        path: '/signin'
    }, {
        name: 'Sign Up',
        path: '/signup'
    
    },{
        name: 'Book',
        path: '/book'
    
    },{
        name: 'Buy',
        path: '/buy'
    },{
        name: "Recipt",
        path: '/recipt'
    }




]


  return (
    <div className='flex flex-1 items-center  sm:justify-between  px-6 py-4 sm:px-6 top-0 text-black font-medium sm:font-medium bg-slate-300 '>
    {  (onMobile && !isOpen)&&(  
    
        <>
           <div className='flex flex-1 justify-between '>
                <div className="">
                   Logo
                </div>

                <div>
                    <button onClick={()=>setisOpen(!isOpen)} className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
           </div>
        </>
        
    )}
    
    {  (onMobile && isOpen)&&(
    
        <>
            
           <div className='flex flex-1 justify-end'>
           
            <div className='bg-slate-300 -mx-8 w-[400px] py-4 top-14 gap-y-4 absolute grid pl-3 '>
                {links.map((link, index) => (
                   <div className='cursor-pointer px-4' key={link.name +"DIV"}>

                            <Link to={link.path} >
                           
                            {link.name}
                        
                        </Link>

                        </div>
                ))}
                
            </div>

            <div>
                    <button onClick={()=>setisOpen(!isOpen)} className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                    </button>
            </div>

           </div>


        
        </>
    )}

    {
        (!onMobile)&&(
            <>
                <div className="mr-[230px]">
                    Logo
                </div>

                <div className='hidden sm:flex gap-4'>
                    {links.map((link, index) => (
                        
                        <div className='cursor-pointer px-4' key={link.name +"DIV"}>

                            <Link to={link.path} >
                           
                            {link.name}
                        
                        </Link>

                        </div>

                        
                    ))}
                </div>
            </>
        )
    }

       

    </div>
  )
}

export default Havbar