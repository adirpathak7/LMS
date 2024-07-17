import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Load from './Load.js'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [issLoading, setIssLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:8100/LMS/api/courses');
                setCourses(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                // if (error.code === 'ERR_NETWORK') {
                //     alert("Network Error!")
                //     return <Load />
                // }
                setError(error)
            } finally {
                setIssLoading(false)
            }
        };
        fetchCourses();
    }, []);

    if (issLoading || error) {
        return <Load />
    }

    return (
        <>
            <h1 className="text-3xl md:text-4xl text-center font-semibold pb-4 md:pb-8 py-4 md:py-8 mb-2 md:mb-4 ">All Courses</h1>
            <div className="w-full h-full flex m-auto gap-x-7 gap-y-7 py-10 px-16 flex-wrap justify-start items-center">
                {courses?.map(item => (
                    <div key={item.courseId} className="h-2/5 w-[23.2%] bg-slate-50 shadow hover:shadow-2xl rounded-md py-4 px-6">
                        <p className="w-full h-28 flex justify-center">
                            <img className="" src={item.image} alt="Course" />
                        </p>
                        <h1 className="font-bold text-xl">{item.name}</h1>
                        <h1 className="text-md truncate">{item.description}</h1>
                        <div className="flex justify-between font-semibold mt-3">
                            <div className="">${item.price}</div>
                            <div className="">{item.rating}/5</div>
                        </div>
                        <div className="flex justify-center mt-2">
                            <a href={item.link} target='_blank'>
                                <button className="bg-sky-400 rounded w-24 h-9 text-center">Enroll</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Courses;
