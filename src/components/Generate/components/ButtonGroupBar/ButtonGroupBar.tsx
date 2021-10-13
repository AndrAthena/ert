import { AppBar, Button, Toolbar } from '@material-ui/core';
import { Edit, GetApp, Share } from '@material-ui/icons';
import { FC, MouseEvent } from 'react';
import CustomRadio from '../../../Common/CustomRadio';
import Feed from '../../../Icons/Feed';
import RefreshSetting from '../../../Icons/RefreshSetting';
import styles from './style';

interface ButtonGroupBarProps {
  action: {
    onShare?: (e: MouseEvent<any>) => void;
    onRename?: (e: MouseEvent<any>) => void;
    onDownload?: (e: MouseEvent<any>) => void;
    onGenerateFeed?: (e: MouseEvent<any>) => void;
    onStore?: (e: MouseEvent<any>) => void;
    onGenerateAdsCreative?: (e: MouseEvent<any>) => void;
  };
}

const ButtonGroupBar: FC<ButtonGroupBarProps> = ({ action }) => {
  const cls = styles();
  const { onShare, onRename, onDownload, onGenerateFeed, onStore, onGenerateAdsCreative } = action;

  return (
    <AppBar position="sticky" color="transparent" elevation={0} component="div">
      <Toolbar className={cls.buttonGroupBar}>
        <CustomRadio type="checkbox" label="5 selected" />
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          startIcon={<Share />}
          onClick={onShare}
        >
          Share
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          startIcon={<Edit />}
          onClick={onRename}
        >
          Rename
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          startIcon={<GetApp />}
          onClick={onDownload}
        >
          Download
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          startIcon={<Feed />}
          onClick={onGenerateFeed}
        >
          Generate new feed
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          startIcon={<RefreshSetting />}
          onClick={onStore}
        >
          Store in scac file
        </Button>
        <Button variant="contained" color="secondary" size="small" onClick={onGenerateAdsCreative}>
          Generate Ads creative
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ButtonGroupBar;
