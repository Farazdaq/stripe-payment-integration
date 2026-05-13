import { FaUser, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";

type AccountControllerProps = {
  width?: string;
  height?: string;
  profileUrl?: string;
  isLogIn: boolean;
  userName?: string;
  logoutButton?: boolean;
  loginButton?: boolean;

  direction?: "row" | "column";
  imagePosition?: "left" | "right" | "top" | "bottom";

  textColor?: string;
  buttonColor?: string;
  backgroundColor?: string;
};

function getImageLayout(position: string) {
  const layouts = {
    left: "flex-row",
    right: "flex-row-reverse",
    top: "flex-col",
    bottom: "flex-col-reverse",
  };

  return layouts[position as keyof typeof layouts] || "flex-col";
}

function ProfileImage({
  profileUrl,
  isLogIn,
  width,
  height,
}: {
  profileUrl?: string;
  isLogIn: boolean;
  width: string;
  height: string;
}) {
  if (profileUrl && isLogIn) {
    return (
      <img
        src={profileUrl}
        alt="profile"
        className="rounded-full object-cover border border-white"
        style={{ width, height }}
      />
    );
  }

  return (
    <div
      className="rounded-full border border-white flex items-center justify-center"
      style={{ width, height }}
    >
      <FaUser color="white" size={22} />
    </div>
  );
}

function ActionButton({
  type,
  color,
}: {
  type: "login" | "logout";
  color: string;
}) {
  const isLogin = type === "login";

  return (
    <button
      className="flex items-center gap-2 px-3 py-1 rounded-md border border-white"
      style={{ color }}
    >
      {isLogin ? <FaSignInAlt /> : <FaSignOutAlt />}
      {isLogin ? "Login" : "Logout"}
    </button>
  );
}

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
  return (
    <div
      className={`flex ${
        direction === "row" ? "flex-row" : "flex-col"
      } items-center gap-3`}
      style={{ background: backgroundColor }}
    >
      <div
        className={`flex ${getImageLayout(imagePosition)} items-center gap-2`}
      >
        <ProfileImage
          profileUrl={profileUrl}
          isLogIn={isLogIn}
          width={width}
          height={height}
        />

        {userName && (
          <p className="text-sm font-medium" style={{ color: textColor }}>
            {userName}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        {isLogIn && logoutButton && (
          <ActionButton type="logout" color={buttonColor} />
        )}

        {!isLogIn && loginButton && (
          <ActionButton type="login" color={buttonColor} />
        )}
      </div>
    </div>
  );
}
