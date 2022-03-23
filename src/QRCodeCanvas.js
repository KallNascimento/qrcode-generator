import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode'

export default function QRCodeCanvas({ value }) {

    const canvasRef = useRef();

    useEffect(() => {
        QRCode.toCanvas(canvasRef.current, value, (error) => { console.log(error) })
    }, [value])

    return (
        <div>
            <canvas id="canvas" ref={canvasRef}></canvas>
        </div>
    )
}