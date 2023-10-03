import homeStyles from '../page.module.css';
import Link from 'next/link';
import LeftSideMenuCard from '../menu/leftsideMenu';
import Constants from '../../utils/constants';

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
            <h3>Users</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet efficitur metus. Proin risus ipsum, sollicitudin ut porta non, fermentum ac ipsum. Cras sed purus sed tortor euismod condimentum. Nulla facilisi. Mauris ac nibh in nibh viverra consequat. Vivamus mollis massa a tempus laoreet. Integer lobortis vehicula pellentesque. Etiam quis consequat massa, eget vestibulum risus. In at nibh et mi feugiat vulputate sed vel ante. Aliquam luctus eros elit, efficitur sagittis velit consectetur ac. Vestibulum sed scelerisque purus, quis rhoncus sem. Aenean pretium venenatis odio pharetra scelerisque. Morbi nec justo ex. Vestibulum mattis ipsum turpis, luctus cursus arcu aliquam in.
            </p>
            
            <p className={homeStyles.paragraph}>

              Suspendisse potenti. Suspendisse enim risus, venenatis id feugiat eget, tempor et nisl. Donec ultricies magna ipsum, a lobortis enim consectetur id. Quisque eu leo sit amet sem mollis finibus. Nullam finibus finibus commodo. Donec malesuada enim sed sollicitudin egestas. Cras vel odio vitae diam congue laoreet. Curabitur eu dolor a purus mollis imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In pharetra, nibh sit amet scelerisque iaculis, felis odio suscipit metus, ac pellentesque felis metus bibendum tellus. In commodo, libero vel fringilla dictum, ligula orci posuere quam, vitae dapibus ex urna ac mi.
            </p>  
            
            <p className={homeStyles.paragraph}>

              Pellentesque pharetra neque non ex lacinia, eu sodales leo faucibus. Sed fringilla, ipsum sed egestas feugiat, neque sapien luctus nulla, vel rhoncus augue neque scelerisque eros. Pellentesque lobortis nisl at mi blandit efficitur. Vestibulum vulputate libero et nisl suscipit, at vehicula elit tempor. Quisque elit nibh, suscipit ut elementum eu, elementum sit amet lacus. Mauris ultrices enim eget egestas cursus. Nunc nec fringilla elit. Cras tristique pellentesque elit, eget porta orci malesuada ullamcorper. Nulla fringilla convallis ex eu venenatis. Sed et aliquam felis. Pellentesque mauris elit, varius quis tellus ut, sollicitudin pulvinar ante. Aenean venenatis est sed tristique semper. Praesent gravida a sem et congue. Vestibulum et ligula ac velit malesuada laoreet quis luctus orci. Morbi imperdiet elementum diam, ultricies ullamcorper tellus consectetur eu.
            </p>
            <p className={homeStyles.paragraph}>


              Ut elementum sem a tortor congue, et ultricies arcu tincidunt. Ut aliquam nunc sit amet tincidunt pretium. Morbi in sem sollicitudin, blandit dui in, tristique felis. Nunc in lobortis erat, nec interdum dolor. Donec pretium, elit nec fermentum aliquam, neque felis vulputate nunc, non ultricies nulla nunc commodo odio. Cras sed sapien porttitor, facilisis diam in, mollis massa. Proin malesuada rhoncus fermentum. Duis faucibus ornare augue.
            </p>
          </div>    
        </div>
      </div>
    </div>
  );
}
