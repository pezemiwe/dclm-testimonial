import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { ROUTES } from '@/utils/constants';
import CloseIcon from '@/assets/svgs/close.svg';
import { useRouter } from 'next/navigation';

interface MobileNavProps {
  open: boolean;
  isActive: (link: string) => boolean;
  close: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  open,
  isActive,
  close,
}) => {
  const theme = useTheme();
  const router = useRouter();
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
  return (
    <Drawer
      open={open}
      onClose={close}
      anchor='right'
      sx={{
        width: '100%',
      }}
    >
      <Box
        sx={{
          flexDirection: 'column',
          width: '100vw',
          paddingRight: '35px',
          paddingLeft: '16px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <CloseIcon
            style={{
              cursor: 'pointer',
              marginTop: '24px',
              marginBottom: '10px',
            }}
            onClick={close}
          />
        </Box>
        {navLinks.map((link: { name: string; link: string }) => (
          <Typography
            onClick={() => {
              router.push(link.link);
              close();
            }}
            key={link.name}
            sx={{
              color: theme.palette.commonColors.blue,
              backgroundColor: 'transparent',
              textTransform: 'capitalize',
              fontFamily: 'Quicksand',
              fontSize: '16px',
              fontWeight: 600,
              position: 'relative',
              cursor: 'pointer',
              marginBottom: '32px',
              width: 'fit-content',
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
      </Box>
    </Drawer>
  );
};
