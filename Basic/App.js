import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading =React.createElement("h1",{id:"heading"},"Hi Himanshu Im Rendering  !");
const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [
            React.createElement("h1",{},"Im h1 Tag ,Nope"),
            React.createElement("h2",{},"Im h2 Tag !")
        ]
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

root.render(parent);