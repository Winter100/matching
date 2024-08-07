import { Outlet } from 'react-router-dom';
import styles from './RootLayout.module.css';
import Header from './common/Header';
import Footer from './common/Footer';
import MainSection from './common/MainSection';

const RootLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <MainSection>
        <Outlet />
      </MainSection>
      <Footer />
    </div>
  );
};

export default RootLayout;
