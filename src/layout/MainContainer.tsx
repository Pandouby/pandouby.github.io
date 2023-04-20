import { FC, ReactNode } from 'react';
import Footer from './Footer';
import './styles.scss';

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <div className="main-container">
      {children}
      <Footer />
    </div>
  );
};

export default MainContainer;
