import Modal from '@/components/modal/Modal';
import {CloseBtn, ModalBody, ModalFooter, ModalHeader, ModalTitle} from '@/components/modal/style';
import React, {useCallback, useEffect, useState} from 'react';
import Btn from '@/components/button/Btn';
import SelectBox from '@/components/form/select/SelectBox';
// import TxtField from '@/components/form/input/TxtField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

const selectItems: Array<{val: string; txt: string}> = [
  {val: '1', txt: 'one'},
  {val: '2', txt: 'two'},
  {val: '3', txt: 'three'},
];

function Template() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
      <>
        {/*<TxtField inputType="text"
                  initialText="initial text"
                  size="500px"
                  placeholder="input test" />*/}
        <SelectBox width="100px"
                   items={selectItems} />

        <Btn addClass="mgt-30" onClick={onClickToggleModal}>Open Modal</Btn>

        {
            isOpenModal && (
                <Modal onClickToggleModal={onClickToggleModal}>
                  <ModalHeader>
                    <h5 css={ModalTitle}>팝업 제목</h5>
                    <button css={CloseBtn} onClick={onClickToggleModal}></button>
                  </ModalHeader>

                  <ModalBody>
                    <p>팝업 내용</p>
                  </ModalBody>

                  <ModalFooter>
                    <div style={{textAlign: 'center'}}>
                      <Btn onClick={onClickToggleModal}>취소</Btn>
                      <Btn color="danger" onClick={onClickToggleModal}>확인</Btn>
                    </div>
                  </ModalFooter>
                </Modal>
            )
        }

        <DatePicker
            className="mgt-30"
            locale={ko} // 기본값은 영어
            dateFormat="yyyy-MM-dd" // 날짜 형식
            placeholderText="날짜 선택"
            selected={startDate}
            onChange={(date: Date) => {
              setStartDate(date)
            }}
        />

      </>
  );
}

export default Template;
