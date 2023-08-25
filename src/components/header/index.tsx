import { tokens } from '@/styles/theme';
import { Box, Typography, useTheme } from '@mui/material';

type Props = {
  title: string;
  subtitle: string;
};

export default function Header({ title, subtitle }: Props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: '0 0 5px 0' }}>
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
}
