/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import {
  EnvelopeOpenIcon,
  KeyboardIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Root, TextInput } from "./form";
import { useAuthContext } from "../../service";
import {
  Await,
  Link,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { SCHEMA } from "../../service";
import React from "react";

const RegisterSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(20, { message: "Name must be at most 20 characters long" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(50, { message: "Password must be at most 50 characters long" }),
  email: z.string().email(),
});

const LoginSchema = z.object({
  nameOrEmail: z.string(),
  password: z.string(),
});

const ChangePasswordSchema = z.object({
  oldPassword: z.string(),
  newPassword: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(50, { message: "Password must be at most 50 characters long" }),
});

const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});

function RegisterForm() {
  return (
    <>
      <h1 className="formHeader">Sign-up</h1>
      <Root schema={RegisterSchema} method="POST">
        <TextInput
          name="name"
          label="Username"
          labelAsterisk={true}
          placeholder="Enter username"
          leftSectionInput={<PersonIcon className="TextInputLeftIcon" />}
        />

        <TextInput
          name="password"
          label="Password"
          labelAsterisk={true}
          type="password"
          placeholder="Enter password"
          leftSectionInput={<KeyboardIcon className="TextInputLeftIcon" />}
        />

        <TextInput
          name="email"
          label="Email"
          labelAsterisk={true}
          type="email"
          placeholder="Enter email"
          leftSectionInput={<EnvelopeOpenIcon className="TextInputLeftIcon" />}
        />

        <button type="submit" className="formSubmitButton">
          Submit
        </button>
      </Root>
      <div className="formFooter">
        <div>
          Already have an account? <Link to="/auth">Login</Link>
        </div>
      </div>
    </>
  );
}

function LoginForm() {
  return (
    <div>
      <h1 className="formHeader">Login</h1>
      <Root schema={LoginSchema} method="POST">
        <TextInput
          name="nameOrEmail"
          label="Username or Email"
          labelAsterisk={true}
          placeholder="Enter username or email address"
          leftSectionInput={<PersonIcon className="TextInputLeftIcon" />}
        />

        <TextInput
          name="password"
          label="Password"
          labelAsterisk={true}
          type="password"
          placeholder="Enter password"
          leftSectionInput={<KeyboardIcon className="TextInputLeftIcon" />}
          rightSectionLabel={
            <div className="TextInputLabelRightIcon">
              <Link to="/auth/forgotPassword">Forgot Password?</Link>
            </div>
          }
        />

        <button type="submit" className="formSubmitButton">
          Submit
        </button>
      </Root>
      <div className="formFooter">
        <div>
          Need an account? <Link to="/auth/signup">Sign-up</Link>
        </div>
      </div>
    </div>
  );
}

function ChangePasswordForm() {
  return (
    <div>
      <h1 className="formHeader">Change Password</h1>
      <Root schema={ChangePasswordSchema} method="POST">
        <TextInput
          name="oldPassword"
          label="Old Password"
          type="password"
          labelAsterisk={true}
          placeholder="Enter your old password"
          leftSectionInput={<KeyboardIcon className="TextInputLeftIcon" />}
        />

        <TextInput
          name="newPassword"
          label="New Password"
          labelAsterisk={true}
          type="password"
          placeholder="Enter your new password"
          leftSectionInput={<KeyboardIcon className="TextInputLeftIcon" />}
        />

        <button type="submit" className="formSubmitButton">
          Submit
        </button>
      </Root>
    </div>
  );
}

function ForgotPasswordForm() {
  return (
    <div>
      <h1 className="formHeader">Forgot Password</h1>
      <Root schema={ForgotPasswordSchema} method="POST">
        <TextInput
          name="email"
          label="Email"
          labelAsterisk={true}
          type="email"
          placeholder="Enter your email"
          leftSectionInput={<EnvelopeOpenIcon className="TextInputLeftIcon" />}
        />
        <button type="submit" className="formSubmitButton">
          Submit
        </button>
      </Root>
    </div>
  );
}

const useRequireLoggedIn = (profile?: SCHEMA["User"]) => {
  const navigate = useNavigate();
  const { setUser } = useAuthContext("Auth");
  React.useLayoutEffect(() => {
    if (!profile?.id) {
      navigate("/auth/");
    } else {
      setUser(profile);
    }
  }, [JSON.stringify(profile), navigate, setUser]);
};

const useRequireLoggedOut = () => {
  // Hooks
  const { user } = useAuthContext("LoginPage");
  const navigation = useNavigation();
  const navigate = useNavigate();
  const userId = user ? user.id : "";
  console.log(user);

  // Redirect to profile if logged in
  React.useLayoutEffect(() => {
    if (userId) {
      navigate("/auth/me");
    }
  }, [userId, navigate]);
  return { navigation };
};

function RegisterPage() {
  const { navigation } = useRequireLoggedOut();
  return <>{navigation.state === "idle" && <RegisterForm />}</>;
}

function LoginPage() {
  const { navigation } = useRequireLoggedOut();

  return <>{navigation.state === "idle" && <LoginForm />}</>;
}

function ChangePasswordPage() {
  return <ChangePasswordForm />;
}

function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}

function Profile({ profile }: { profile: SCHEMA["User"] }) {
  useRequireLoggedIn(profile);

  const displayName = profile.name ? profile.name : profile.email;
  return <p>Logged in as {displayName}</p>;
}

function ProfilePage() {
  const result = useLoaderData() as any;
  return (
    <React.Suspense>
      <Await resolve={result.user}>
        {(user: SCHEMA["User"]) => <Profile profile={user} />}
      </Await>
    </React.Suspense>
  );
}

import { Outlet } from "react-router-dom";

function Page() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="p-7 rounded-md flex flex-col bg-white min-w-[500px]  justify-between">
        <Outlet />
      </div>
    </div>
  );
}

export {
  RegisterPage,
  LoginPage,
  ProfilePage,
  ChangePasswordPage,
  ForgotPasswordPage,
  Page,
};
