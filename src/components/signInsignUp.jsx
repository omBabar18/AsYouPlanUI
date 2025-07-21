import React, { useState } from "react";
import styles from "../assets/styles/SignInSignUp.module.css";
import SignIn from "./SignInForm";
import SignUp from "./SignUpForm";

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContent}>
        {isSignUp ? (
          <SignUp switchToSignIn={() => setIsSignUp(false)} />
        ) : (
          <SignIn switchToSignUp={() => setIsSignUp(true)} />
        )}
      </div>
    </div>
  );
};

export default SignInSignUp;
       
