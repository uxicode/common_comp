import searchFilterState from '@/recoil/searchFilter';
import React, {useEffect, useState} from 'react';
import {selectStyle} from '@/components/form/select/style';
import { useRecoilState } from 'recoil';

interface SelectProps {
  tit?: string;
  // selectedValue?: string | number;
  id?: string;
  width?: string;
  disabled?: boolean;
  items?: Array<{ val: string; txt: string; }>;
}

function SelectBox(props: SelectProps) {
  const {
    tit,
    id,
    width,
    disabled,
    items
  } = props;

  const [selectedValue, setSelectedValue] = useRecoilState(searchFilterState);

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
      <select css={selectStyle}
              style={{width}}
              title={tit}
              defaultValue={selectedValue}
              id={id}
              disabled={disabled}
              onChange={handleChange}>
        {
          items && items.map((item: {val: string; txt: string}, idx) => {
            return <option key={`opt-${idx}`} value={item.val}>{item.txt}</option>
          })
        }
      </select>
  );
}

export default SelectBox;
