import React, { useState } from "react";

export default function SearchProduct() {
    const [search, setSearch] = useState("");

    function handleSubmit() { }
    return (
        <>
            <div className="add-pro">
                <h1>Search Product</h1>
                <br />
                <form method='POST' onSubmit={handleSubmit}>
                    <input type="search" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <br />
                    <br />
                    <center style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <button type="submit" style={{ backgroundColor: "rgb(94 86 86 / 71%)" }}>Search</button>
                        <button type="submit" style={{ backgroundColor: "rgb(114 161 64)", padding: "0" }}>Show All</button>
                    </center>
                </form>
            </div>
        </>
    )
}