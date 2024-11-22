'use client';
import { ROUTES } from '@/utils/constants';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/material';

const NotFound: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push(ROUTES.home);
  };
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: '30px',
            sm: '40px',
            md: '70px',
            lg: '100px',
          },
          fontWeight: 700,
          textAlign: 'center',
          color: theme.palette.commonColors.gray100,
        }}
        gutterBottom
      >
        404 - Page Not Found
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: '12px',
            sm: '14px',
            md: '16px',
            lg: '24px',
          },
          width: {
            xs: '70%',
            md: '50%',
          },
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '40px',
          color: theme.palette.commonColors.gray700,
        }}
        gutterBottom
      >
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </Typography>
      <Button
        onClick={handleClick}
        size='large'
        variant='contained'
        sx={{
          backgroundColor: theme.palette.commonColors.boldBlue,
          color: theme.palette.commonColors.white,
        }}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default NotFound;
