import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Image from "react-bootstrap/Image";

function PhotoArea() {
    return (
        <div style={{ display: "block", width: 300, height: 300,padding: 30 }}>
            {/* <h4>React-Bootstrap Image Component</h4> */}
            <Image
                src=
                {require("./Manasa_DP.png")}
                rounded
                alt="Instagram"
                style={{ width: "100%" }}
            />
        </div>
    )
}
export default PhotoArea;
