// fully manages account login and logout and show profile img
// gives props controlled display of profile img and logout , login button
// also handles user name display conditionally based on login state true or false

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

// map for overall direction arrangement
const directionMap = {
  row: "flex-row",
  column: "flex-col",
};

// for deciding the img position
const imageLayouts = {
  left: "flex-row",
  right: "flex-row-reverse",
  top: "flex-col",
  bottom: "flex-col-reverse",
};

// control profile img visibility based on login state and profile img url
// then show stander icon or img
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
  const imageStyle = { width, height };

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
  if (!userName) {
    return null;
  }

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

function ActionSection({
  isLogIn,
  logoutButton,
  loginButton,
  buttonColor,
}: {
  isLogIn: boolean;
  logoutButton: boolean;
  loginButton: boolean;
  buttonColor: string;
}) {
  if (isLogIn && logoutButton) {
    return <LogoutButton color={buttonColor} />;
  }

  if (!isLogIn && loginButton) {
    return <LoginButton color={buttonColor} />;
  }

  return null;
}

export default function AccountController(props: AccountControllerProps) {
  const {
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
  } = props;

  const containerClass = directionMap[direction];
  const imageLayout = imageLayouts[imagePosition];

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

      <ActionSection
        isLogIn={isLogIn}
        logoutButton={logoutButton}
        loginButton={loginButton}
        buttonColor={buttonColor}
      />
    </div>
  );
}
