import React, { useState } from 'react';
import styles from '../assets/styles/SignInSignUp.module.css';

const SignInForm = ({ switchToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // TODO: Add sign-in logic
    console.log('Signing in with:', email, password);
  };

  return (
    <form onSubmit={handleSignIn}>
      <h2>Sign In</h2>
      <input
        type="email"
        className={styles.input}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className={styles.input}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className={styles.button}>Sign In</button>
      <p className={styles.switchText}>
        Don't have an account?{" "}
        <span className={styles.switchLink} onClick={switchToSignUp}>
          Sign Up
        </span>
      </p>
    </form>
  );
};

export default SignInForm;
