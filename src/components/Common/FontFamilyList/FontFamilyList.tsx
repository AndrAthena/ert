import { Box, CircularProgress, List, MenuItem, ListItemText, Typography } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import { useState, FC } from 'react';
import getFontList from '../../../utils/FontManager/google-fonts/fontList';
import { Font } from './../../../utils/FontManager/types';

interface FontFamilyListProps {
  toShow?: number;
  label?: string;
  fontFamily: string;
  onSelectFont: (event: React.MouseEvent<{}>) => void;
}

interface FontListProps {
  activeFont: string;
  family: string;
  label: string;
  onSelectFont: (event: React.MouseEvent<{}>) => void;
}
const FontList = ({ activeFont, family, label, onSelectFont }: FontListProps) => (
  <MenuItem key={`font-family-${family}`} value={family} onClick={onSelectFont} dense button>
    <ListItemText
      primary={
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography style={{ fontFamily: family }}>
            {family}
            <Typography
              component="span"
              style={{ fontFamily: family, marginLeft: '0.5rem' }}
              color="textSecondary"
            >
              {label}
            </Typography>
          </Typography>
          {activeFont === family && <Check color="primary" />}
        </Box>
      }
    />
  </MenuItem>
);

const FontFamilyList: FC<FontFamilyListProps> = ({
  toShow = 50,
  label = 'AaBbCc',
  fontFamily,
  onSelectFont,
}) => {
  const [fonts, setFonts] = useState<any[]>([]);
  const googleFonts = () => {
    getFontList('AIzaSyBbyTpY3YLBOeyORjYfG1PWAeOPnVc0at0')
      .then((fonts) => {
        let _fonts: any = [];
        fonts.slice(0, toShow).forEach(({ family }: Font) => {
          _fonts.push(family);
        });
        setFonts(_fonts);
      })
      .catch((error) => error);
  };

  googleFonts();

  return (
    <Box>
      <List>
        {fonts.length ? (
          fonts.map((font: string) => (
            <FontList
              activeFont={fontFamily}
              family={font}
              label={label}
              onSelectFont={onSelectFont}
            />
          ))
        ) : (
          <Box textAlign="center">
            <CircularProgress size={30} />
          </Box>
        )}
      </List>
    </Box>
  );
};

export default FontFamilyList;
