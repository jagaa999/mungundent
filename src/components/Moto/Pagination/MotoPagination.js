import React, { useContext } from "react";
import { Pagination, Button } from "antd";
import FilterContext from "context/FilterContext";

const MotoPagination = (props) => {
  const filterContext = useContext(FilterContext);

  function showTotal(total, range) {
    return `${range[0]}-${range[1]} (Нийт: ${total})`;
  }

  const onChange = (page, pageSize) => {
    // console.log("Энд орж ирсэн", page, pageSize);

    filterContext.updateParams({ offset: "" + page, pagesize: "" + pageSize });
  };

  // function scrollToTop(duration) {
  //   // cancel if already on top
  //   if (document.scrollingElement.scrollTop === 0) return;

  //   const cosParameter = document.scrollingElement.scrollTop / 2;
  //   let scrollCount = 0,
  //     oldTimestamp = null;

  //   function step(newTimestamp) {
  //     if (oldTimestamp !== null) {
  //       // if duration is 0 scrollCount will be Infinity
  //       scrollCount += (Math.PI * (newTimestamp - oldTimestamp)) / duration;
  //       if (scrollCount >= Math.PI)
  //         return (document.scrollingElement.scrollTop = 0);
  //       document.scrollingElement.scrollTop =
  //         cosParameter + cosParameter * Math.cos(scrollCount);
  //     }
  //     oldTimestamp = newTimestamp;
  //     window.requestAnimationFrame(step);
  //   }
  //   window.requestAnimationFrame(step);
  // }

  // const dddd = () => {
  //   console.log("ЭЭЭЭЭЭЭЭЭЭЭЭЭЭ", document.body.scrollTop);
  //   console.log("Эdsfsdf sdfЭЭЭЭЭЭЭЭЭЭЭЭЭ", document.documentElement.scrollTop);
  //   console.log("ЭddddddddddЭ", window);

  //   scrollToTop(500);
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0; // For Safari
  //   document.documentElement.scrollTop = 0;
  // };

  return (
    <>
      <Pagination
        size="small"
        className={props.myClass}
        simple={props.type}
        showSizeChanger
        hideOnSinglePage={true}
        pageSizeOptions={[10, 20, 50]}
        showTotal={showTotal}
        responsive={true}
        showLessItems={true}
        current={filterContext.state.paging.offset * 1}
        pageSize={filterContext.state.paging.pagesize * 1}
        total={filterContext.totalcount * 1}
        onChange={onChange}
      />
      {/* <Button onClick={dddd}>dfdf</Button> */}
    </>
  );
};

export default MotoPagination;
