import { Box, FormGroup, LinearProgress, TextField, Typography } from '@material-ui/core';
import ButtonGroupBar from './components/ButtonGroupBar/ButtonGroupBar';
import Header from './components/Header';
import styles from './style';
import travel from '../../assets/images/travel.png';
import trek from '../../assets/images/trek.png';
import beach from '../../assets/images/beach.png';
import sport from '../../assets/images/sport.png';
import TemplateCard from './components/TemplateCard';
import CustomDialog from '../Common/CustomDialog';
import CustomSelect from '../Common/CustomSelect';
import { MouseEvent, useCallback, useState } from 'react';
import CustomRadio from '../Common/CustomRadio';

const Generate = () => {
  const cls = styles();
  const [open, setOpen] = useState<boolean>(false);
  const [openGenerate, setOpenGenerate] = useState<boolean>(false);
  const handleShowDialog = useCallback(() => setOpen((prev) => !prev), []);
  const handleShowDialogGenerate = useCallback(() => {
    setOpenGenerate((prev) => !prev);
    handleShowDialog();
  }, [handleShowDialog]);

  return (
    <>
      <Box className={cls.generate}>
        <Header />
        <Box className={cls.content}>
          <ButtonGroupBar
            action={{
              onGenerateFeed: (e: MouseEvent<any>) => handleShowDialog(),
            }}
          />
          <Box className={cls.flexContent}>
            <TemplateCard
              image={travel}
              title="Travel all over the world"
              subtitle="image 1 of template name"
            />
            <TemplateCard
              image={trek}
              title="Travel all over the world"
              subtitle="image 1 of template name"
            />
            <TemplateCard
              image={beach}
              title="Travel all over the world"
              subtitle="image 1 of template name"
            />
            <TemplateCard
              image={sport}
              title="Travel all over the world"
              subtitle="image 1 of template name"
            />
          </Box>
        </Box>
      </Box>
      <CustomDialog
        title={<Typography variant="h3">Generate new</Typography>}
        buttons={{
          cancel: {
            label: 'Cancel',
            props: {
              variant: 'outlined',
              color: 'secondary',
              onClick: () => handleShowDialog(),
            },
          },
          ok: {
            label: 'Generate',
            props: {
              color: 'secondary',
              onClick: () => handleShowDialogGenerate(),
            },
          },
        }}
        buttonPlacement="start"
        open={open}
        onClose={() => handleShowDialog()}
      >
        <Typography variant="body2" gutterBottom>
          RTE will generate new Product Feed Design from the feeds associate with this template
        </Typography>
        <TextField variant="outlined" label="Name of the feeds" fullWidth />
        <CustomSelect
          label="Where to put your feeds ?"
          items={[
            { label: 'Folder/Sub Folder 1', value: 'folder' },
            { label: 'Folder/Sub Folder 2', value: 'folder2' },
          ]}
          value="folder"
          onChange={(value) => console.log(value)}
          fullWidth
        />
      </CustomDialog>
      <CustomDialog
        title={<Typography variant="h3">Generate</Typography>}
        maxWidth="xs"
        open={openGenerate}
        fullWidth
      >
        <Typography variant="body2" gutterBottom>
          Your new feed is loading,please wait….
        </Typography>
        <Box my={3}>
          <LinearProgress
            variant="determinate"
            value={10}
            style={{ height: 16, borderRadius: 8 }}
          />
        </Box>
      </CustomDialog>
      <CustomDialog
        title={<Typography variant="h3">Generate 05 ads</Typography>}
        maxWidth="xs"
        open
        buttons={{
          cancel: {
            label: 'Cancel',
            props: {
              variant: 'outlined',
              color: 'secondary',
              size: 'small',
            },
          },
          ok: {
            label: 'Generate',
            props: {
              size: 'small',
              color: 'secondary',
            },
          },
        }}
        buttonPlacement="start"
      >
        <Typography variant="body2" gutterBottom>
          RTE will generate your ads. Please specify a naming convention
        </Typography>
        <Box my={3}>
          <Typography variant="body2" gutterBottom>
            Column of your feed
          </Typography>
          <FormGroup row>
            <CustomRadio type="checkbox" label="IdProduct" />
            <CustomRadio type="checkbox" label="Age" />
            <CustomRadio type="checkbox" label="Headline" />
            <CustomRadio type="checkbox" label="Description" />
            <CustomRadio type="checkbox" label="Price" />
          </FormGroup>
        </Box>
      </CustomDialog>
    </>
  );
};

export default Generate;
