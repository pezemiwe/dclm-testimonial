import { IconButton, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Facebook from '@/assets/svgs/facebook.svg';
import Instagram from '@/assets/svgs/instagram.svg';
import Twitter from '@/assets/svgs/twitter.svg';
import LinkedIn from '@/assets/svgs/linkedin.svg';
import { useRouter } from 'next/navigation';
export const Footer: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  const socials = [
    {
      link: 'https://facebook.com',
      icon: Facebook,
    },
    {
      link: 'https://instagram.com',
      icon: Instagram,
    },
    {
      link: 'https://twitter.com',
      icon: Twitter,
    },
    {
      link: 'https://linkedin.com',
      icon: LinkedIn,
    },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        backgroundColor: theme.palette.commonColors.white,
      }}
    >
      <Box
        sx={{
          maxWidth: {
            lg: '1216px',
          },
          padding: {
            xs: '0 16px',
            lg: '0',
          },
          width: '100%',
          margin: {
            xs: '48px auto',
            lg: '64px auto',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: {
              xs: 'flex-start',
              md: 'center',
            },
            justifyContent: {
              xs: 'flex-start',
              md: 'space-between',
            },
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            marginBottom: {
              xs: '27px',
              lg: '64px',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: {
                xs: '340px',
                md: '383px',
              },
            }}
          >
            <Typography
              sx={{
                color: theme.palette.commonColors.boldBlue,
                fontFamily: 'Quicksand',
                fontSize: '28px',
                fontWeight: '600',
                lineHeight: '34px',
                marginBottom: '12px',
              }}
            >
              Your Spiritual Welfare is our concern!
            </Typography>
            <Typography
              sx={{
                color: theme.palette.commonColors.gray100,
                fontFamily: 'Quicksand',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '23px',
              }}
            >
              Let us help you on your spiritual journey as you walk with God.
            </Typography>
          </Box>
          <Button
            sx={{
              backgroundColor: theme.palette.commonColors.lightBlue,
              color: theme.palette.commonColors.white,
              fontFamily: 'QuickSand',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '6px',
              textTransform: 'capitalize',
              height: '55px',
              width: '132px',
              marginTop: {
                xs: '32px',
                md: '0',
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
        <Divider
          sx={{
            width: '100%',
            marginBottom: '31px',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              lg: 'row',
            },
            justifyContent: {
              xs: 'flex-start',
              lg: 'space-between',
            },
            alignItems: {
              xs: 'flex-start',
              lg: 'center',
            },
          }}
        >
          <Box>
            {socials.map((Social, index) => (
              <IconButton
                key={index}
                sx={{
                  marginRight: '24px',
                  padding: '0',
                }}
              >
                <Social.icon
                  onClick={() => {
                    router.push(Social.link);
                  }}
                  style={{
                    height: '24px',
                    width: '24px',
                    cursor: 'pointer',
                  }}
                />
              </IconButton>
            ))}
          </Box>
          <Typography
            sx={{
              color: theme.palette.commonColors.gray300,
              fontFamily: 'Quicksand',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px',
              marginTop: {
                xs: '24px',
                lg: '0',
              },
            }}
          >
            © 2024 Deeper Christian Life Ministry
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
