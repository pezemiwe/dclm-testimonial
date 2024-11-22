'use client';

import {
  HeroSection,
  MobileNav,
  Navbar,
  HomeStats,
  OngoingEvents,
  Footer,
  Testimonial,
} from '@/components';
import Box from '@mui/material/Box';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const pathname = usePathname();
  const isActive = (link: string) => {
    return pathname.includes(link);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar open={toggleDrawer(true)} />
      <HeroSection />
      <HomeStats />
      <OngoingEvents />
      <Testimonial />
      <Footer />
      <MobileNav open={open} isActive={isActive} close={toggleDrawer(false)} />
    </Box>
  );
}
