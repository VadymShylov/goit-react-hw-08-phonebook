import { NavLink, useLocation } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <section className={s.NavSection}>
      <NavLink to="register" className={s.NavLink} state={location}>
        Registration
      </NavLink>
      <NavLink to="login" className={s.NavLink} state={location}>
        Sign in
      </NavLink>
    </section>
  );
};

export default Navigation;
