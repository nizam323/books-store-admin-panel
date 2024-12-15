import React, { useState } from "react";

export default function AddProduct() {
    const [proName, setProName] = useState("")
    const [proPrice, setProPrice] = useState("")
    const [proURL, setProURL] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                proName,
                proPrice,
                proURL
            })
        })
    }

    return (
        <>
            <div className="add-pro">
                <h1>Add Product</h1>
                <br />
                <form method='POST' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Product Name' value={proName} onChange={(e) => setProName(e.target.value)} />
                    <br />
                    <br />
                    <input type="text" placeholder='Product Price' value={proPrice} onChange={(e) => setProPrice(e.target.value)} />
                    <br />
                    <br />
                    <input type="text" placeholder='Product Pic URL' value={proURL} onChange={(e) => setProURL(e.target.value)} />
                    <br />
                    <br />
                    <center><button type="submit" style={{ backgroundColor: "#0ec90e" }}>Add</button></center>
                </form>
            </div>
        </>
    )
}