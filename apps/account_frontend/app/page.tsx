import homeStyles from './page.module.css';

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
            <button className={homeStyles.menuButton}>Accounts</button>
            <button className={homeStyles.menuButton}>Actions</button>
            <button className={homeStyles.menuButton}>Billing Information</button>
            <button className={homeStyles.menuButton}>Users</button>
            <button className={homeStyles.menuButton}>Transactions</button>
          </div>
          <div className={homeStyles.pageCard}>
            testing here.
          </div>    
        </div>
      </div>
    </div>      
  );
}
