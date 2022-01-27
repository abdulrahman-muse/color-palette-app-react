import React, { useState } from "react";
import ColorPalleteItems from "./ColorPalleteItems";

function AddColorForm({ deleteShade, shades, addColor, searchTerm, background, setBackground }) {
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
        <div style={{ textAlign: "center", paddingTop: "10px" }} >
            <form onSubmit={onSubmit} >
                <input style={{ width: 150, margin: "15px" }} value={formData.hex_code} type="text" name="hex_code" placeholder="Add Shade" className="hi" onChange={handleInputChange} />
                <select name="color_id" onChange={handleInputChange}>
                    <option value="0">Select Color:</option>
                    <option value="36" >Blue</option>
                    <option value="37" >Red</option>
                    <option value="38" >Green</option>
                    <option value="39" >Purple</option>
                    <option value="40" >Pink</option>
                </select>
                <button type="submit" className="button-12" style={{ margin: "15px", borderRadius: "60px", width: "100px", height: "27px", cursor: "pointer" }}>
                    Submit
                </button>
            </form>
            <ColorPalleteItems deleteShade={deleteShade} shades={shades} searchTerm={searchTerm} background={background} setBackground={setBackground} />
        </div>
    );
}

export default AddColorForm;