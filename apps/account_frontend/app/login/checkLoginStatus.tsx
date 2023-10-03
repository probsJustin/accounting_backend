import React, { useState, useEffect } from 'react';

function CheckLoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await fetch('/api/check-login'); // Your endpoint to check login status
                const data = await response.json();

                setIsLoggedIn(data.isLoggedIn);
            } catch (error) {
                console.error('Failed to check login status:', error);
            }
        }

        checkLoginStatus();
    }, []);

    if (!isLoggedIn) {
        return <p>You are not logged in. Please log in to continue.</p>;
    }

    return null;
}

export default CheckLoginStatus;
