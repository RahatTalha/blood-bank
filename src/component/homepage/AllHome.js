import React, { useContext, useEffect, useState } from 'react'
import { getAllHome } from '../../Api/Api'
import Spinner from '../Spinner/Spinner'
import HomeCard from './HomeCard'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'


const AllHome = () => {
    const [loading, setLoading] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const [homes, setHomes] = useState([])
    useEffect(() => {
        setLoading(true)
        getAllHome()
            .then(data => {
                console.log(data)
                setHomes(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, []);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (

                <>

                    <nav className="bg-gray-800 py-4 px-6 flex justify-between items-center">
                        <div>
                            <span className="text-white text-xl font-bold">Blood Donation</span>
                        </div>
                        <div>

                            <button >
                                {user?.uid ?
                                    <>

                                        <Link class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 mx-1 px-4 rounded"
                                            to="/dashboard">
                                            Dashboard </Link>
                                        <button
                                            class="bg-blue-500 hover:bg-blue-600  text-white font-bold py-2 px-4 rounded"
                                            onClick={handleLogOut}>Sign Out</button>


                                    </>
                                    : <Link
                                    class="bg-blue-500 hover:bg-blue-600  text-white font-bold py-2 px-4 rounded"
                                    to="/login">Login</Link>}

                            </button>
                        </div>
                    </nav>


                    <section className='text-gray-600 body-font'>
                        <div className='container pb-8 pt-2 mx-3'>
                            <div className='flex flex-wrap'>
                                {homes.map(home => (
                                    <HomeCard home={home} key={home._id} />
                                ))}
                            </div>
                        </div>
                    </section>


                </>


            )}
        </>
    )
}

export default AllHome