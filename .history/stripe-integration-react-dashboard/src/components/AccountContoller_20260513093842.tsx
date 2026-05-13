import { FaUser, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";

type AccountControllerProps = {
  width?: string;
  height?: string;
  profileUrl?: string;
  isLogIn: boolean;
  userName?: string;
  logoutButton?: boolean;
  loginButton?: boolean;

  // layout controls
  direction?: "row" | "column";
  imagePosition?: "left" | "right" | "top" | "bottom";

  // colors
  textColor?: string;
  buttonColor?: string;
  backgroundColor?: string;
};

export default function AccountController({
  width = "60px",
  height = "60px",
  profileUrl,
  isLogIn,
  userName,
  logoutButton = true,
  loginButton = true,
  direction = "column",
  imagePosition = "top",
  textColor = "#FFFFFF",
  buttonColor = "#FFFFFF",
  backgroundColor = "transparent",
}: AccountControllerProps) {
  const isRow = imagePosition === "left" || imagePosition === "right";

  return (
    <div
      className={`flex ${
        direction === "row" ? "flex-row" : "flex-col"
      } items-center gap-3`}
      style={{ background: backgroundColor }}
    >
      {/* Profile */}
      <div
        className={`flex ${
          isRow
            ? imagePosition === "right"
              ? "flex-row-reverse"
              : "flex-row"
            : imagePosition === "bottom"
              ? "flex-col-reverse"
              : "flex-col"
        } items-center gap-2`}
      >
        {/* Profile Image / Icon */}
        {profileUrl && isLogIn ? (
          <img
            src={profileUrl}
            alt="profile"
            className="rounded-full object-cover border border-white"
            style={{
              width,
              height,
            }}
          />
        ) : (
          <div
            className="rounded-full border border-white flex items-center justify-center"
            style={{
              width,
              height,
            }}
          >
            <FaUser color="white" size={22} />
          </div>
        )}

        {/* Username */}
        {userName && (
          <p className="text-sm font-medium" style={{ color: textColor }}>
            {userName}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        {isLogIn && logoutButton && (
          <button
            className="flex items-center gap-2 px-3 py-1 rounded-md border border-white"
            style={{ color: buttonColor }}
          >
            <FaSignOutAlt />
            Logout
          </button>
        )}

        {!isLogIn && loginButton && (
          <button
            className="flex items-center gap-2 px-3 py-1 rounded-md border border-white"
            style={{ color: buttonColor }}
          >
            <FaSignInAlt />
            Login
          </button>
        )}
      </div>
    </div>
  );
}
