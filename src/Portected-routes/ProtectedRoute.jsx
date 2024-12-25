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
                if (response.status == 200) setResponse(true)
                else setResponse(false)
            })
            .catch((error) => {
                console.error(error)
                setResponse(false)
            })

    }, [navigate])

    if (response) {
        return <>{children}</>
    }
    else {
        navigate("/")
    }
} 