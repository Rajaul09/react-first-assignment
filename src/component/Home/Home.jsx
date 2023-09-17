import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";

import './Home.css'

const Home = () => {
    const [allCourse, setAllCourse] = useState([]);
    const [readCourses, setAddCourses] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then((data) => setAllCourse(data));
    }, []);

    const handleSelectCourse = (course) => {

        const isExist = readCourses.find((item) => item.id == 
        course.id);
        if(isExist){
            return alert('Already Taken course');
        }
        else
        {
            setAddCourses([...readCourses, course]);
        }
       
    };

    console.log(readCourses);

    return (
        <div className="container">
            <div className="home-container">
                <div className="cart-container">
                    {
                        allCourse.map(course => (

                            <div key={course.id} className="cart">
                                <div className="cart-image">
                                    <img src={course.image} alt="" />
                                </div>
                                <h1 className="header">{course.courseName}</h1>
                                <p className="cart-para">{course.description}</p>
                                <div className="price-flex">
                                    <p className="price">Price: {course.price}</p>
                                    <p className="credit">Credit : {course.courseHours}</p>
                                </div>
                                <button onClick={() =>handleSelectCourse(course)} className="btn-design">Select</button>
                            </div>
                        ))
                    }
                </div>
                <div className="course-container">
                    <Cart readCourses={readCourses}></Cart>
                </div>
            </div>
        </div>
    )
}
export default Home;