import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import ArrowRight from '@/assets/svgs/right-arrow.svg';
import ArrowLeft from '@/assets/svgs/left-arrow.svg';
import ArrowRightSmall from '@/assets/svgs/right-arrow-small.svg';
import ArrowLeftSmall from '@/assets/svgs/left-arrow-small.svg';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LeftWhite from '@/assets/images/left-white.png';
import leftBlue from '@/assets/images/left-blue.png';
import CenterWhite from '@/assets/images/center-white.png';
import CenterBlue from '@/assets/images/center-blue.png';
import RightWhite from '@/assets/images/right-white.png';
import RightBlue from '@/assets/images/right-blue.png';
import Avatar from '@mui/material/Avatar';
import Testimonial1 from '@/assets/images/testimonial1.jpg';
import Testimonial2 from '@/assets/images/testimonial2.jpg';
import Testimonial3 from '@/assets/images/testimonial3.jpg';
import QuoteSmall from '@/assets/svgs/quote-small.svg';
import QuoteBig from '@/assets/svgs/quote-big.svg';

export const Testimonial: React.FC = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isLaptop = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <Box
      sx={{
        height: '678px',
        width: '100%',
        backgroundColor: theme.palette.commonColors.gray400,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0 auto',
            marginTop: '45px',
            width: '100%',
            padding: {
              xs: '0 16px',
              lg: '0',
            },
            maxWidth: {
              xs: 'auto',
              lg: '780px',
            },
          }}
        >
          <IconButton
            sx={{
              padding: '0',
            }}
          >
            {isLaptop ? <ArrowLeft /> : <ArrowLeftSmall />}
          </IconButton>
          <Typography
            sx={{
              color: theme.palette.commonColors.gray800,
              fontFamily: 'Quicksand',
              fontSize: {
                xs: '20px',
                lg: '36px',
              },
              fontWeight: '700',
            }}
          >
            What the Testifiers says
          </Typography>
          <IconButton
            sx={{
              padding: '0',
            }}
          >
            {isLaptop ? <ArrowRight /> : <ArrowRightSmall />}
          </IconButton>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '18px',
            alignItems: 'center',
          }}
        >
          {Array(5)
            .fill('')
            .map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: index === 0 ? '16px' : '8px',
                  height: index === 0 ? '16px' : '8px',
                  borderRadius: '50%',
                  backgroundColor:
                    index === 0
                      ? theme.palette.commonColors.lightBlue
                      : theme.palette.commonColors.gray,
                  marginRight: index === 4 ? '0' : '15px',
                }}
              ></Box>
            ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginTop: '58px',
            alignItems: 'flex-end',
            maxWidth: {
              xs: '100%',
              lg: '1156px',
            },
            width: '100%',
            justifyContent: {
              xs: 'center',
              lg: 'space-between',
            },
          }}
        >
          <Box
            sx={{
              display: isTablet ? 'none' : 'flex',
              flexDirection: 'column',
              width: '343px',
              height: '377px',
              position: 'relative',
            }}
          >
            <img
              src={leftBlue.src}
              alt='left-blue'
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '5px',
              }}
            />
            <img
              src={LeftWhite.src}
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
              }}
              alt='left-white'
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                right: '-20px',
              }}
            >
              <Avatar
                alt='Testimonial1'
                src={Testimonial1.src}
                sx={{ width: '76px', height: '76px' }}
              />
              <Typography
                sx={{
                  fontWeight: '700',
                  fontFamily: 'Quicksand',
                  fontSize: '18px',
                  color: theme.palette.commonColors.gray700,
                  marginTop: '11px',
                  marginBottom: '3px',
                }}
              >
                Healed of Sharp Pain
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Quicksand',
                  fontWeight: '400',
                  fontSize: '12px',
                  color: theme.palette.commonColors.gray,
                  marginBottom: '3px',
                }}
              >
                Adedigba Omolaso
              </Typography>
              <QuoteSmall />
              <Typography
                sx={{
                  fontFamily: 'Lato',
                  fontSize: '10px',
                  fontWeight: '400',
                  color: theme.palette.commonColors.gray,
                  textAlign: 'center',
                  lineHeight: '12px',
                  marginBottom: '25px',
                  textWrap: 'wrap',
                  width: '230px',
                }}
              >
                On the 1st of April, she experienced a sharp pain after trying
                to put a baby down. She got home and felt the pain again.
                Someone researched online and told her that this kind of pain is
                associated with kidney disease. She ignored it and believed in
                God for her healing. During the Easter Retreat, after the
                message on Jesus, Our Passover, The man of God prayed
                specifically for people experiencing internal problems. She
                received her healing and was made whole. The pain has not
                returned since then. Praise the Lord!
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: {
                xs: '334px',
                lg: '415px',
              },
              height: {
                xs: '348px',
                lg: '433px',
              },
              position: 'relative',
            }}
          >
            <img
              src={CenterBlue.src}
              alt='left-blue'
              style={{
                position: 'absolute',
                top: isTablet ? '5px' : '0',
                right: isTablet ? '-40px' : '0',
              }}
            />
            <img
              src={CenterWhite.src}
              style={{
                position: 'absolute',
                bottom: isTablet ? '-90px' : '0px',
                right: isTablet ? '-40px' : '0',
              }}
              alt='left-white'
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                right: '0px',
                top: '-30px',
              }}
            >
              <Avatar
                alt='Testimonial1'
                src={Testimonial2.src}
                sx={{ width: '102px', height: '102px' }}
              />
              <Typography
                sx={{
                  fontWeight: '700',
                  fontFamily: 'Quicksand',
                  fontSize: '24px',
                  color: theme.palette.commonColors.gray700,
                  marginTop: '19px',
                  marginBottom: '6px',
                }}
              >
                Healed of Sharp Pain
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Quicksand',
                  fontWeight: '400',
                  fontSize: '18px',
                  color: theme.palette.commonColors.gray,
                  marginBottom: '6px',
                }}
              >
                Adedigba Omolaso
              </Typography>
              <QuoteBig />
              <Typography
                sx={{
                  fontFamily: 'Lato',
                  fontSize: '14px',
                  fontWeight: '400',
                  color: theme.palette.commonColors.gray,
                  textAlign: 'center',
                  lineHeight: '17.5px',
                  marginBottom: '25px',
                  textWrap: 'wrap',
                  width: '346px',
                }}
              >
                On the 1st of April, she experienced a sharp pain after trying
                to put a baby down. She got home and felt the pain again.
                Someone researched online and told her that this kind of pain is
                associated with kidney disease. She ignored it and believed in
                God for her healing. During the Easter Retreat, after the
                message on Jesus, Our Passover, The man of God prayed
                specifically for people experiencing internal problems. She
                received her healing and was made whole. The pain has not
                returned since then. Praise the Lord!
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: isTablet ? 'none' : 'flex',
              flexDirection: 'column',
              width: '343px',
              height: '377px',
              position: 'relative',
            }}
          >
            <img
              src={RightBlue.src}
              alt='left-blue'
              style={{
                position: 'absolute',
                top: '-14px',
                right: '-35px',
              }}
            />
            <img
              src={RightWhite.src}
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
              }}
              alt='left-white'
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                right: '-20px',
                top: '0px',
              }}
            >
              <Avatar
                alt='Testimonial1'
                src={Testimonial3.src}
                sx={{ width: '76px', height: '76px' }}
              />
              <Typography
                sx={{
                  fontWeight: '700',
                  fontFamily: 'Quicksand',
                  fontSize: '18px',
                  color: theme.palette.commonColors.gray700,
                  marginTop: '11px',
                  marginBottom: '3px',
                }}
              >
                Healed of Sharp Pain
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Quicksand',
                  fontWeight: '400',
                  fontSize: '12px',
                  color: theme.palette.commonColors.gray,
                  marginBottom: '3px',
                }}
              >
                Adedigba Omolaso
              </Typography>
              <QuoteSmall />
              <Typography
                sx={{
                  fontFamily: 'Lato',
                  fontSize: '10px',
                  fontWeight: '400',
                  color: theme.palette.commonColors.gray,
                  textAlign: 'center',
                  lineHeight: '12px',
                  marginBottom: '25px',
                  textWrap: 'wrap',
                  width: '230px',
                }}
              >
                On the 1st of April, she experienced a sharp pain after trying
                to put a baby down. She got home and felt the pain again.
                Someone researched online and told her that this kind of pain is
                associated with kidney disease. She ignored it and believed in
                God for her healing. During the Easter Retreat, after the
                message on Jesus, Our Passover, The man of God prayed
                specifically for people experiencing internal problems. She
                received her healing and was made whole. The pain has not
                returned since then. Praise the Lord!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
