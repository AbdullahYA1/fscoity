import React, { useState, useEffect, useRef } from "react";
import "./home.css"; // Assuming you have a CSS file for styles

const Home = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayedText, setDisplayedText] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [isTerminalActive, setIsTerminalActive] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [redirectOutput, setRedirectOutput] = useState([]);
  const [currentRedirectLine, setCurrentRedirectLine] = useState(0);
  const [currentRedirectChar, setCurrentRedirectChar] = useState(0);
  const terminalRef = useRef(null);
  const hiddenInputRef = useRef(null);

  // Enhanced intro sequence with better ASCII
  const introLines = [
    "Initializing secure connection...",
    "Establishing encrypted tunnel...",
    "Connection established.",
    "",
    "   ▄████████    ▄████████  ▄██████▄   ▄████████  ▄█     ▄████████    ███        ▄██   ▄   ",
    "  ███    ███   ███    ███ ███    ███ ███    ███ ███    ███    ███ ▀█████████▄   ███   ██▄  ",
    "  ███    ███   ███    █▀  ███    ███ ███    █▀  ███▌   ███    █▀     ▀███▀▀██   ███▄▄▄███  ",
    "  ███    ███   ███        ███    ███ ███        ███▌  ▄███▄▄▄         ███   ▀  ▀▀▀▀▀▀███  ",
    "▀███████████ ▀███████████ ███    ███ ███        ███▌ ▀▀███▀▀▀         ███     ▄██   ███  ",
    "  ███    ███          ███ ███    ███ ███    █▄  ███    ███    █▄      ███     ███   ███  ",
    "  ███    ███    ▄█    ███ ███    ███ ███    ███ ███    ███    ███     ███     ███   ███  ",
    "  ███    █▀   ▄████████▀   ▀██████▀  ████████▀  █▀     ████████▀     ▄████▀    ▀█████▀   ",
    "",
    "     ╔══════════════════════════════════════════════╗",
    "     ║          SYSTEM BREACH DETECTED              ║",
    "     ║         TERMINAL ACCESS GRANTED              ║",
    "     ║           INITIALIZE: LEVEL 1                ║",
    "     ╚══════════════════════════════════════════════╝",
    "",
    "[INFO] Scanning system architecture...",
    "[INFO] Bypassing security protocols...",
    "[INFO] Analyzing skill matrix...",
    "[INFO] Loading portfolio data...",
    "[SUCCESS] Access granted to user directory",
    "",
    "════════════════════════════════════════════════════════════════",
    "                    WELCOME TO ASOCEITY TERMINAL",
    "════════════════════════════════════════════════════════════════",
    "",
    "┌─────────────────────────────────────────────────────────────┐",
    "│ User: Abdullah Yousef                                       │",
    "│ Role: Full Stack Developer | Backend Engineer              │",
    "│ Location: Riyadh, Saudi Arabia                             │",
    "│ Status: Available for opportunities                        │",
    "│ Security Level: GUEST                                      │",
    "└─────────────────────────────────────────────────────────────┘",
    "",
    "⚠️  WARNING: Unauthorized access detected from your IP",
    "🔒 Limited privileges granted for security purposes",
    "💡 Type 'sudo root ' to explore My hacking Portfolio",
    "",
    "Last login: Tue Aug 05 2025 14:23:17 GMT+0300",
    "guest@asoceity:~$ ",
  ];

  const commands = {
    "sudo root": {
      output: [
        "Password: ********",
        "",
        "🔐 Authenticating...",
        "🔍 Verifying credentials...",
        "✅ Authentication successful",
        "🚀 Escalating privileges...",
        "╔══════════════════════════════════════════════════════════════╗",
        "║                    ADMIN ACCESS GRANTED                      ║",
        "║                  Welcome to ASOCEITY System                  ║",
        "╚══════════════════════════════════════════════════════════════╝",
        "",
        "✅ Loading portfolio interface...",
        "✅ Initializing project showcase...",
        "✅ Preparing CV viewer...",
        "✅ Setting up contact forms...",
        "✅ Configuring secure communication...",
        "",
        "🎯 Administrative access confirmed!",
        "📊 Redirecting to main portfolio in 3 seconds...",
        "",
        "🚀 Thank you for using ASOCEITY Terminal Interface!",
        "",
        "Connection will be transferred to secure portfolio...",
      ],
      action: "redirect",
    },
  };

  // Typing effect for intro
  useEffect(() => {
    if (isIntroComplete) return;

    if (currentLine >= introLines.length) {
      setIsIntroComplete(true);
      setIsTerminalActive(true);
      return;
    }

    const currentLineText = introLines[currentLine];

    if (currentChar < currentLineText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => {
          const newText = [...prev];
          if (!newText[currentLine]) newText[currentLine] = "";
          newText[currentLine] = currentLineText.slice(0, currentChar + 1);
          return newText;
        });
        setCurrentChar((prev) => prev + 1);
      }, Math.random() * 5 + 5);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(
        () => {
          setCurrentLine((prev) => prev + 1);
          setCurrentChar(0);
        },
        currentLineText === "" ? 10 : 100
      );

      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, isIntroComplete]);

  // Cursor blinking effect
  useEffect(() => {
    const timer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedText, commandHistory]);

  // Focus management for hidden input
  useEffect(() => {
    if (isTerminalActive && hiddenInputRef.current && !isRedirecting) {
      hiddenInputRef.current.focus();
    }
  }, [isTerminalActive, isRedirecting]);
  // Handle redirecting to portfolio
  useEffect(() => {
    if (!isRedirecting) return;

    const lines = commands["sudo root"].output;

    if (currentRedirectLine >= lines.length) {
      setTimeout(() => {
        setShowPortfolio(true);
      }, 1000); // Trigger redirect
      return;
    }

    const currentLineText = lines[currentRedirectLine];

    if (currentRedirectChar < currentLineText.length) {
      const timer = setTimeout(() => {
        setRedirectOutput((prev) => {
          const newOutput = [...prev];
          if (!newOutput[currentRedirectLine])
            newOutput[currentRedirectLine] = "";
          newOutput[currentRedirectLine] = currentLineText.slice(
            0,
            currentRedirectChar + 1
          );
          return newOutput;
        });
        setCurrentRedirectChar((prev) => prev + 1);
      }, Math.random() * 20 + 5);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(
        () => {
          setCurrentRedirectLine((prev) => prev + 1);
          setCurrentRedirectChar(0);
        },
        currentLineText === "" ? 50 : 100
      );

      return () => clearTimeout(timer);
    }
  }, [currentRedirectLine, currentRedirectChar, isRedirecting]);

  // Click to focus terminal
  const handleTerminalClick = () => {
    if (hiddenInputRef.current && !isRedirecting) {
      hiddenInputRef.current.focus();
    }
  };

  const handleCommand = (command) => {
    const cmd = command.toLowerCase().trim();
    const newHistory = [
      ...commandHistory,
      { input: command, timestamp: new Date() },
    ];

    if (commands[cmd]) {
      const commandData = commands[cmd];

      if (commandData.action === "redirect") {
        setIsRedirecting(true);
        setShowInput(false);
        setCommandHistory([
          {
            input: command,
            timestamp: new Date(),
          },
        ]);
        setDisplayedText([]); // Clear intro text
        setRedirectOutput([]); // Reset animated sudo output
        setCurrentRedirectLine(0);
        setCurrentRedirectChar(0);
        return;
      }

      if (commandData.action === "clear") {
        setCommandHistory([]);
        return;
      }

      newHistory.push({ output: commandData.output, timestamp: new Date() });
      setCommandHistory(newHistory);
    } else {
      setCommandHistory([
        ...newHistory,
        {
          output: [`bash: ${command}: command not found`, ""],
          timestamp: new Date(),
        },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (userInput.trim()) {
        handleCommand(userInput);
      } else {
        // Empty command, just add a new prompt
        setCommandHistory((prev) => [
          ...prev,
          { input: "", timestamp: new Date() },
        ]);
      }
      setUserInput("");
    }
  };

  return (
    <div className="terminal-container" onClick={handleTerminalClick}>
      {!showPortfolio ? (
        <>
          <div className="terminal-bg-effects">
            <div className="terminal-bg-gradient-1"></div>
            <div className="terminal-bg-gradient-2"></div>
          </div>

          {/* Animated scanning lines */}
          <div className="terminal-scanning-lines">
            <div className="scan-line-top"></div>
            <div className="scan-line-bottom"></div>
            <div className="scan-line-vertical"></div>
          </div>

          <div className="terminal-content">
            <div ref={terminalRef} className="terminal-output">
              {/* Intro Text */}
              {displayedText.map((line, index) => (
                <div key={index} className="terminal-text-intro">
                  {line}
                  {index === currentLine && !isIntroComplete && showCursor && (
                    <span className="cursor-intro">█</span>
                  )}
                </div>
              ))}

              {/* Command History (for pre-sudo commands) */}
              {commandHistory.map((entry, index) => (
                <div key={index} className="command-history-item">
                  {entry.input !== undefined && (
                    <div className="command-line">
                      <span className="command-prompt">guest@asoceity:~$ </span>
                      <span className="command-input-text">{entry.input}</span>
                    </div>
                  )}
                  {entry.output &&
                    entry.output.map((line, lineIndex) => (
                      <div
                        key={lineIndex}
                        className={
                          entry.isRedirect
                            ? "terminal-text-redirect"
                            : "terminal-text-output"
                        }
                      >
                        {line}
                      </div>
                    ))}
                </div>
              ))}
              {/* Typing Effect for 'sudo root' output */}
              {isRedirecting &&
                redirectOutput.map((line, index) => (
                  <div key={index} className="terminal-text-redirect">
                    {line}
                    {index === currentRedirectLine && showCursor && (
                      <span className="cursor-intro">█</span>
                    )}
                  </div>
                ))}
              {/* Active Input Line */}
              {isTerminalActive && showInput && (
                <div className="command-line">
                  <span className="command-prompt">guest@asoceity:~$ </span>
                  <span className="command-input-text">{userInput}</span>
                  {showCursor && <span className="terminal-cursor">█</span>}
                </div>
              )}
            </div>

            {/* Hidden input field */}
            <input
              ref={hiddenInputRef}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              onBlur={() => {
                if (isTerminalActive && !isRedirecting) {
                  setTimeout(() => hiddenInputRef.current?.focus(), 100);
                }
              }}
              className="hidden-input"
              autoComplete="off"
              spellCheck="false"
            />

            {/* Footer hint */}
            {!isRedirecting && (
              <div className="terminal-footer">
                💡 Ready to explore? Type "sudo root" to access full portfolio
              </div>
            )}
          </div>
        </>
      ) : (
        <Portfolio />
      )}
    </div>
  );
};

export default Home;
