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
                        <p>Welcome:{user?.email}</p>
                         <button className='btn-submit' onClick={logOut}>Log out</button>
                       </div>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign up</Link>
                        </>
                }

           
        </div>
    );
};

export default HomePage;


