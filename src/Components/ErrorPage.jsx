import React from 'react';
import '../css/ErrorPage.css';


const ErrorPage = () => {
    return (
        <>
            <div className="error" style={{ color:"white",textAlign:"center", fontSize:"35px" }}>
                <h1>ErrorPage 404</h1>
                <h3 style={{ fontSize: "30px" }}>Page not Found</h3>
                {/* <button onClick={goback}></button> */}
          </div>
            </>
    )
}

export default ErrorPage;