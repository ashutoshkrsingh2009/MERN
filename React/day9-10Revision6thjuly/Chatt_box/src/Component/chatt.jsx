function Chatt() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#f4f4f4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "650px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: "#0f172a",
            color: "#fff",
            padding: "15px",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          ASAN CHATT BOX
        </div>

        {/* Chat Messages */}
        <div
          style={{
            flex: 1,
            padding: "15px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            backgroundColor: "#e5ddd5",
          }}
        >
          {/* Left Message */}
          <div
            style={{
              alignSelf: "flex-start",
              backgroundColor: "#ffffff",
              padding: "10px 15px",
              borderRadius: "15px",
              maxWidth: "70%",
            }}
          >
            Hello 👋
          </div>

          {/* Right Message */}
          <div
            style={{
              alignSelf: "flex-end",
              backgroundColor: "#dcf8c6",
              padding: "10px 15px",
              borderRadius: "15px",
              maxWidth: "70%",
            }}
          >
            Hi! How are you?
          </div>

          {/* Left Message */}
          <div
            style={{
              alignSelf: "flex-start",
              backgroundColor: "#ffffff",
              padding: "10px 15px",
              borderRadius: "15px",
              maxWidth: "70%",
            }}
          >
            I'm fine. What about you?
          </div>

          {/* Right Message */}
          <div
            style={{
              alignSelf: "flex-end",
              backgroundColor: "#dcf8c6",
              padding: "10px 15px",
              borderRadius: "15px",
              maxWidth: "70%",
            }}
          >
            Doing great! 😊
          </div>
        </div>

        {/* Input Section */}
        <div
          style={{
            display: "flex",
            padding: "10px",
            borderTop: "1px solid #ddd",
            backgroundColor: "#fff",
          }}
        >
          <input
            type="text"
            placeholder="Type a message..."
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "16px",
            }}
          />

          <button
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "20px",
              backgroundColor: "#0f172a",
              color: "#fff",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatt;