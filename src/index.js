import React from "react";
import ReactDOM from "react-dom/client";
import Impo from './Impo'; // Import the Impo component
//import One from './One';

const rootElement = document.getElementById('root');
const rootRef = ReactDOM.createRoot(rootElement);
rootRef.render(<Impo />); // Use the Impo component

// rootRef.render(
//     <React.Fragment>
//         <Impo />
//         <One />
//     </React.Fragment>
// )
