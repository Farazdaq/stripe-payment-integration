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
      {/* 🌊 CLEAR CURVED BACKGROUND */}
      <div className="curved-bg" />

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

      {/* 🌊 STRONG CURVED LINES STYLE */}
      <style>{`
        .curved-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: radial-gradient(
              circle at 20% 20%,
              rgba(255,255,255,0.10),
              transparent 45%
            ),
            radial-gradient(
              circle at 80% 40%,
              rgba(255,255,255,0.08),
              transparent 50%
            ),
            radial-gradient(
              circle at 40% 80%,
              rgba(255,255,255,0.06),
              transparent 55%
            );
        }

        .curved-bg::before,
        .curved-bg::after {
          content: "";
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;

          /* 🔥 stronger + clearer lines */
          background: repeating-radial-gradient(
            circle,
            rgba(255,255,255,0.10) 0px,
            rgba(255,255,255,0.10) 1.5px,
            transparent 2px,
            transparent 70px
          );

          animation: moveCurves 18s linear infinite;
        }

        .curved-bg::after {
          transform: rotate(25deg);
          opacity: 0.7;
          background: repeating-radial-gradient(
            circle,
            rgba(255,255,255,0.08) 0px,
            rgba(255,255,255,0.08) 2px,
            transparent 3px,
            transparent 90px
          );
        }

        @keyframes moveCurves {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(-60px, -60px);
          }
        }
      `}</style>
    </div>
  );
}
