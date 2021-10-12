import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from '@material-ui/core';
import { FC, ReactNode } from 'react';

interface DialogButtonProps {
  label: ReactNode;
  props: Omit<ButtonProps, 'children'>;
}

interface CustomDialogProps extends Omit<DialogProps, 'title'> {
  title: ReactNode;
  buttons?: {
    cancel?: DialogButtonProps;
    ok?: DialogButtonProps;
  };
  position?: 'start' | 'center' | 'end';
}

const CustomDialog: FC<CustomDialogProps> = ({
  buttons,
  children,
  position = 'end',
  title,
  ...rest
}) => {
  return (
    <Dialog maxWidth={rest.maxWidth ?? 'sm'} PaperProps={{ square: true }} {...rest}>
      <DialogTitle disableTypography>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>

      {buttons && (
        <DialogActions style={{ padding: '16px 24px', justifyContent: position }}>
          {buttons.cancel && (
            <Button variant={buttons.cancel.props.variant ?? 'contained'} {...buttons.cancel.props}>
              {buttons.cancel.label}
            </Button>
          )}
          {buttons.ok && (
            <Button
              variant={buttons.ok.props.variant ?? 'contained'}
              color={buttons.ok.props.color ?? 'primary'}
              {...buttons.ok.props}
            >
              {buttons.ok.label}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default CustomDialog;
