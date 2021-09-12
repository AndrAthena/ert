import { MenuItem, TextField, Typography, IconButton, Fade } from '@material-ui/core';
import { Lock, LockOpen } from '@material-ui/icons';
import { FC, useState } from 'react';
import Resize from '../../../Icons/Resize';
import styles from './style';

interface CustomSizeprops {}

const CustomSize: FC<CustomSizeprops> = () => {
  const cls = styles();
  const [lock, setLock] = useState<boolean>(false);
  const handleChangeLock = () => setLock((lock) => !lock);

  return (
    <Fade
      in={true}
      timeout={{
        appear: 500,
        enter: 500,
        exit: 300,
      }}
    >
      <div className={cls.customSize}>
        <Typography variant="h2" color="textPrimary" align="center" gutterBottom>
          Custom size
        </Typography>
        <Typography color="textSecondary" align="center">
          Choose manually the width and height of the ads
        </Typography>
        <div className="my-4">
          <form>
            <TextField type="number" variant="outlined" label="Width" value={0} fullWidth required />
            <TextField type="number" variant="outlined" label="height" value={0} fullWidth required />
            <div className="d-flex align-items-center">
              <TextField variant="outlined" label="Unit" defaultValue="px" select required className="mb-0 mr-2">
                <MenuItem value="px">px</MenuItem>
                <MenuItem value="in">in</MenuItem>
                <MenuItem value="pt">pt</MenuItem>
                <MenuItem value="cm">cm</MenuItem>
                <MenuItem value="mm">mm</MenuItem>
              </TextField>
              <IconButton>
                <Resize color="secondary" fontSize="small" />
              </IconButton>
              <IconButton onClick={handleChangeLock}>{lock ? <Lock color="primary" /> : <LockOpen color="primary" />}</IconButton>
            </div>
          </form>
        </div>
      </div>
    </Fade>
  );
};

export default CustomSize;
