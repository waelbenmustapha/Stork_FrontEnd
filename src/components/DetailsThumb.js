import React from 'react'

function DetailsThumb(props) {
    const {images, tab, myRef} = props;
        return (
            <div className="thumb" ref={myRef}>
                {
                images.map((img, index) =>(
                    <img src={img} alt="" key={index} 
                    onClick={() => tab(index)}
                    />
                ))
                }
            </div>
        )
}

export default DetailsThumb
