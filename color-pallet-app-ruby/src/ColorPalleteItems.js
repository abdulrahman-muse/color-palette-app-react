import { useState, useEffect } from "react"
import { CopyToClipboard } from 'react-copy-to-clipboard';




function ColorPalleteItems({ deleteShade, shades, background, setBackground }) {
    const [current, setCurrent] = useState(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCurrent(null)
        }, 3000)
        return () => clearTimeout(timeoutId)
    }, [current])


    return (
        <div style={{ background: background, paddingTop: '35px' }}>
            {current !== null && <h1 style={{ paddingTop: "20px" }}> Copied {current}</h1>}
            <div className="container">
                {shades.map((shade) => (
                    <div key={shade.id} className="card">
                        <div style={{
                            background: shade.hex_code,
                            filter: "brightness(85%)",
                            boxShadow: shade.hex_code === background ? "0 0 5px #000" : ""
                        }}
                            className="box"
                            onClick={() => setBackground(shade.hex_code)}>
                        </div>
                        <CopyToClipboard text={`color: ${shade.hex_code};`}>
                            <p style={{ color: shade.hex_code === background ? "#fff" : shade.hex_code, padding: "7px", fontSize: 15 }}
                                onClick={(() => setCurrent(shade.hex_code))}>{shade.hex_code}</p>
                        </CopyToClipboard>
                        <button style={{ cursor: "pointer" }} onClick={() => deleteShade(shade.id)} >Delete Shade</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ColorPalleteItems