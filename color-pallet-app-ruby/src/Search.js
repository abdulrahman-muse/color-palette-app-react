import React from "react";
import ColorPalleteItems from "./ColorPalleteItems";

function Search({ shades, setSearchTerm, colors, searchTerm, setBackground, background }) {
    return (
        <div style={{ paddingTop: "100px" }}>
            <input className="hi"
                type="text"
                placeholder="Search for a Color"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ColorPalleteItems colors={colors} shades={shades} searchTerm={searchTerm} background={background} setBackground={setBackground} />
        </div>
    );
}

export default Search;