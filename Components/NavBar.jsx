import styles from '../app/styles/navBar.module.css';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

const NavBar =  ()=> {
    return(
        <AppBar
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h5" color="#061F49" noWrap sx={{ flexGrow: 1 }}>
            Job<span className={styles.waveText}>Wave</span>
          </Typography>
          <nav className={styles.features}>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Jobs
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Companies
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }} className={styles.loginButton}>
            <LoginIcon/>Login
          </Button>
        </Toolbar>
      </AppBar>
    );
}

export default NavBar;