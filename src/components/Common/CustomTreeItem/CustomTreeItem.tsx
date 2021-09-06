import { Theme, withStyles } from '@material-ui/core';
import { TreeItem, TreeItemProps } from '@material-ui/lab';
import Folder from '../../Icons/Folder';

const _TreeItem = (props: TreeItemProps) => <TreeItem icon={<Folder fontSize="large" color="primary" />} {...props} />;

const CustomTreeItem = withStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(1.5, 0, 1.5, 1.5),
  },
  content: {
    padding: theme.spacing(1),
  },
  iconContainer: {
    width: 'auto',
    marginRight: theme.spacing(1),
    '& svg': {
      fontSize: '2rem',
    },
  },
  label: {
    '&:hover': {
      backgroundColor: 'inherit',
    },
  },
}))(_TreeItem);

export default CustomTreeItem;
