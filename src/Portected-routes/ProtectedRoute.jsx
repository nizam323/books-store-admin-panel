import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
    const navigate = useNavigate();
    const [response, setResponse] = useState("");

    useEffect(() => {
        let token = window.localStorage.getItem("token");

        if (!token) {
            navigate("/");
            return;
        }

        fetch("http://localhost:3000/checkauth", {
            method: "GET",
            headers: {
                authorization: "bearer " + token
            }
        })
            .then((response) => {
                setResponse(response)
            })
            .catch((error) => {
                console.error(error)
                setResponse(false)
            })

    }, [navigate])

    if (response.status == 200) {
        return <>{children}</>
    }
    else if (response.status == 403) {
        window.localStorage.removeItem("token")
        navigate("/")
    }
} 