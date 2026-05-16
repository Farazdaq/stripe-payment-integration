import React, { useState } from "react";
import { useTheme } from "../../../theme/useTheme";

export default function LoginScreen() {
  const { theme } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    setError(null);

    if (email === "test@test.com" && password === "123") {
      alert("Login success ✅");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: theme.colors.containerCopBackgroundColor,
      }}
    >
      {/* 🔵 CIRCULAR BACKGROUND */}
      <div className="circle-bg" />

      {/* LOGIN CARD */}
      <div className="relative z-10 w-[92%] max-w-md p-8">
        <h2 className="text-center text-2xl font-semibold mb-6 text-white">
          Welcome Back
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl outline-none"
            style={{
              backgroundColor: "rgba(255,255,255,0.07)",
              color: "#fff",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl outline-none"
            style={{
              backgroundColor: "rgba(255,255,255,0.07)",
              color: "#fff",
            }}
          />
        </div>

        {error && (
          <div className="text-red-400 text-sm mt-3 text-center">{error}</div>
        )}

        <button
          onClick={handleLogin}
          className="w-full mt-6 p-3 rounded-xl font-semibold"
          style={{
            backgroundColor: "#ffffff",
            color: "#111827",
          }}
        >
          Login
        </button>
      </div>

      {/* 🔵 CIRCULAR GRID BACKGROUND STYLE */}
      <style>{`
        .circle-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: #0b0f1a;
        }

        .circle-bg::before,
        .circle-bg::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%;
          height: 200%;
          transform: translate(-50%, -50%);

          /* 🔵 concentric circles */
          background: repeating-radial-gradient(
            circle,
            rgba(255,255,255,0.10) 0px,
            rgba(255,255,255,0.10) 1px,
            transparent 2px,
            transparent 60px
          );

          animation: rotateCircles 25s linear infinite;
        }

        .circle-bg::after {
          opacity: 0.5;
          background: repeating-radial-gradient(
            circle,
            rgba(255,255,255,0.07) 0px,
            rgba(255,255,255,0.07) 1.5px,
            transparent 3px,
            transparent 80px
          );
          animation-direction: reverse;
        }

        @keyframes rotateCircles {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
