import React from "react";
import './Cart.css';


const Cart = ({readCourses,remining,totalCost}) => {
    // console.log(readCourses);

    return (
        <div>
            <h2 className="credithoure">Credit Hour Remaning: {remining} hr</h2>
            <h2 className="h2data">Courses Name</h2>
            {readCourses.map((course) => (
              <li key={course.id} className="h2data">{course.courseName}</li>  
            ))}
            <h4 className="h2data">Total Credit Hour: {totalCost}</h4>
        </div>
    );
};
export default Cart;