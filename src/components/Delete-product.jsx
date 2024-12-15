import React, { useState } from "react";

export default function DeleteProduct() {
    const [proId, setProId] = useState("");

    function handleSubmit() { }
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