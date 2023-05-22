import { FC } from 'react';
import './styles.scss';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        &copy; {new Date().getFullYear()} | <span>All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
