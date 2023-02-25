import React from 'react';
import Loading from "../../components/Loading/Loading";

export default function OtpForm(
    {
        handelChange,
        handelSubmit,
        error,
        otp,
        email,
        isLoading
    }
) {
    return (
        <form onSubmit={(e) => handelSubmit(e)}>
            <div className="signup--fielddiv">
                <label htmlFor="otp">OTP</label>
                <div className="signup--inputdiv">
                    <input
                        type="text"
                        name="otp"
                        value={otp}
                        placeholder="Enter OTP"
                        onChange={(e) => handelChange(e)}
                    />
                </div>
                {
                    error.length > 0 && error.map((err, i) =>
                        err.startsWith("*OTP") ? <p key={i}>{err}</p> : ''
                    )
                }
            </div>
            {
                isLoading ?
                    <Loading /> :
                    <button className="signup--loginbtn">Verify</button>
            }
            <h4 className="signup--otp--msg">Email has been sent to <span>{email}</span></h4>
        </form>
    )
}