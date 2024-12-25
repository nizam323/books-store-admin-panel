import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/slices/productsDataSlice";

export default function DeleteProduct() {
    const [proId, setProId] = useState("");
    const dispatch = useDispatch();

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ proId })
        })
        if (response.status == 200) dispatch(deleteProduct({ proId }))
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