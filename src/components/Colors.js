import React from 'react'

function Colors(props) {
    const {colors} = props;
        return (
            <div className="colors">
                {
                colors.map((color, index) =>(
                    <button style={{background: color}} key={index}></button>
                ))
                }
            </div>
        )
}

export default Colors
