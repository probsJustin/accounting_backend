"use client";

import homeStyles from '../page.module.css';
import React, { useState } from 'react';



export default function LeftSideMenuCard() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Here you can send the username and password to your server, or handle them as you see fit.
        console.log('Username:', username);
        console.log('Password:', password);
        
        // Reset fields after submission (optional)
        setUsername('');
        setPassword('');
    }

  return (
    <div className={homeStyles.loginCard}>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username: "
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password: "
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
    </div>
  );
}
