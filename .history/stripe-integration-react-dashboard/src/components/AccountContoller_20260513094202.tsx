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

const imageLayouts = {
  left: "flex-row",
  right: "flex-row-reverse",
  top: "flex-col",
  bottom: "flex-col-reverse",
};

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
  const imageStyle = {
    width,
    height,
  };

  if (profileUrl && isLogIn) {
    return (
      <img
        src={profileUrl}
        alt="profile"
        className="rounded-full object-cover border border-white"
        style={imageStyle}
      />
    );
  }

  return (
    <div
      className="rounded-full border border-white flex items-center justify-center"
      style={imageStyle}
    >
      <FaUser color="white" size={22} />
    </div>
  );
}

function UserName({
  userName,
  textColor,
}: {
  userName?: string;
  textColor: string;
}) {
  if (!userName) return null;

  return (
    <p className="text-sm font-medium" style={{ color: textColor }}>
      {userName}
    </p>
  );
}

function LoginButton({ color }: { color: string }) {
  return (
    <button
      className="flex items-center gap-2 px-3 py-1 rounded-md border border-white"
      style={{ color }}
    >
      <FaSignInAlt />
      Login
    </button>
  );
}

function LogoutButton({ color }: { color: string }) {
  return (
    <button
      className="flex items-center gap-2 px-3 py-1 rounded-md border border-white"
      style={{ color }}
    >
      <FaSignOutAlt />
      Logout
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
  const containerClass = direction === "row" ? "flex-row" : "flex-col";

  const imageLayout = imageLayouts[imagePosition] || "flex-col";

  return (
    <div
      className={`flex ${containerClass} items-center gap-3`}
      style={{ background: backgroundColor }}
    >
      <div className={`flex ${imageLayout} items-center gap-2`}>
        <ProfileImage
          profileUrl={profileUrl}
          isLogIn={isLogIn}
          width={width}
          height={height}
        />

        <UserName userName={userName} textColor={textColor} />
      </div>

      <div className="flex gap-2">
        {isLogIn
          ? logoutButton && <LogoutButton color={buttonColor} />
          : loginButton && <LoginButton color={buttonColor} />}
      </div>
    </div>
  );
}
