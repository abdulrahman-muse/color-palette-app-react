import React, { useState } from "react";
import ColorPalleteItems from "./ColorPalleteItems";

function AddColorForm({ shades, addColor, colors, searchTerm, background, setBackground }) {
    const [formData, setFormData] = useState({
        name: "",
        id: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newData = { ...formData };
        addColor(newData);
    };

    return (
        <div style={{ textAlign: "center", paddingTop: "100px" }} >
            <form onSubmit={onSubmit} >

                <input type="text" name="name" placeholder="Add Color" onChange={handleChange} className="hi" />

                <button type="submit" className="button-12" style={{ margin: "15px", borderRadius: "60px", width: "100px", height: "27px", cursor: "pointer" }}>
                    Submit
                </button>
            </form>
            <ColorPalleteItems colors={colors} shades={shades} searchTerm={searchTerm} background={background} setBackground={setBackground} />
        </div>
    );
}

export default AddColorForm;