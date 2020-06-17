import React from "react";

function Input(){
    return (
        <form>
        <div className = "sms-form input-text">
            <div className="input-text">
                <label htmlFor="mobile" className="input-mob">+91</label>
                <input className="input-mob" type="number" id="mobile" name="mobile" minLength="10" maxLength="10" placeholder="Enter mobile number" defaultValue=""></input>
            </div>
            <div className="input-text">
            <input className = "download-but input-mob" type="submit" id="sms-but" value="Get SMS with Download link"></input>
            </div>

        </div>
        </form>
    );
}

export default Input;