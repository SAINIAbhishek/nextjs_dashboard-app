import * as React from 'react';
import { Typography, useTheme } from '@mui/material';
import { tokens } from '@/styles/theme';
import { MenuItem } from 'react-pro-sidebar';
import Link from 'next/link';

type Props = {
  title: string;
  to: string;
  icon: React.ReactElement;
  selected: string;
  setSelected: (value: string) => void;
};

export function Item({ title, to, icon, selected, setSelected }: Props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}>
      <Typography>{title}</Typography>
      <Link href={to} />
    </MenuItem>
  );
}
