import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { Navbar } from './Navbar';


export const AppRouter = () => {
    return (
        <Router>

            <div>
                <Navbar />
                <div className='container'>
                    <Routes >
                        <Route exact path='/' element={<HomeScreen />} />

                        <Route exact path='/about' element={<AboutScreen />} />
                        <Route exact path='/login' element={<LoginScreen />} />

                        {/* <Route path='*' element={<HomeScreen/>}/> */}

                        <Route path="*" element={<Navigate replace to="/" />} />

                    </Routes>
                </div>


            </div>
        </Router>
    )
}
