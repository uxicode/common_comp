import exampleAtom, {withExample} from '@/recoil/example';
import React, {useEffect} from 'react';
import {useRecoilCallback, useRecoilState} from 'recoil';

function Example() {
  const [exampleState, setExampleState] = useRecoilState(exampleAtom);

  const logState = useRecoilCallback(({ snapshot }) => () => {
    console.log("현재 snapshot 에 포함된 states : ", snapshot.getLoadable(withExample).contents);
  });

  const setExample = () => {
    setExampleState(exampleState + ' complete');
  }

  useEffect(() => {
    logState();
  });

  return (
      <div className="example">
        <p>{exampleState}</p>
        <button onClick={setExample}>change recoil state!</button>
      </div>
  );
}

export default Example;
