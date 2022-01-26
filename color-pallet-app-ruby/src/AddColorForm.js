import React, { useState } from "react";
import ColorPalleteItems from "./ColorPalleteItems";

function AddColorForm({ deleteShade, shades, addColor, colors, searchTerm, background, setBackground }) {
    const [formData, setFormData] = useState({
        hex_code: "",
        color_id: 0
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(value)
        console.log(name)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newData = { ...formData };
        addColor(newData);
    };

    return (
        <div style={{ textAlign: "center", paddingTop: "100px" }} >
            <form onSubmit={onSubmit} >
                <input style={{ width: 150, margin: "15px" }} value={formData.hex_code} type="text" name="hex_code" placeholder="Add Shade" onChange={handleInputChange} className="hi" />
                <input style={{ width: 100 }} value={formData.color_id} type="text" name="color_id" placeholder="Add Color" onChange={handleInputChange} className="hi" />
                <button type="submit" className="button-12" style={{ margin: "15px", borderRadius: "60px", width: "100px", height: "27px", cursor: "pointer" }}>
                    Submit
                </button>
            </form>
            <ColorPalleteItems deleteShade={deleteShade} colors={colors} shades={shades} searchTerm={searchTerm} background={background} setBackground={setBackground} />
        </div>
    );
}

export default AddColorForm;