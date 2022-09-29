import { atom } from 'recoil';

const searchFilterState = atom({
  key: 'searchFilterState',
  default: ''
});

export default searchFilterState;
