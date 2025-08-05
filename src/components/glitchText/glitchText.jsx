import React from "react";
import "./glitchText.scss";

const GlitchText = () => (
  <div className="splash-screen" style={{ padding: "100px" }}>
    <div className="container" style={{ width: "80ch" }}>
      <div className="terminal">
        <span className="line">
          Welcome to <a href="#">sebastian-heitmann.dev</a>!
        </span>
        <span className="line">
          Please wait a moment until the site is ready to start.
        </span>
        <span className="line">Connecting to Server...</span>
        <span className="line success">Connection established. 🚀</span>
        <span className="line">Layouting site...</span>
        <span className="line success">Site layout created. 🚀</span>
        <span className="line in-line">Loading Assets...</span>
        <div className="progress-indicator"></div>
        <span className="line success in-line">Assets loaded. 🚀 </span>
        <span className="line in-line">Ready to Rock!🤘</span>
      </div>
      <a className="btn-primary" href="#">Enter</a>
    </div>
  </div>
);

export default GlitchText;