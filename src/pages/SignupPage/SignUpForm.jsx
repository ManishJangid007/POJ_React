import React from "react"
import Loading from "../../components/Loading/Loading";

export default function SignUpForm(
    {
        handelSubmit,
        handelChange,
        formData,
        error,
        navigate,
        isLoading
    }
) {
    return (
        <>
            <form onSubmit={(e) => handelSubmit(e)}>

                <div className="signup--inputgrid">

                    <div className="signup--fielddiv">
                        <label htmlFor="firstname">Firstname</label>
                        <div className="signup--inputdiv">
                            <input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                placeholder="Enter firstname..."
                                onChange={(e) => handelChange(e)}
                            />
                        </div>
                        {
                            error.length > 0 && error.map((err, i) =>
                                err.startsWith("*Firstname") ? <p key={i}>{err}</p> : ''
                            )
                        }
                    </div>

                    <div className="signup--fielddiv">
                        <label htmlFor="lastname">Lastname</label>
                        <div className="signup--inputdiv">
                            <input
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                placeholder="Enter lastname..."
                                onChange={(e) => handelChange(e)}
                            />
                        </div>
                        {
                            error.length > 0 && error.map((err, i) =>
                                err.startsWith("*Lastname") ? <p key={i}>{err}</p> : ''
                            )
                        }
                    </div>

                    <div className="signup--fielddiv">
                        <label htmlFor="gender">Gender</label>
                        <div className="signup--inputdiv">
                            <select
                                name="gender"
                                onChange={(e) => handelChange(e)}
                                value={formData.gender}
                            >
                                <option value="select">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        {
                            error.length > 0 && error.map((err, i) =>
                                err.startsWith("*Gender") ? <p key={i}>{err}</p> : ''
                            )
                        }
                    </div>

                    <div className="signup--fielddiv">
                        <label htmlFor="dob">Date of Birth</label>
                        <div className="signup--inputdiv">
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={(e) => handelChange(e)}
                            />
                        </div>
                        {
                            error.length > 0 && error.map((err, i) =>
                                err.startsWith("*DOB") ? <p key={i}>{err}</p> : ''
                            )
                        }
                    </div>

                    <div className="signup--fielddiv">
                        <label htmlFor="email">Email</label>
                        <div className="signup--inputdiv">
                            <input
                                type="Email"
                                name="email"
                                value={formData.email}
                                placeholder="Enter email..."
                                onChange={(e) => handelChange(e)}
                            />
                        </div>
                        {
                            error.length > 0 && error.map((err, i) =>
                                err.startsWith("*Email") ? <p key={i}>{err}</p> : ''
                            )
                        }
                    </div>

                    <div className="signup--fielddiv">
                        <label htmlFor="username">Username</label>
                        <div className="signup--inputdiv">
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                placeholder="Choose username..."
                                onChange={(e) => handelChange(e)}
                            />
                        </div>
                        {
                            error.length > 0 && error.map((err, i) =>
                                err.startsWith("*Username") ? <p key={i}>{err}</p> : ''
                            )
                        }
                    </div>

                    <div className="signup--fielddiv">
                        <label htmlFor="password">Password</label>
                        <div className="signup--inputdiv">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                placeholder="Choose password..."
                                onChange={(e) => handelChange(e)}
                            />
                        </div>
                        {
                            error.length > 0 && error.map((err, i) =>
                                err.startsWith("*Password") ? <p key={i}>{err}</p> : ''
                            )
                        }
                    </div>

                    <div className="signup--fielddiv">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="signup--inputdiv">
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                placeholder="Confirm Password..."
                                onChange={(e) => handelChange(e)}
                            />
                        </div>
                        {
                            error.length > 0 && error.map((err, i) =>
                                err.startsWith("*Confirm Pass") ? <p key={i}>{err}</p> : ''
                            )
                        }
                    </div>
                </div>
                {
                    error.length > 0 && error.map((err, i) =>
                        err.startsWith("*Error") ? <p key={i}>{err}</p> : ''
                    )
                }
                {
                    isLoading ?
                        <Loading /> :
                        <button className="signup--loginbtn">Sign Up</button>
                }
            </form>
            <div className="signup--bottom--text">
                <h4>Already Have a Account ? <span onClick={() => navigate("/login")}>Login</span></h4>
            </div>
        </>
    )
}