import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PublicRoute({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        const token = window.localStorage.getItem("token");

        if (token) {
            navigate("/admin-panel"); 
        }
    }, [navigate]);

    return <>{children}</>;
}