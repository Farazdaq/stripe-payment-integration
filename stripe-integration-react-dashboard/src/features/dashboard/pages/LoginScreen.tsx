import  { useState } from "react";
import { useTheme } from "../../../theme/useTheme";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
  const { theme } = useTheme();
  const navigate = useNavigate();

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
      // ✅ SUCCESS → GO TO DASHBOARD
      navigate("/dashboard");
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
      {/* 🌊 CURVED BACKGROUND LINES */}
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

      {/* 🌊 BACKGROUND */}
      <style>{`
        .curved-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: radial-gradient(
              circle at 20% 20%,
              rgba(255,255,255,0.05),
              transparent 40%
            ),
            radial-gradient(
              circle at 80% 40%,
              rgba(255,255,255,0.04),
              transparent 45%
            ),
            radial-gradient(
              circle at 40% 80%,
              rgba(255,255,255,0.03),
              transparent 50%
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
          background: repeating-radial-gradient(
            circle,
            rgba(255,255,255,0.04) 0px,
            rgba(255,255,255,0.04) 1px,
            transparent 2px,
            transparent 80px
          );
          animation: moveCurves 25s linear infinite;
          opacity: 0.4;
        }

        .curved-bg::after {
          transform: rotate(25deg);
          opacity: 0.25;
        }

        @keyframes moveCurves {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(-80px, -80px);
          }
        }
      `}</style>
    </div>
  );
}
