import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import styles from '../app/styles/home.module.css';

const HomeFeatures = ()=> {
    return(
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
        <Container maxWidth="sm">
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Get ahead with JobWave
            </Typography>
            <Typography align="center" color="black" paragraph>
                We're serving up trusted insights and anonymous conversation,
                so you'll have the goods you need to succeed.
            </Typography>
            <Stack
              sx={{ pt: 0 }}
              direction="row"
              spacing={5}
              justifyContent="center"
            >
                <Stack sx={{ pt: 4 }}
                        direction="column"
                        spacing={2}
                        alignItems="center">
                    <LibraryBooksIcon color="black" sx={{ fontSize: 50 }} className={styles.featuresIcon}/>
                    <Typography color="black" align="center">
                        Find and apply to jobs
                    </Typography>
                </Stack>
                <Stack sx={{ pt: 4 }}
                        direction="column"
                        spacing={2}
                        alignItems="center">
                    <Diversity3Icon color="black" sx={{ fontSize: 50 }} className={styles.featuresIcon}/>
                    <Typography color="black" align="center">
                        Find new employees
                    </Typography>
                </Stack>
                <Stack sx={{ pt: 4 }}
                        direction="column"
                        spacing={2}
                        alignItems="center">
                    <MeetingRoomIcon color="black" sx={{ fontSize: 50 }} className={styles.featuresIcon}/>
                    <Typography color="black" align="center">
                        Search company reviews
                    </Typography>
                </Stack>
            </Stack>
          </Container>
          </Box>
    );

}
export default HomeFeatures;