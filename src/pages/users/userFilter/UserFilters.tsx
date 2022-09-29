import searchFilterState from '@/recoil/searchFilter';
import React from 'react';
import {css} from '@emotion/react';
import {formGroupStyle, labelStyle} from '@/components/filter/style';
import SelectBox from '@/components/form/select/SelectBox';
import {useRecoilValue} from 'recoil';

const filterItems: Array<{val: string; txt: string}> = [
  {val: '', txt: '전체'},
  {val: 'bronze', txt: '브론즈'},
  {val: 'silver', txt: '실버'},
  {val: 'gold', txt: '골드'},
  {val: 'platinum', txt: '플래티넘'},
];

function UserFilters() {
  const searchFilter = useRecoilValue(searchFilterState);

  return (
      <>
        <div css={formGroupStyle}>
          <span css={labelStyle}>등급</span>
          <SelectBox
              width="100px"
              items={filterItems}
          />
        </div>
        <div className="input-group">

        </div>
      </>
  );
}

export default UserFilters;
