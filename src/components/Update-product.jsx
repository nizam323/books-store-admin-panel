import React, { useContext, useState } from "react";
import { updateProduct } from "../redux/slices/productsDataSlice";
import { useDispatch } from "react-redux";
import { globalVariabel } from "../main";


export default function UpdateProduct() {
    const serverAddress = useContext(globalVariabel);
    const [proId, setProId] = useState("");
    const [proName, setProName] = useState("");
    const [proPrice, setProPrice] = useState("");
    const [proURL, setProURL] = useState("");
    const dispatch = useDispatch();
    const ownerEmail = window.localStorage.getItem("userEmail");
    
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch(serverAddress+"update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                proId,
                proName,
                proPrice,
                proURL,
                ownerEmail
            })
        })
        if (response.ok) {
            dispatch(updateProduct({
                proId: parseInt(proId, 10),
                proName,
                proPrice,
                proURL
            }));
        }
    }

    return (
        <>
            <div className="add-pro">
                <h1>Update Product</h1>
                <br />
                <form method='POST' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Product Id' value={proId} onChange={(e) => setProId(e.target.value)} />
                    <br />
                    <br />
                    <input type="text" placeholder='Product Name' value={proName} onChange={(e) => setProName(e.target.value)} />
                    <br />
                    <br />
                    <input type="text" placeholder='Product Price' value={proPrice} onChange={(e) => setProPrice(e.target.value)} />
                    <br />
                    <br />
                    <input type="text" placeholder='Product Pic URL' value={proURL} onChange={(e) => setProURL(e.target.value)} />
                    <br />
                    <br />
                    <center><button type="submit" style={{ backgroundColor: "#5f5fe7" }}>Update</button></center>
                </form>
            </div>
        </>
    )
}