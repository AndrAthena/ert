import { Box, IconButton, MenuItem, Slider, TextField, Typography } from '@material-ui/core';
import FontPicker from 'font-picker-react';
import { FC, useState } from 'react';
import {
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatItalic,
  FormatLineSpacing,
  FormatUnderlined,
} from '@material-ui/icons';
import styles from './style';
import { Font } from '../../../utils/FontManager';

interface TextFormatProps {
  font: string;
  handleChangeFont: (font: Font) => void;
}

const TextFormat: FC<TextFormatProps> = ({ font, handleChangeFont }) => {
  const cls = styles();
  const [size, setSize] = useState<number | number[]>(50);
  const handleResize = (_: React.ChangeEvent<{}>, value: number | number[]) => {
    if (size < 0 || size > 100) return;
    else setSize(value);
  };

  return (
    <Box className={cls.txtFormat} ml={2}>
      <FontPicker
        apiKey="AIzaSyBbyTpY3YLBOeyORjYfG1PWAeOPnVc0at0"
        activeFontFamily={font}
        onChange={handleChangeFont as any}
        sort="popularity"
      />
      <Box ml={2}>
        <TextField variant="outlined" value={16} select style={{ marginBottom: 0 }}>
          <MenuItem value={16}>16</MenuItem>
        </TextField>
      </Box>

      <Box ml={2} display="flex" alignItems="center">
        <IconButton size="small">
          <FormatBold />
        </IconButton>
        <IconButton size="small">
          <FormatItalic />
        </IconButton>
        <IconButton size="small">
          <FormatUnderlined />
        </IconButton>
      </Box>

      <Box ml={2} display="flex" alignItems="center">
        <IconButton size="small">
          <FormatAlignLeft />
        </IconButton>
        <IconButton size="small">
          <FormatAlignCenter />
        </IconButton>
        <IconButton size="small">
          <FormatAlignRight />
        </IconButton>
        <IconButton size="small">
          <FormatAlignJustify />
        </IconButton>
        <IconButton size="small">
          <FormatLineSpacing />
        </IconButton>
      </Box>

      <Box ml="auto" display="flex" alignItems="center">
        <Slider
          value={typeof size === 'number' ? size : 0}
          onChange={handleResize}
          className={cls.slider}
        />
        <Typography variant="body2">{size} %</Typography>
      </Box>
    </Box>
  );
};

export default TextFormat;
