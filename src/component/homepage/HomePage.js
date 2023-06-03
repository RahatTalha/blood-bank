import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div>

            {
                user?.uid ?
                    <div>
                        <h1 class="text-3xl font-bold">Welcome:{user?.email} </h1>
                        <button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logOut}>Log out</button>

                        <div className='flex justify-center items-center mt-[300px]'>
                            <p className='text-6xl font-bold'>C</p>
                            <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-yellow-400'></div>
                            <p className='text-6xl font-bold'>ming S</p>
                            <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-yellow-400'></div>
                            <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-yellow-400'></div>
                            <p className='text-6xl font-bold'>n.....</p>
                        </div>

                    </div>
                    :
                    <>

                        <button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"><Link to="/login">Login</Link></button>


                        <button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to="/signup">Sign up</Link></button>


                        <div className='flex justify-center items-center mt-[300px]'>
                            <p className='text-6xl font-bold'>C</p>
                            <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-yellow-400'></div>
                            <p className='text-6xl font-bold'>ming S</p>
                            <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-yellow-400'></div>
                            <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-yellow-400'></div>
                            <p className='text-6xl font-bold'>n.....</p>
                        </div>
                    </>
            }


        </div>
    );
};

export default HomePage;


