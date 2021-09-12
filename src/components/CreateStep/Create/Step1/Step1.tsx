import { FC } from 'react';
import ChooseFolder from '../ChooseFolder';
import StructureTemplateFolder from '../StructureTemplateFolder';

interface Step1Props {
  action: string;
}

const Step1: FC<Step1Props> = ({ action }) => {
  return <div>{action === 'create' ? <StructureTemplateFolder /> : <ChooseFolder />}</div>;
};

export default Step1;
