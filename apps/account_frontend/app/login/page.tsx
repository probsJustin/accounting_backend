import homeStyles from '../page.module.css';
import Link from 'next/link';
import LeftSideMenuCard from '../menu/leftsideMenu';
import Constants from '../../utils/constants';
import MainLoginFields from './mainLoginFields'
export default function Index() { 
  const constants = new Constants();

  return (
    <div className={homeStyles.fullCard}>
      <div className={homeStyles.header}>
        <h1 className={homeStyles.h1}>{constants.WEBSITE_NAME}</h1>
      </div>
      <div className={homeStyles.page}>
        <div className={homeStyles.wrapper}>
        <LeftSideMenuCard />
          <div className={homeStyles.pageCard}>
            <h3>Login</h3>
            <MainLoginFields />
          </div>    
        </div>
      </div>
    </div>
  );
}
