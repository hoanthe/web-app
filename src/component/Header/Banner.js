import React from "react";

export default function Banner (){
    return(
        <>
        <div className= "py-4 bg-success" style = {{textAlignLast: "center", height: "150px"}}>
            <b className = "text-light">Your New E cig Company</b><br/>
            <b ><span className = "text-warning">See Our</span> <a href = "google.com" >CLEARANCE</a></b><br/><br/>
            <b><span className="text-black">Please Note:</span> <span className="text-white">USPS, UPS are EXPERIENCING DELAYS ! FED EX Cut us Off</span></b>
        </div>

        <div className= "py-4 bg-dark" style = {{textAlignLast: "center", height: "130px"}}>
            <b className = "text-light" style = {{fontSize: "30px"}}>WARNING: This product contains nicotine.<br/> Nicotine is an addictive chemical.</b>
        </div>
        </>
    )
}