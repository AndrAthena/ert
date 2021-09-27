import React, { useState, ChangeEvent, useEffect } from 'react';
import { AppBar, Box, Tabs, Toolbar, Typography } from '@material-ui/core';
import CustomTab from '../Common/CustomTab';
import TemplateIcon from '../Icons/TemplateIcon';
import styles from './style';
import ImageIcon from '../Icons/ImageIcon';
import ElementIcon from '../Icons/ElementIcon';
import TextIcon from '../Icons/TextIcon';
import BackgroundIcon from '../Icons/BackgroundIcon';
import CustomTabPanel from '../Common/CustomTabPanel';
import CustomSearchInput from '../Common/CustomSearchInput';
import EditorHeader from './EditorHeader/';
import SEO from '../Common/SEO';
import template1 from '../../assets/images/template-1.png';
import template2 from '../../assets/images/template-2.png';
import template3 from '../../assets/images/template-3.png';
import template4 from '../../assets/images/template-4.png';
import CardImage from '../Common/CardImage';
import CustomColorPicker from '../Common/CustomColorPicker';
import ColorBox from '../Common/ColorBox';
import { Color } from 'react-color';
import TextFormat from '../Common/TextFormat';
import CarouselSwiper from './../Common/CarouselSwiper/CarouselSwiper';
import EditorCanva from '../Common/EditorCanva/EditorCanva';
import Konva from 'konva';
import { KonvaEventObject } from 'konva/lib/Node';
import { Text } from 'react-konva';

const Editor = () => {
  const cls = styles();
  const [value, setValue] = useState<string>('template');
  const [font, setFont] = useState<any>('Roboto');
  const [textColor, setTextColor] = useState<Color>('#86C232');
  const handleChange = (_: ChangeEvent<{}>, value: string) => setValue(value);
  const handleSelectColor = (_: any, color: Color) => setTextColor(color);
  const openSidebar = () => setValue('color-picker');
  const handleChangeFont = (font: any) => setFont(font.family);

  // Text elements
  const [elementIsSelected, setElementIsSelected] = useState<boolean>(false);
  const [refs, setRefs] = useState<any[]>([]);
  const [textAttr, setTextAttr] = useState({
    text: 'This is text is rendered by canvas',
    padding: 15,
    lineHeight: 1.5,
    draggable: true,
    fontFamily: font,
    fontSize: 16,
    fill: textColor as any,
  });

  const handleDetectElement = (e: KonvaEventObject<MouseEvent>) => {
    if (e.target.getStage() === e.target) {
      setElementIsSelected(false);
      setRefs([]);
    }
  };

  const handleSelectText = (e: KonvaEventObject<MouseEvent>) => {
    setElementIsSelected(true);
    setRefs((ref) => [...ref, e.target]);
  };

  const handleTransform = (e: KonvaEventObject<MouseEvent>) => {
    const width = Math.max(e.target.scaleX() * e.target.width(), 50);
    setTextAttr((prev) => ({ ...prev, width, scaleX: 1, scaleY: 1 }));
  };

  const elements: any[] = [
    <Text onClick={handleSelectText} onTransform={handleTransform} {...textAttr} />,
  ];

  useEffect(() => {
    elementIsSelected && setTextAttr((prev) => ({ ...prev, fontFamily: font }));
  }, [font]);

  return (
    <div style={{ height: '100%', overflow: 'hidden' }}>
      <SEO title="Editor" />
      <EditorHeader />
      <div className={cls.editor}>
        <Tabs
          value={value}
          onChange={handleChange}
          orientation="vertical"
          variant="fullWidth"
          className={cls.sidebarMenu}
        >
          <CustomTab
            icon={<TemplateIcon />}
            label={<Typography variant="body2">Template</Typography>}
            value="template"
            index={0}
          />
          <CustomTab
            icon={<ImageIcon />}
            label={<Typography variant="body2">Image</Typography>}
            value="image"
            index={1}
          />
          <CustomTab
            icon={<ElementIcon />}
            label={<Typography variant="body2">Element</Typography>}
            value="element"
            index={2}
          />
          <CustomTab
            icon={<TextIcon />}
            label={<Typography variant="body2">Text</Typography>}
            value="text"
            index={3}
          />
          <CustomTab
            icon={<BackgroundIcon />}
            label={<Typography variant="body2">Background</Typography>}
            value="background"
            index={4}
          />
          <CustomTab
            style={{ display: 'none' }}
            icon={<BackgroundIcon />}
            label={<Typography variant="body2">Color</Typography>}
            value="color-picker"
            index={4}
          />
        </Tabs>
        <div className={cls.sidePanel}>
          <CustomTabPanel value={value} name="template">
            <CustomSearchInput placeholder="Search a template" fullWidth />
            <Box mb={2}>
              <Typography variant="body2" gutterBottom>
                Facebook image template
              </Typography>
              <div className="d-flex">
                <CarouselSwiper
                  slidesPerView={2.15}
                  slides={[template1, template2, template3, template4].map((image) => {
                    return <CardImage image={image} className="mr-3" />;
                  })}
                />
              </div>
            </Box>
            <Box>
              <Typography variant="body2" gutterBottom>
                Instagram template
              </Typography>
              <div className="d-flex">
                <CarouselSwiper
                  slidesPerView={2.15}
                  slides={[template4, template3, template1, template2].map((image) => {
                    return <CardImage image={image} className="mr-3" />;
                  })}
                />
              </div>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} name="color-picker">
            <CustomColorPicker onSelectColor={handleSelectColor} />
          </CustomTabPanel>
        </div>
        <Box flexGrow={1} pl={2} display="flex" flexDirection="column">
          <AppBar color="inherit" position="static" elevation={0}>
            <Toolbar style={{ minHeight: 'initial', padding: 8 }} disableGutters>
              <ColorBox
                colorBox={textColor}
                style={{ width: 36, height: 36, margin: 0 }}
                onClick={openSidebar}
              />
              <TextFormat font={font} handleChangeFont={handleChangeFont} />
            </Toolbar>
          </AppBar>
          <Box flexGrow={1}>
            <EditorCanva
              elements={elements}
              elementIsSelected={elementIsSelected}
              refs={refs}
              stageProps={{
                onMouseDown: handleDetectElement,
              }}
            />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Editor;
