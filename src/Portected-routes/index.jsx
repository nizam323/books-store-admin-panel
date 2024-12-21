import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (window.localStorage.getItem("token")) {
            console.log("yes");
            navigate("/admin-panel")
        }
        else {
            console.log("no");
            navigate("/")
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
} 