import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GckPic from '@/assets/images/gck_pic.png';
import GckPicSmall from '@/assets/images/gck_pic_small.png';
import Splash from '@/assets/images/splash_bg.png';
import SplashSmall from '@/assets/images/splash_bg_small.png';
import { useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import PlayIcon from '@/assets/svgs/play.svg';

export const OngoingEvents: React.FC = () => {
  const theme = useTheme();
  const details = [
    {
      title: 'Venue: ',
      description: 'Kumasi, Ghana',
    },
    {
      title: 'Date: ',
      description: 'July 25th - July 30th, 2024',
    },
    {
      title: 'Time: ',
      description: '16:00 GMT daily',
    },
  ];
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isLaptop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Box
      sx={{
        maxWidth: {
          lg: '1440px',
        },
        margin: '0 auto',
        height: {
          xs: 'auto',
          md: '774px',
        },
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundImage: {
          xs: `url(${SplashSmall.src})`,
          lg: `url(${Splash.src})`,
        },
        backgroundSize: {
          xs: 'contain',
          lg: '819px 629px',
        },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: {
          xs: 'center 118px',
          lg: '101% 82px',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: {
            xs: '100%',
            lg: '1285px',
          },
          height: '100%',
          padding: {
            xs: '0 16px',
            lg: '0',
          },
          margin: '0 auto',
          width: '100%',
        }}
      >
        <Divider
          orientation='horizontal'
          aria-hidden='true'
          sx={{
            width: '100%',
            marginTop: {
              xs: '32px',
              lg: '53px',
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Quicksand',
              fontWeight: '700',
              fontSize: {
                xs: '24px',
                lg: '36px',
              },
              color: theme.palette.commonColors.gray800,
              margin: {
                xs: '0 14px',
                lg: '0 28px',
              },
              width: {
                xs: '96px',
                lg: 'auto',
              },
              textAlign: 'center',
              textWrap: {
                xs: 'wrap',
                md: 'nowrap',
              },
            }}
          >
            Ongoing Events
          </Typography>
        </Divider>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column-reverse',
              lg: 'row',
            },
            justifyContent: 'space-between',
            marginTop: '40px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              marginLeft: {
                xs: '0px',
                lg: '36px',
              },
            }}
          >
            <Button
              variant='outlined'
              sx={{
                height: '36px',
                width: '135px',
                color: theme.palette.commonColors.lightBlue,
                borderColor: theme.palette.commonColors.lightBlue,
                borderWidth: '1.5px',
                borderRadius: '6px',
                fontFamily: 'Quicksand',
                textTransform: 'capitalize',
                fontWeight: 600,
                fontSize: '14px',
                marginTop: {
                  xs: '32.4px',
                  md: '0',
                },
              }}
            >
              GCK in Kumasi
            </Button>
            <Typography
              sx={{
                fontFamily: 'Quicksand',
                fontSize: {
                  xs: '36px',
                  md: '40px',
                },
                fontWeight: '500',
                marginTop: '24px',
                marginBottom: '24px',
                width: {
                  xs: '310px',
                  lg: '500px',
                },
                color: theme.palette.commonColors.gray800,
              }}
            >
              Full Salvation and Healing Through Christ
            </Typography>
            {details.map((detail, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: 'Quicksand',
                  fontSize: '20px',
                  fontWeight: '500',
                  marginBottom: '8px',
                  lineHeight: '44px',
                  width: {
                    xs: '310px',
                    lg: '500px',
                  },
                  color: theme.palette.commonColors.gray800,
                }}
              >
                {detail.title}
                <span
                  style={{
                    fontWeight: '400',
                  }}
                >
                  {detail.description}
                </span>
              </Typography>
            ))}
            <Button
              sx={{
                backgroundColor: theme.palette.commonColors.lightBlue,
                color: theme.palette.commonColors.white,
                fontFamily: 'QuickSand',
                fontSize: '14px',
                fontWeight: '600',
                borderRadius: '6px',
                textTransform: 'capitalize',
                marginTop: '16px',
                width: '140px',
                marginBottom: {
                  xs: '33px',
                  md: '0',
                },
              }}
              endIcon={<PlayIcon />}
            >
              Connect Live
            </Button>
          </Box>
          <img
            src={GckPic.src}
            alt='GCK Pic'
            style={{
              display: isLaptop ? 'block' : 'none',
            }}
          />
          <img
            src={GckPicSmall.src}
            alt='GCK Pic'
            style={{
              display: isTablet ? 'block' : 'none',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
