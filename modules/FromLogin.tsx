import * as React from "react";

export interface IFormLoginProps {}

export default function FormLogin(props: IFormLoginProps) {
  const [isShowPass, setIsShowPass] = React.useState(false);
  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    console.log(e);
  };
  const handleShowPass = () => {
    setIsShowPass(!isShowPass);
  };
  return (
    <form className="form-sign-in" onSubmit={(e) => handleSignIn(e)}>
      <label htmlFor="username">
        <input type="text" placeholder="Username" name="username" required />
      </label>
      <label htmlFor="password">
        <input
          type={isShowPass ? "text" : "password"}
          placeholder="Password"
          name="password"
          required
        />
        <span className="show-pass" onClick={handleShowPass}></span>
      </label>
      <div className="form-sub flex justify-content-between">
        <label className="check-round">
          <input type="checkbox" />
          <span className="checkmark gray"></span>Remember me
        </label>
        <a href=".">Lost your password?</a>
      </div>
      <div className="form-action">
        <button className=" btn btn-login-submit" type="submit">
          {" "}
          Sign in
        </button>
        <button className="btn btn-login-create" type="button">
          {" "}
          Create An Account
        </button>
      </div>
      <div className="form-action-sub">
        <button className="btn btn-login-face">
          <span>
            <svg
              aria-hidden="true"
              role="img"
              focusable="false"
              width="24"
              height="24"
              viewBox="0 0 7 12"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.27972 1.99219H6.30215V0.084375C6.12609 0.0585937 5.51942 0 4.81306 0C3.33882 0 2.32912 0.99375 2.32912 2.81953V4.5H0.702148V6.63281H2.32912V12H4.32306V6.63281H5.88427L6.13245 4.5H4.32306V3.03047C4.32306 2.41406 4.47791 1.99219 5.27972 1.99219Z"></path>
            </svg>
          </span>{" "}
          <span className="flex justify-content-center align-items-center flex-1">
            Continue with Facebook
          </span>
        </button>
        <button className="btn btn-login-google">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M11.988,14.28 L11.988,9.816 L23.22,9.816 C23.388,10.572 23.52,11.28 23.52,12.276 C23.52,19.128 18.924,24 12,24 C5.376,24 -9.47390314e-15,18.624 -9.47390314e-15,12 C-9.47390314e-15,5.376 5.376,0 12,0 C15.24,0 17.952,1.188 20.028,3.132 L16.62,6.444 C15.756,5.628 14.244,4.668 12,4.668 C8.028,4.668 4.788,7.968 4.788,12.012 C4.788,16.056 8.028,19.356 12,19.356 C16.596,19.356 18.288,16.176 18.6,14.292 L11.988,14.292 L11.988,14.28 Z"
              ></path>
            </svg>
          </span>{" "}
          <span className="flex justify-content-center align-items-center flex-1">
            Continue with Google
          </span>
        </button>
      </div>
    </form>
  );
}
