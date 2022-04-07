import React from "react";
import "./index.css";
export default function Modal({ children, handleClose }) {
  return (
    <div className="back-drop">
      <div className="modal">
        {children}
        <button onClick={handleClose}> Close</button>
      </div>
    </div>
  );
}
