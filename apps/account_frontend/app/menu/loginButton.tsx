import Link from 'next/link';
import homeStyles from '../page.module.css';
import React, { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";

export default function LoginMenuButton() {
  const pathname = usePathname();

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
  const buttonText = isLoggedIn ? 'Logout' : 'Login';
  const routeToLoginLogout = isLoggedIn ? 'logout' : 'login'; 
  return (
    <Link 
      href={`/${routeToLoginLogout}`}
      className={pathname === "/login" ? `${homeStyles.selectedButton} ${homeStyles.loginMenuButton}` : homeStyles.loginMenuButton}
    >
        {buttonText}
    </Link>
  );
}
