import { Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
export const HomeStats: React.FC = () => {
  const theme = useTheme();
  const stats = [
    {
      title: 'Nations',
      value: '180+',
    },
    {
      title: 'Conversions',
      value: '600,000+',
    },
    {
      title: 'Healing & Miracles',
      value: '200,000+',
    },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: {
          xs: 'auto',
          md: '216px',
        },
        backgroundColor: theme.palette.commonColors.lightBlue,
        color: theme.palette.commonColors.white,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          maxWidth: {
            xs: '100%',
            lg: '1146px',
          },
          margin: '0 auto',
          padding: {
            xs: '0',
            md: '0 16px',
            lg: '0',
          },

          marginTop: {
            xs: '59px',
            md: '0px',
          },
          marginBottom: {
            xs: '60px',
            md: '0px',
          },
        }}
      >
        {stats.map((stat, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom:
                index === 2
                  ? '0'
                  : {
                      xs: '49px',
                      md: '0',
                    },
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontSize: {
                  xs: '40px',
                  md: '60px',
                },
                fontWeight: '400',
                marginBottom: '8px',
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontSize: {
                  xs: '20px',
                  md: '24px',
                },
                fontWeight: '400',
              }}
            >
              {stat.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
