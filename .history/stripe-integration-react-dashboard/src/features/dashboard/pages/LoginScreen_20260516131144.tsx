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
      // 👉 here you would navigate to dashboard
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
      {/* 🌫️ Animated fading lines background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="fading-lines"></div>
      </div>

      {/* LOGIN CARD */}
      <div
        className="relative z-10 w-[90%] max-w-md p-6 rounded-lg backdrop-blur-md"
        style={{
          border: `1px solid ${theme.colors.borderColor}`,
          backgroundColor: theme.colors.containerCopBackgroundColor,
        }}
      >
        <h2 className="text-xl font-semibold text-center mb-6">Welcome Back</h2>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 rounded outline-none"
          style={{
            border: `1px solid ${theme.colors.borderColor}`,
            backgroundColor: "transparent",
            color: theme.colors.text,
          }}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-3 rounded outline-none"
          style={{
            border: `1px solid ${theme.colors.borderColor}`,
            backgroundColor: "transparent",
            color: theme.colors.text,
          }}
        />

        {/* ERROR */}
        {error && (
          <div className="text-red-500 text-sm mb-3 font-medium">{error}</div>
        )}

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full p-3 rounded font-semibold transition-all hover:opacity-80"
          style={{
            backgroundColor: theme.colors.text,
            color: theme.colors.containerCopBackgroundColor,
          }}
        >
          Login
        </button>
      </div>

      {/* 🌊 CSS FADING LINES */}
      <style>{`
        .fading-lines {
          position: absolute;
          width: 200%;
          height: 200%;
          background-image: linear-gradient(
              rgba(255,255,255,0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.03) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
          animation: moveLines 20s linear infinite;
          opacity: 0.4;
        }

        @keyframes moveLines {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(-40px, -40px);
          }
        }
      `}</style>
    </div>
  );
}
