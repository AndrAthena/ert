import { withStyles } from '@material-ui/core';
import { TreeView, TreeViewProps } from '@material-ui/lab';
import { FC } from 'react';
import CustomTreeItem from '../CustomTreeItem';

export interface RenderTreeProps {
  id: string;
  name: string;
  children?: RenderTreeProps[];
}

const renderNodes = (nodes: RenderTreeProps) => {
  return (
    <CustomTreeItem nodeId={nodes.id} label={nodes.name} key={nodes.id}>
      {Array.isArray(nodes.children) ? nodes.children.map((node: RenderTreeProps) => renderNodes(node)) : null}
    </CustomTreeItem>
  );
};

const CustomTreeView: FC<{ data: RenderTreeProps } & TreeViewProps> = ({ data, ...rest }) => <TreeView {...rest}>{renderNodes(data)}</TreeView>;

export default withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: '#E4EBF7',
    borderRadius: theme.spacing(2),
  },
}))(CustomTreeView);
