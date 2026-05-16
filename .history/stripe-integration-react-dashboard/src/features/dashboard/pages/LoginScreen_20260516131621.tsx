import React, { useState } from "react";
import { useTheme } from "../../../theme/useTheme";

export default function LoginScreen() {
  const { theme } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    setError(null);

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (email === "test@test.com" && password === "123") {
      setError(null);
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
        color: theme.colors.text,
      }}
    >
      {/* 🌊 TOP STYLISH LINES */}
      <div className="top-lines" />

      {/* LOGIN CARD */}
      <div className="relative z-10 w-[92%] max-w-md p-8 rounded-2xl">
        {/* TITLE */}
        <h2
          className="text-center text-2xl font-semibold mb-6"
          style={{ color: "#ffffff" }}
        >
          Welcome Back
        </h2>

        {/* INPUTS */}
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl outline-none"
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
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
              backgroundColor: "rgba(255,255,255,0.06)",
              color: "#fff",
            }}
          />
        </div>

        {/* ERROR */}
        {error && (
          <div className="text-red-400 text-sm mt-3 text-center">{error}</div>
        )}

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full mt-6 p-3 rounded-xl font-semibold transition-all hover:opacity-80"
          style={{
            backgroundColor: "#ffffff",
            color: "#111827",
          }}
        >
          Login
        </button>
      </div>

      {/* 🌊 TOP LINES STYLE */}
      <style>{`
        .top-lines {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image: linear-gradient(
              rgba(255,255,255,0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.04) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
          transform: rotate(15deg);
          animation: floatLines 25s linear infinite;
          opacity: 0.5;
        }

        @keyframes floatLines {
          from {
            transform: translate(0, 0) rotate(15deg);
          }
          to {
            transform: translate(-60px, -60px) rotate(15deg);
          }
        }
      `}</style>
    </div>
  );
}
