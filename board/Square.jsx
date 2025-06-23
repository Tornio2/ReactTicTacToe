import React from "react";

export default function Square({ value, onClick, highlight }) {
    // return (
    //     <button className="square" onClick={onClick}>
    //         {value}
    //     </button>
    // );

    return (
        <button
            className={`square${highlight ? ' highlight' : ''}`}
            onClick={onClick}
            disabled={!!value} // Disable the button if it already has a value
            // style={{
            //     backgroundColor: highlight ? 'yellow' : 'white', // Highlight the square if it is part of the winning line
            // }}
            >
            {value}
        </button>
    );
}