import { selector } from 'recoil';
import exampleAtom from '@/recoil/example/atom';

const withExample = selector({
  key: 'withExample',
  get: ({ get }) => {
    const examples = get(exampleAtom);

    return examples;
  },
  set: (({ set }, newValue) => set(exampleAtom, newValue))
});

export default withExample;
