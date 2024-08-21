import { useLocation } from '@reach/router';
import { clsx } from 'clsx';
import dayjs from 'dayjs';
import { Link } from 'gatsby';
import React from 'react';

import { MENU, SITE } from '@/constants/metadata';
import { useTheme } from '@/hooks/useTheme';

import * as styles from './Sidebar.css';

const Sidebar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  return (
    <aside className={styles.root}>
      <div className={styles.topContainer}>
        <Link to="/" className={styles.branding}>
          {SITE.title}
        </Link>
        <hr className={styles.divider} />
        <nav>
          <ul className={styles.navList}>
            {MENU.map(menu => (
              <li
                key={menu.link}
                className={clsx(styles.navItem, pathname === menu.link && styles.navItemActive)}
              >
                <Link to={menu.link} className={styles.navLink}>
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.bottomContainer}>
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === 'light' ? '🌚 Dark' : '🌞 Light'} mode
        </button>
        <p className={styles.license}>
          Copyright © {dayjs().year()} {SITE.title} All rights reserved.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
