import { FC, useEffect, useState } from 'react';
import './styles.scss';
import axios from 'axios';
import { common } from '@mui/material/colors';

interface Commit {
  commit: {
    committer: {
      date: Date
    };
  };
}

const Footer: FC = () => {
  const [dateOfLastCommit, setDateOfLastCommit] = useState<Date>();

  useEffect(() => {
    axios
    .get(
      `https://api.github.com/repos/pandouby/pandouby.github.io/commits`,
    )
    .then((res) => {
      setDateOfLastCommit(new Date(res.data[0].commit.committer.date));
    });
  }, [])

  console.log(dateOfLastCommit);
  

  return (
    <footer className="footer">
      <div className="footer-content">
        &copy; {new Date().getFullYear()} | All rights reserved
        <br />
        <span>Updated {dateOfLastCommit?.getDate()}</span>
      </div>
    </footer>
  );
};

export default Footer;
