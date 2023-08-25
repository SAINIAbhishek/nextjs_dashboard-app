'use client';

import { Box } from '@mui/material';
import Header from '@/components/header';
import PieChart from '@/components/pie-chart';
import { MOCK_PIE_DATA } from '@/data/pie';

export default function Pie() {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart data={MOCK_PIE_DATA} />
      </Box>
    </Box>
  );
}
