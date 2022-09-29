import searchFilterState from '@/recoil/searchFilter/atom';
import {DefaultValue, selector} from 'recoil';

const withSelected = selector({
  key: 'withSelected',
  get: ({ get }) => {
    const filter = get(searchFilterState);

    return filter;
  },
  set: (({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(searchFilterState);
    } else {
      set(searchFilterState, newValue);
    }
  })

});

export default withSelected;
