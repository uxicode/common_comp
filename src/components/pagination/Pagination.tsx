import React, {useEffect, useState} from 'react';
import {linkStyle, liStyle, nextStyle, prevStyle, ulStyle} from '@/components/pagination/style';
import {getPageNum, getTotalPageCount} from '@/components/pagination/PagingUtils';

interface IPageProps {
  total: number;
  numOfPage: number;
  pageSize: number;
  pageChange: (num: number) => void;
}

function Pagination(props: IPageProps) {
  const {total, numOfPage, pageSize, pageChange} = props;

  const [pageCount, setPageCount] = useState<number>(1);
  const [totalPageCount, setTotalPageCount] = useState<number>(-1);
  const [pageItems, setPageItems] = useState<Array<number>>([]);

  useEffect(() => {
    // console.log(total, totalPageCount);
    onChangeTotal(total, totalPageCount);
  }, [total, totalPageCount]);

  const onChangeTotal = (value: number, oldValue: number) => {
    if (value !== oldValue) {
      createPaging();
    }
  };

  const createPaging = () => {
    setTotalPageCount(getTotalPageCount({total, numOfPage}));
    setPageItems([...getPageNum({
      totalPageCount,
      pageSize,
      curPageNum: pageCount
    })]);
  }

  const onPageNumClick = (num: number) => {
    setPageCount(num);
    setPageItems([...getPageNum({
      totalPageCount,
      pageSize,
      curPageNum: pageCount
    })]);

    pageChange(num);
  }

  const onPrevPageClick = () => {
    if (pageCount <= 1) {
      setPageCount(1);
    } else {
      setPageCount(pageCount-1);
      pageChange(pageCount-1);
    }

    setPageItems([...getPageNum({
      totalPageCount,
      pageSize,
      curPageNum: pageCount
    })]);
  }

  const onNextPageClick = () => {

    if (pageCount >= totalPageCount) {
      setPageCount(totalPageCount);
    } else {
      setPageCount(pageCount + 1);
      pageChange(pageCount + 1);
    }

    setPageItems([...getPageNum({
      totalPageCount,
      pageSize,
      curPageNum: pageCount
    })]);
  }

  return (
      <div className="pagination-cnt" style={{margin: '2rem 0'}}>
        <ul css={ulStyle}>
          <li css={liStyle} className="prev">
            <a href="#" css={[prevStyle, linkStyle]} onClick={
              (e) => {
                e.preventDefault();
                onPrevPageClick();
              }
            }><i className="icon-arrow-left2"></i></a>
          </li>

          {
            pageItems.map((item, idx) => {
              return <li css={liStyle} key={`paging-${idx}`} className={pageCount===item ? 'active' : ''}>
                <a href="#" css={linkStyle} onClick={
                  (e) => {
                    e.preventDefault();
                    onPageNumClick(item);
                  }
                }>{item}</a>
              </li>
            })
          }

          <li css={liStyle} className="next">
            <a href="#" css={[nextStyle, linkStyle]} onClick={
              (e) => {
                e.preventDefault();
                onNextPageClick();
              }
            }><i className="icon-arrow-right2"></i></a>
          </li>
        </ul>
      </div>
  );
}

export default Pagination;
