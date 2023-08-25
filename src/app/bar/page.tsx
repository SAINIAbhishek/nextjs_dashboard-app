'use client';

import { Box } from '@mui/material';
import Header from '@/components/header';
import BarChart from '@/components/bar-chart';
import { MOCK_BAR_DATA } from '@/data/bar';

export default function Bar() {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart data={MOCK_BAR_DATA} />
      </Box>
    </Box>
  );
}
