import homeStyles from './page.module.css';
import { Link } from 'react-router-dom';

// ...



export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={homeStyles.fullCard}>
      <div className={homeStyles.header}>
        <h1 className={homeStyles.h1}>Accounting Backend</h1>
      </div>
      <div className={homeStyles.page}>
        <div className={homeStyles.wrapper}>
          <div className={homeStyles.menuCard}>
            <Link to="/desired-route" className={homeStyles.menuButton}>Accounts</Link>
            <Link to="/desired-route" className={homeStyles.menuButton}>Actions</Link>
            <Link to="/desired-route" className={homeStyles.menuButton}>Billing Information</Link>
            <Link to="/desired-route" className={homeStyles.menuButton}>Users</Link>
            <Link to="/desired-route" className={homeStyles.menuButton}>Transactions</Link>
          </div>
          <div className={homeStyles.pageCard}>
            testing here.
          </div>    
        </div>
      </div>
    </div>      
  );
}
