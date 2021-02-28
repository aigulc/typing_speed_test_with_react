import React from 'react'

export default function Preview(props) {

    const text = props.text.split('');

    return (
        <div className = "border rounded p-3 md-4">
            {
                text.map((symbol, index) => {
                    let color;
                    if(index < props.userInp.length) {
                        color = symbol === props.userInp[index] ? 'green' : 'red'
                    }
                    return <span key = {index} style = {{backgroundColor: color}} > {symbol}</span>
                })
            }
        </div>
    )
}
