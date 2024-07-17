import React from 'react';
import axios from 'axios';
import lmslogo from '../images/lmslogo.jpg';

const Home = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="text-5xl font-extrabold w-1/2 mb-36 px-2">
                    The learning software <br />
                    that trainers and <br />
                    learners love
                    <p className="text-xl font-extrabold mt-5 text-white px-2">
                        Train your employees, partners, and customers <br />
                        online on a feature-rich LMS that’s so easy to use, <br /> you’ll be up and running in
                        minutes.
                    </p>
                </div>

                <div className="justify-end w-1/2 h-full px-3 py-3">
                    <img className="w-full h-96 mt-16" src={lmslogo} alt="Login" />
                </div>
            </div>
        </div>
    )
}
export default Home;
