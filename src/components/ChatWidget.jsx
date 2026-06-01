import { useState, useRef, useEffect } from "react";

const SESSION_ID = "trippy-" + Math.random().toString(36).slice(2);

const SUGGESTIONS = [
  "Weather in Rishikesh?",
  "Places to visit in Rishikesh?",
  "Show my booking TRP001",
  "Packages for Uttarakhand?",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hey! I'm Trippy AI 🌍 Ask me about weather, places to visit, packages, or your bookings!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput("");

    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setLoading(true);

    try {
      const res = await fetch("http://13.127.212.231:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg, session_id: SESSION_ID }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Sorry, I couldn't connect. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      
      <button
        onClick={() => setIsOpen((o) => !o)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "#111",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
        aria-label="Open Trippy AI chat"
      >
        <span style={{ fontSize: "22px" }}>{isOpen ? "✕" : "💬"}</span>
      </button>

      
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "88px",
            right: "24px",
            width: "340px",
            maxHeight: "520px",
            background: "#fff",
            borderRadius: "16px",
            border: "0.5px solid #e0e0e0",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#111",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                flexShrink: 0,
              }}
            >
              🤖
            </div>
            <div>
              <div
                style={{ color: "#fff", fontWeight: 500, fontSize: "14px" }}
              >
                Trippy AI
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "11px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#4ade80",
                    display: "inline-block",
                  }}
                />
                Online · Travel assistant
              </div>
            </div>
          </div>

          
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              background: "#f9f9f9",
              maxHeight: "280px",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  maxWidth: "85%",
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  background: m.role === "user" ? "#111" : "#fff",
                  color: m.role === "user" ? "#fff" : "#222",
                  padding: "9px 12px",
                  borderRadius:
                    m.role === "user"
                      ? "12px 3px 12px 12px"
                      : "3px 12px 12px 12px",
                  fontSize: "13px",
                  lineHeight: "1.5",
                  border:
                    m.role === "bot" ? "0.5px solid #e5e5e5" : "none",
                  whiteSpace: "pre-wrap",
                }}
              >
                {m.text}
              </div>
            ))}

           
            {loading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  background: "#fff",
                  border: "0.5px solid #e5e5e5",
                  borderRadius: "3px 12px 12px 12px",
                  padding: "10px 14px",
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "#aaa",
                      display: "inline-block",
                      animation: `bounce 1.2s infinite ${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          <div
            style={{
              display: "flex",
              gap: "6px",
              padding: "8px 12px",
              overflowX: "auto",
              background: "#f9f9f9",
              borderTop: "0.5px solid #eee",
            }}
          >
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                style={{
                  whiteSpace: "nowrap",
                  fontSize: "11px",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  border: "0.5px solid #ccc",
                  background: "#fff",
                  color: "#333",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                {s}
              </button>
            ))}
          </div>

          
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 12px",
              borderTop: "0.5px solid #eee",
              background: "#fff",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask anything about your trip..."
              style={{
                flex: 1,
                border: "0.5px solid #ddd",
                borderRadius: "20px",
                padding: "8px 14px",
                fontSize: "13px",
                outline: "none",
                background: "#f9f9f9",
                color: "#222",
              }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading}
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                background: loading ? "#888" : "#111",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ color: "#fff", fontSize: "15px" }}>➤</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}