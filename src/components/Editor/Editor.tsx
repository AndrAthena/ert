import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar } from '@material-ui/core';
import TemplateIcon from '../Icons/TemplateIcon';
import styles from './style';
import ImageIcon from '../Icons/ImageIcon';
import ElementIcon from '../Icons/ElementIcon';
import TextIcon from '../Icons/TextIcon';
import BackgroundIcon from '../Icons/BackgroundIcon';
import EditorHeader from './components/EditorHeader';
import SEO from '../Common/SEO';
import ColorBox from '../Common/ColorBox';
import { Color } from 'react-color';
import TextFormat from '../Common/TextFormat';
import EditorCanva from '../Common/EditorCanva/EditorCanva';
import { KonvaEventObject } from 'konva/lib/Node';
import { Text } from 'react-konva';
import TextTab from './components/LeftTab/TextTab/TextTab';
import CustomTabs, { TabsType } from '../Common/CustomTabs';
import TemplatePanel from './components/LeftTab/TemplatePanel';
import CustomColorPicker from '../Common/CustomColorPicker';
import FontFaceObserver from 'fontfaceobserver';
import ImageTab from './components/LeftTab/ImageTab';
import ConditionalRenderingTab from './components/LeftTab/ConditionalRenderingTab';
import filterTabs from './components/LeftTab/FilterTab';
import AdjustementTab from './components/LeftTab/AdjustementTab';
import BackgroundTab from './components/LeftTab/BackgroundTab';
import RightPanel from './components/RightPanel';

const Editor = () => {
  const cls = styles();
  const [tab, setTab] = useState<string>('template');

  const [font, setFont] = useState<any>('Roboto');
  const [textColor, setTextColor] = useState<Color>('#86C232');
  const handleSelectColor = (_: any, color: Color) => setTextColor(color);
  const openSidebar = () => setTab('color-picker');
  const handleChangeFont = (font: any) => {
    const loadableFont = new FontFaceObserver(font.family);
    loadableFont
      .load()
      .then((_) => setFont(font.family))
      .catch((error) => console.log(error));
  };

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
    if (refs.find((ref) => ref === e.target)) return;
    setRefs((ref) => [...ref, e.target]);
  };

  const handleTransform = (e: KonvaEventObject<MouseEvent>) => {
    const width = Math.max(e.target.scaleX() * e.target.width(), 50);
    setTextAttr((prev) => ({ ...prev, width, scaleX: 1, scaleY: 1 }));
  };

  const elements: any[] = [
    <Text
      onClick={handleSelectText}
      onTransform={handleTransform}
      key="text-element-0"
      {...textAttr}
    />,
  ];

  const editorTabs: TabsType[] = [
    {
      name: 'template',
      value: 'template',
      content: <TemplatePanel />,
      label: 'Template',
      icon: <TemplateIcon />,
    },
    {
      name: 'image',
      value: 'image',
      content: <ImageTab />,
      label: 'Image',
      icon: <ImageIcon />,
    },
    {
      name: 'element',
      value: 'element',
      content: <ConditionalRenderingTab />,
      label: 'Element',
      icon: <ElementIcon />,
    },
    {
      name: 'text',
      value: 'text',
      content: <TextTab />,
      label: 'Text',
      icon: <TextIcon />,
    },
    {
      name: 'background',
      value: 'background',
      content: <BackgroundTab />,
      label: 'Background',
      icon: <BackgroundIcon />,
    },
    {
      name: 'color-picker',
      value: 'color-picker',
      style: { display: 'none' },
      content: <CustomColorPicker onSelectColor={handleSelectColor} />,
    },
    {
      name: 'adjustement',
      value: 'adjustement',
      style: { display: 'none' },
      content: <AdjustementTab />,
    },
    ...filterTabs,
  ];

  useEffect(() => {
    elementIsSelected &&
      setTextAttr((prev) => ({ ...prev, fontFamily: font, fill: textColor as any }));
  }, [font, textColor, elementIsSelected]);

  return (
    <div style={{ height: '100%', overflow: 'hidden' }}>
      <SEO title="Editor" />
      <EditorHeader />
      <div className={cls.editorContainer}>
        <CustomTabs tabs={editorTabs} className={cls.sidebarMenu} tab={tab} setTab={setTab} />
        <Box className={cls.editor}>
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
          <Box display="flex" flexGrow={1} height={1} mt={2}>
            <Box className={cls.editorCanvas}>
              <EditorCanva
                elements={elements}
                elementIsSelected={elementIsSelected}
                refs={refs}
                stageProps={{
                  onMouseDown: handleDetectElement,
                }}
              />
            </Box>
            <RightPanel />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Editor;
