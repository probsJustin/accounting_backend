import homeStyles from './page.module.css';
import Link from 'next/link';

export default function Index() {
  return (
    <div className={homeStyles.fullCard}>
      <div className={homeStyles.header}>
        <h1 className={homeStyles.h1}>Accounting Backend</h1>
      </div>
      <div className={homeStyles.page}>
        <div className={homeStyles.wrapper}>
          <div className={homeStyles.menuCard}>
            <Link href="/accounts" className={homeStyles.menuButton}>Accounts</Link>
            <Link href="/actions" className={homeStyles.menuButton}>Actions</Link>
            <Link href="/billinginfo" className={homeStyles.menuButton}>Billing Information</Link>
            <Link href="/users" className={homeStyles.menuButton}>Users</Link>
            <Link href="/transactions" className={homeStyles.menuButton}>Transactions</Link>
          </div>
          <div className={homeStyles.pageCard}>
            testing here.
          </div>    
        </div>
      </div>
    </div>
  );
}
