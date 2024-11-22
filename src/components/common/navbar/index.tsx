import Box from '@mui/material/Box';
import Logo from '@/assets/svgs/logo.svg';
import IconButton from '@mui/material/IconButton';
import { usePathname, useRouter } from 'next/navigation';
import { ROUTES } from '@/utils/constants';
import { useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@/assets/svgs/menu.svg';
import Divider from '@mui/material/Divider';
import React from 'react';

interface NavProps {
  open: () => void;
}

export const Navbar: React.FC<NavProps> = ({ open }) => {
  const router = useRouter();
  const theme = useTheme();
  const navLinks = [
    {
      name: 'Home',
      link: ROUTES.home,
    },
    {
      name: 'Contact Us',
      link: ROUTES.contact,
    },
    {
      name: 'Watch Live',
      link: ROUTES.watch,
    },
    {
      name: 'Testimonies',
      link: ROUTES.testimonies,
    },
  ];

  const pathname = usePathname();
  const isActive = (link: string) => {
    return pathname.includes(link);
  };
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: {
          xs: '56px',
          md: '104px',
        },
        marginTop: {
          xs: '24px',
          md: '0px',
        },
      }}
    >
      <Box
        sx={{
          maxWidth: {
            xs: '92%',
            md: '90%',
            lg: '1146px',
          },
          height: '56px',
          width: '100%',
          justifyContent: 'space-between',
          display: 'flex',
          margin: '0 auto',
          padding: '0',
        }}
      >
        <IconButton
          onClick={() => {
            router.push(ROUTES.home);
          }}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <Logo />
        </IconButton>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            height: '100%',
          }}
        >
          {navLinks.map((link: { name: string; link: string }) => (
            <Typography
              key={link.name}
              onClick={() => {
                router.push(link.link);
              }}
              sx={{
                color: theme.palette.commonColors.blue,
                backgroundColor: 'transparent',
                marginLeft: link.name === 'Home' ? '0' : '40px',
                textTransform: 'capitalize',
                fontFamily: 'Quicksand',
                fontSize: '16px',
                fontWeight: 600,
                position: 'relative',
                cursor: 'pointer',
                '&:hover': {
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: theme.palette.commonColors.blue,
                    transform: 'scaleX(1)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease',
                  },
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: theme.palette.commonColors.blue,
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease',
                },
                '&:focus': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              {link.name}
              {isActive(link.link) && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: theme.palette.commonColors.blue,
                  }}
                />
              )}
            </Typography>
          ))}
          <Divider
            orientation='vertical'
            sx={{
              height: '44px',
              margin: '0 142px',
              display: {
                md: 'none',
                lg: 'block',
              },
            }}
          />
          <Button
            variant='outlined'
            sx={{
              height: '55px',
              width: '95px',
              color: theme.palette.commonColors.lightBlue,
              borderColor: theme.palette.commonColors.lightBlue,
              borderWidth: '1.5px',
              borderRadius: '6px',
              marginLeft: {
                md: '40px',
                lg: '0',
              },
              fontFamily: 'Quicksand',
              textTransform: 'capitalize',
              fontWeight: 600,
              fontSize: '16px',
            }}
          >
            Log In
          </Button>
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton
            aria-label='menu'
            sx={{
              cursor: 'pointer',
            }}
            onClick={open}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
