import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from '../app/styles/home.module.css';

const BoxLayout = ()=> {
    return(
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
          className={styles.imageBack}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Your work people are here
            </Typography>
            <Typography variant="h5" align="center" color="black" paragraph>
                We're serving up trusted insights and anonymous conversation,
                so you'll have the goods you need to succeed.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button className={styles.mainButton}>Main call to action</Button>
              <Button variant="outlined" className={styles.secondButton}>Secondary action</Button>
            </Stack>
          </Container>
        </Box>
    );
}

export default BoxLayout;