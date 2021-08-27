import { makeStyles } from '@material-ui/core';
import bg from '../../../assets/images/ads_bg.svg';

export const cardStl = makeStyles((theme) => ({
  card: ({ color }: any) => ({
    alignSelf: 'flex-start',
    maxWidth: 250,
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(1.5),
    color: color,
    textAlign: 'center',
    borderImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.1 99.8"><path fill="none" stroke="${color}" stroke-dasharray="10" d="M2.9,0.5h94.3c1.3,0,2.4,1.3,2.4,3v92.8c0,1.7-1.1,3-2.4,3H2.9c-1.3,0-2.4-1.3-2.4-3V3.5C0.5,1.8,1.6,0.5,2.9,0.5z"/></svg>') 15 / 10px  repeat`,
  }),
}));

export default makeStyles((theme) => ({
  create_ads: {
    height: '100vh',
    background: `url(${bg}) top right / 60% no-repeat`,
  },
}));
