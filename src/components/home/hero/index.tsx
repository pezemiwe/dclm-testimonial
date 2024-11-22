import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Pattern from '@/assets/images/pattern.jpg';
import PatternMobile from '@/assets/images/pattern-small.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TestimonyPics1 from '@/assets/images/testimony-pics1.png';
import TestimonyPics2 from '@/assets/images/testimony-pics2.png';
import TestimonyPics3 from '@/assets/images/testimony-pics3.png';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  const theme = useTheme();
  const pictures = [TestimonyPics1, TestimonyPics2, TestimonyPics3];
  return (
    <Box
      sx={{
        height: {
          xs: 'auto',
          md: '819px',
        },
        marginBottom: '45px',
        marginTop: {
          xs: '6px',
          md: '9px',
        },
        width: '100%',
        backgroundImage: {
          xs: `url(${PatternMobile.src})`,
          md: `url(${Pattern.src})`,
        },
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        zIndex: 99,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            color: theme.palette.commonColors.darkBlue,
            fontFamily: 'QuickSand',
            fontSize: {
              xs: '40px',
              md: '72px',
            },
            fontWeight: '600',
            lineHeight: {
              xs: '50px',
              md: '71px',
            },
            marginTop: {
              xs: '21px',
              md: '79px',
            },
            width: {
              xs: '327px',
              md: '610px',
            },
          }}
        >
          Got a Testimony? Share it with Us
        </Typography>
        <Typography
          sx={{
            fontFamily: 'QuickSand',
            fontSize: {
              xs: '20px',
              md: '28px',
            },
            marginTop: '16px',
            fontWeight: '400',
            lineHeight: {
              xs: '25px',
              md: '37.5px',
            },
            marginBottom: {
              xs: '16px',
              md: '56px',
            },
          }}
        >
          Testify of what God has done for you.
        </Typography>
        <Button
          variant='contained'
          sx={{
            backgroundColor: theme.palette.commonColors.lightBlue,
            color: theme.palette.commonColors.white,
            fontFamily: 'QuickSand',
            fontSize: '16px',
            fontWeight: '600',
            borderRadius: '6px',
            textTransform: 'capitalize',
          }}
        >
          Share Your Testimony
        </Button>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            width: {
              xs: 'calc(100vw - 30px)',
              lg: 'auto',
            },
            marginTop: {
              xs: '35px',
              md: '0px',
            },
          }}
        >
          {pictures.map((picture, index) => (
            <Image key={index} src={picture} alt='testimony-pictures' />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
