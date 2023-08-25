'use client';

import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '@/styles/theme';
import Header from '@/components/header';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import StatBox from '@/components/stat-box';
import LineChart from '@/components/line-chart';
import { MOCK_LINE_DATA } from '@/data/line';
import { MOCK_TRANSACTIONS_DATA } from '@/data/transactions';
import ProgressCircle from '@/components/progress-circle';
import BarChart from '@/components/bar-chart';
import { MOCK_BAR_DATA } from '@/data/bar';
import GeographyChart from '@/components/geography-chart';
import { MOCK_GEOGRAPHY_DATA } from '@/data/geography';
import { MOCK_GEO_FEATURES_DATA } from '@/data/geo-features';

export default function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}>
            <DownloadOutlinedIcon sx={{ mr: '10px' }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px">
        {/* ROW 1 */}
        <Box
          sx={{
            gridColumn: 'span 3',
            backgroundColor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            backgroundColor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            backgroundColor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            backgroundColor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          sx={{
            gridColumn: 'span 8',
            gridRow: 'span 2',
            backgroundColor: colors.primary[400],
          }}>
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center">
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}>
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: '26px', color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart data={MOCK_LINE_DATA} isDashboard={true} />
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: 'span 4',
            gridRow: 'span 2',
            backgroundColor: colors.primary[400],
            overflow: 'auto',
          }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: `4px solid ${colors.primary[500]}`,
              colors: colors.grey[100],
            }}>
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {MOCK_TRANSACTIONS_DATA.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px">
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600">
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                sx={{
                  borderRadius: '4px',
                  backgroundColor: colors.greenAccent[500],
                  padding: '5px 10px',
                }}>
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          sx={{
            gridColumn: 'span 4',
            gridRow: 'span 2',
            backgroundColor: colors.primary[400],
            padding: '30px',
          }}>
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px">
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: '15px' }}>
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: 'span 4',
            gridRow: 'span 2',
            backgroundColor: colors.primary[400],
          }}>
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: '30px 30px 0 30px' }}>
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart data={MOCK_BAR_DATA} isDashboard={true} />
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: 'span 4',
            gridRow: 'span 2',
            backgroundColor: colors.primary[400],
            padding: '30px',
          }}>
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: '15px' }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart
              data={MOCK_GEOGRAPHY_DATA}
              geoFeatures={MOCK_GEO_FEATURES_DATA.features}
              isDashboard={true}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
