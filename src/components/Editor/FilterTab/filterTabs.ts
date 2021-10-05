import { TabsType } from '../../Common/CustomTabs';
import Filter from './Filter/Filter';

export const filterTabs: TabsType[] = [
  {
    name: 'filter',
    value: 'filter',
    content: Filter,
  },
  {
    name: 'adjust',
    value: 'adjust',
    content: 'div',
  },
  {
    name: '',
    value: '',
    content: 'div',
  },
  {
    name: 'crop',
    value: 'crop',
    content: 'div',
  },
  {
    name: 'flip',
    value: 'flip',
    content: 'div',
  },
  {
    name: 'position',
    value: 'position',
    content: 'div',
  },
];

export default filterTabs;
