import React, {useState, useEffect} from 'react'
import Axios from 'axios'

function Inventory() {
    const [items, setItems] = useState()

    /*let img = new Image()
    img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png'
    img.onload = function() {
        init() 
    }
    
    let canvas = document.querySelector('canvas')
    let ctx = canvas.getContext('2d')
    function init() {
        ctx.drawImage(img, 0, 0, 16, 18, 0, 0, 16, 18)
    }*/
    
    return (
        <div>
            <canvas width="300" height="200" onClick={e => { alert(e.clientX)}}></canvas>
        </div>
    )
}

export default Inventory