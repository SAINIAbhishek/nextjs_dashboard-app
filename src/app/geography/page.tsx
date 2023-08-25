'use client';

import { Box, useTheme } from '@mui/material';
import { tokens } from '@/styles/theme';
import Header from '@/components/header';
import GeographyChart from '@/components/geography-chart';
import { MOCK_GEO_FEATURES_DATA } from '@/data/geo-features';
import { MOCK_GEOGRAPHY_DATA } from '@/data/geography';

export default function Geography() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px">
        <GeographyChart
          geoFeatures={MOCK_GEO_FEATURES_DATA.features}
          data={MOCK_GEOGRAPHY_DATA}
        />
      </Box>
    </Box>
  );
}
