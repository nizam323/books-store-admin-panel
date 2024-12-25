import React, { useState } from "react";
import styles from "./login.module.css"
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isAdmin, setIsAdmin] = useState(true);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
                isAdmin
            })
        })
            .then((response) => response.json())
            .then((data) => {
                window.localStorage.setItem("token", data.token)
                window.localStorage.setItem("userEmail", email)
                navigate("/admin-panel")
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <div className={styles.formcon}>
                <div className={styles.logincon}>
                    <div className={styles.img}>
                        <h1>Signin as Admin</h1>
                    </div>
                    <div className={styles.unameemail}>
                        <form method="POST" onSubmit={handleSubmit}>
                            <label htmlFor="u-email" style={{ color: '#3c434a' }}>Email Address</label>
                            <input className={styles.input} type="text" id="u-email" required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />
                            <br />
                            <label htmlFor="pswd" style={{ color: '#3c434a' }}>Password</label>
                            <input className={styles.input} type="password" id="pswd" required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <center>
                                <div className={styles.checkbtn} style={{ justifyContent: "center" }}>
                                    <button type="submit">Sign In</button>
                                </div>
                            </center>
                        </form>
                    </div>
                </div>
                <div className={styles.acon}>
                    <Link to="/signup">← Go to SignUp</Link>
                </div>
            </div>
        </>
    )
}