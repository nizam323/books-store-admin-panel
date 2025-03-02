import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/slices/productsDataSlice";
import { globalVariabel } from "../main";


export default function DeleteProduct() {
    const serverAddress = useContext(globalVariabel);
    const [proId, setProId] = useState("");
    const dispatch = useDispatch();
    const ownerEmail = window.localStorage.getItem("userEmail");

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch(serverAddress+"delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ proId, ownerEmail })
        })
        if (response.status == 200) dispatch(deleteProduct(proId))
    }
    return (
        <>
            <div className="add-pro">
                <h1>Delete Product</h1>
                <br />
                <form method='POST' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Product Id' value={proId} onChange={(e) => setProId(e.target.value)} />
                    <br />
                    <br />
                    <center><button type="submit" style={{ backgroundColor: "#ff4141" }}>Delete</button></center>
                </form>
            </div>
        </>
    )
}