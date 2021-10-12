import { Box, Slider, Typography } from '@material-ui/core';
import styles from './style';
import { useState } from 'react';

const AdjustementTab = () => {
  const cls = styles();
  const adjustementList: any[] = [
    { label: 'Luminosity', name: 'lumunosity', value: 0 },
    { label: 'Contrast', name: 'contrast', value: 0 },
    { label: 'Saturation', name: 'saturation', value: 0 },
    { label: 'Hue', name: 'hue', value: 0 },
    { label: 'Blurry', name: 'blurry', value: 0 },
    { label: 'X ray', name: 'x-ray', value: 0 },
  ];
  const [adjustement, setAdjustement] = useState(adjustementList);

  const handleChange = (index: number) => (e: React.ChangeEvent<any>, value: number | number[]) => {
    const temp = [...adjustement];
    temp[index].value = value;
    setAdjustement(temp);
  };

  return (
    <Box>
      <Typography variant="body2" gutterBottom>
        Add an adjustement
      </Typography>
      <Box>
        <Box>
          {adjustement.map(({ label, name, value }, index: number) => {
            return (
              <Box className={cls.adjustement} key={`adjustement-${label}`}>
                <Typography variant="body2">{label}</Typography>
                <Slider
                  min={-255}
                  max={255}
                  value={value}
                  onChange={handleChange(index)}
                  name={name}
                  className={cls.slider}
                  track={false}
                  aria-label={name}
                />
                <Typography variant="body2">{value}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default AdjustementTab;
