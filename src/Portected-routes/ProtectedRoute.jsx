import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { globalVariabel } from "../main";


export default function ProtectedRoutes({ children }) {
    const serverAddress = useContext(globalVariabel);
    const navigate = useNavigate();
    const [response, setResponse] = useState("");

    useEffect(() => {
        let token = window.localStorage.getItem("token");

        if (!token) {
            navigate("/");
            return;
        }

        fetch(serverAddress+"checkauth", {
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