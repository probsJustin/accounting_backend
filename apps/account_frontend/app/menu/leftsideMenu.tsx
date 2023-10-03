"use client";

import homeStyles from '../page.module.css';
import Link from 'next/link';
import { usePathname } from "next/navigation";



export default function LeftSideMenuCard() {
    const pathname = usePathname();
    console.log(pathname);

  return (
    <div className={homeStyles.menuCard}>
        <Link 
            href="/accounts"
            className={pathname === "/accounts" ? `${homeStyles.selectedButton} ${homeStyles.menuButton}` : homeStyles.menuButton}
        >
            Accounts
        </Link>
        <Link 
            href="/actions"
            className={pathname === "/actions" ? `${homeStyles.selectedButton} ${homeStyles.menuButton}` : homeStyles.menuButton}
        >
            Actions
        </Link>
        <Link 
            href="/billingInfo"
            className={pathname === "/billingInfo" ? `${homeStyles.selectedButton} ${homeStyles.menuButton}` : homeStyles.menuButton}
        >
            Billing Information
        </Link>
        <Link 
            href="/users"
            className={pathname === "/users" ? `${homeStyles.selectedButton} ${homeStyles.menuButton}` : homeStyles.menuButton}
        >
            Users
        </Link>
        <Link 
            href="/transactions"
            className={pathname === "/transactions" ? `${homeStyles.selectedButton} ${homeStyles.menuButton}` : homeStyles.menuButton}
        >
            Transactions
        </Link>
        <Link 
            href="/login"
            className={pathname === "/login" ? `${homeStyles.selectedButton} ${homeStyles.menuButton}` : homeStyles.menuButton}
        >
            Login/Logout
        </Link>
    </div>
  );
}
