import React from "react";
import './Cart.css';


const Cart = ({readCourses}) => {
    console.log(readCourses);

    return (
        <div>
            <h2 className="h2data">Total Course: {readCourses.length}</h2>
            {readCourses.map((course) => (
              <li key={course.id} className="h2data">{course.courseName}</li>  
            ))}
        </div>
    );
};
export default Cart;