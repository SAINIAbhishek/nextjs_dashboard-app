'use client';

import { Box } from '@mui/material';
import Header from '@/components/header';
import LineChart from '@/components/line-chart';
import { MOCK_LINE_DATA } from '@/data/line';

export default function Line() {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart data={MOCK_LINE_DATA} />
      </Box>
    </Box>
  );
}
