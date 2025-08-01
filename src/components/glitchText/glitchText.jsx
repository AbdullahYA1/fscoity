import React, { useEffect, useRef, useState } from "react";
import './glitchText.scss';

const HACKER_FONT = "'VT323', 'Fira Mono', 'Share Tech Mono', monospace";

function getLocalIP(callback) {
  // WebRTC IP discovery
  let RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  if (!RTCPeerConnection) return;
  let pc = new RTCPeerConnection({ iceServers: [] });
  let noop = () => {};
  let localIPs = {};
  let ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/g;
  function ipIterate(ip) {
    if (!localIPs[ip]) callback(ip);
    localIPs[ip] = true;
  }
  pc.createDataChannel("");
  pc.createOffer().then(sdp => {
    sdp.sdp.split('\n').forEach(line => {
      if (line.indexOf('candidate') < 0) return;
      let ips = line.match(ipRegex);
      if (ips) ips.forEach(ipIterate);
    });
    pc.setLocalDescription(sdp, noop, noop);
  });
  pc.onicecandidate = function (ice) {
    if (!ice || !ice.candidate || !ice.candidate.candidate) return;
    let ips = ice.candidate.candidate.match(ipRegex);
    if (ips) ips.forEach(ipIterate);
  };
}

const initialLines = [
  { type: "system", text: "Welcome to the React Terminal. Type 'help'." }
];

const COMMANDS = [
  { cmd: "aboutme", action: "home" },
  { cmd: "codelab", action: "home" },
  { cmd: "contact", action: "home" },
  { cmd: "gethacked", action: "home" },
  { cmd: "blog", action: "home" },
  { cmd: "home", action: "home" },
  { cmd: "instagram", action: "instagram" },
  { cmd: "ipconfig", action: "ipconfig" }
];

export default function GlitchText() {
  const [lines, setLines] = useState(initialLines);
  const [input, setInput] = useState("");
  const [ip, setIp] = useState("");
  const [country, setCountry] = useState("");
  const terminalRef = useRef(null);

  // Scroll to bottom on new line
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // Get IP on mount
  useEffect(() => {
    getLocalIP(ip => setIp(ip));
  }, []);

  // Get country when IP changes
  useEffect(() => {
    if (ip) {
      fetch(`https://ipapi.co/${ip}/json`)
        .then(res => res.json())
        .then(data => setCountry(data.country || ""))
        .catch(() => setCountry(""));
    }
  }, [ip]);

  // Handle command input
  const handleSubmit = e => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setLines(lines => [...lines, { type: "input", text: `> ${cmd}` }]);
    setInput("");

    // Command logic
    if (cmd === "help") {
      setLines(lines => [
        ...lines,
        { type: "system", text: "Commands:" },
        { type: "system", text: "#1 MAIN, back to MAIN menu" },
        { type: "system", text: "#2 PORT, nav to PORT page" },
        { type: "system", text: "#3 ABOUT, nav to ABOUT page" },
        { type: "system", text: "#4 CONT, nav to CONTACT page" },
        { type: "system", text: "#5 STOP, stop all" }
      ]);
    } else if (cmd === "instagram") {
      window.open("http://instagram.com/arcticben.co.uk", "_blank");
      setLines(lines => [
        ...lines,
        { type: "system", text: "Opening Instagram..." }
      ]);
    } else if (cmd === "ipconfig") {
      setLines(lines => [
        ...lines,
        { type: "system", text: `ipconfig: ${ip}` }
      ]);
    } else if (COMMANDS.some(c => c.cmd === cmd && c.action === "home")) {
      setLines(lines => [
        ...lines,
        { type: "system", text: "Home: I am hungry. Shall we go eat? (close with x)" }
      ]);
    } else if (cmd) {
      setLines(lines => [
        ...lines,
        { type: "system", text: `Execute: ${cmd}` }
      ]);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: HACKER_FONT
      }}
    >
      <div style={{ width: "100%", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ color: "#39ff14", marginBottom: 8 }}>
          <span id="ip">{ip}</span>
          {country && <span className="country" style={{ marginLeft: 16 }}>{country}</span>}
        </div>
        <div
          className="terminal"
          ref={terminalRef}
          style={{
            background: "#111",
            color: "#39ff14",
            fontFamily: HACKER_FONT,
            fontSize: "1.5em",
            padding: "1em",
            borderRadius: 8,
            minHeight: 300,
            maxHeight: "60vh",
            overflowY: "auto",
            boxShadow: "0 0 16px #39ff14",
            marginBottom: 16
          }}
        >
          {lines.map((line, i) => (
            <div key={i} className="terminal__line glitch" data-text={line.text}>
              {line.text}
            </div>
          ))}
        </div>
        <form className="search__form" onSubmit={handleSubmit} autoComplete="off" style={{ display: "flex" }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="search__input"
            style={{
              flex: 1,
              background: "#000",
              color: "#39ff14",
              border: "none",
              outline: "none",
              fontFamily: HACKER_FONT,
              fontSize: "1.5em",
              padding: "0.5em"
            }}
            autoFocus
          />
          <button type="submit" className="btn btn--search" style={{
            background: "#222",
            color: "#39ff14",
            border: "none",
            fontFamily: HACKER_FONT,
            fontSize: "1.5em",
            padding: "0.5em 1em",
            marginLeft: 8,
            cursor: "pointer"
          }}>
            Execute
          </button>
        </form>
      </div>
    </div>
  );
}