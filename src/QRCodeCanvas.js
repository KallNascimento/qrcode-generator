import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode'

export default function QRCodeCanvas({ value,imageURL }) {

    const canvasRef = useRef();
    const imageRef = useRef();

    useEffect(() => {
        QRCode.toCanvas(canvasRef.current, value, (error) => { console.log(error) })
    }, [value])

    // useEffect(() => {
    //     QRCode.toDataURL(imageRef.current, imageURL, (error) => { console.log(error) })
    // }, [value])

    return (
        <div>
            <canvas id="canvas" ref={canvasRef}></canvas>
        </div>
    )
}