import React, { useState } from 'react';
import styles from '../assets/styles/SignInSignUp.module.css';

const SignUpForm = ({ switchToSignIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // TODO: Add sign-up logic
    console.log('Signing up with:', name, email, password);
  };

  return (
    <form onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
      <input
        type="text"
        className={styles.input}
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
      <button type="submit" className={styles.button}>Sign Up</button>
      <p className={styles.switchText}>
        Already have an account?{" "}
        <span className={styles.switchLink} onClick={switchToSignIn}>
          Sign In
        </span>
      </p>
    </form>
  );
};

export default SignUpForm;
