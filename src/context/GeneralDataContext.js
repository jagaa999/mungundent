import React, { useState, useContext } from "react";
import moment from "moment";
import { loadDataview } from "util/axiosFunction";
import MemberContext from "context/MemberContext";

const GeneralDataContext = React.createContext();

export const GeneralDataStore = (props) => {
  const memberContext = useContext(MemberContext);

  const [rateMoneyList, setRateMoneyList] = useState({
    rateMoneyList: {},
    loading: false,
  });

  const loadRateMoneyList = async () => {
    // if (rateMoneyList.rateMoneyList.length > 0) return null;
    setRateMoneyList({ ...rateMoneyList, loading: true });

    const myArray = await loadDataview({
      systemmetagroupid: "1465468422764",
      // filterEndDate
      criteria: {
        filterEndDate: {
          0: {
            operator: "=",
            operand: moment().format("YYYY-MM-DD"),
          },
        },
      },
      paging: {
        sortColumnNames: {
          code: {
            sortType: "ASC", //эрэмбэлэх чиглэл
          },
        },
      },
    });

    console.log("myArraymyArray", myArray);
    let myTempList = {};

    myArray.map((item) => {
      // if (item?.currencycode === "USD") {
      if (["USD", "EUR", "JPY", "CNY", "RUB"].includes(item?.currencycode)) {
        myTempList[item.currencycode] = {
          ...item,
        };
      }
    });

    console.log("myTempList", myTempList);
    console.log("myTempList", Object.values(myTempList));

    setRateMoneyList({
      rateMoneyList: myTempList,
      loading: false,
    });

    // bankdate: "2020-11-26 00:00:00.0"
    // code: "02"
    // currencycode: "USD"
    // currencyname: "Америк доллар"
    // id: "200101010000003"
    // rate: "2849.59"

    // bankdate: "2020-11-26 00:00:00.0"
    // code: "03"
    // currencycode: "EUR"
    // currencyname: "Евро"
    // id: "200101010000004"
    // rate: "3393.01"

    // bankdate: "2020-11-26 00:00:00.0"
    // code: "04"
    // currencycode: "JPY"
    // currencyname: "Япон иень"
    // id: "200101010000005"
    // rate: "27.28"

    // bankdate: "2020-11-26 00:00:00.0"
    // code: "05"
    // currencycode: "CNY"
    // currencyname: "Юань"
    // id: "200101010000006"
    // rate: "433.17"

    // bankdate: "2020-11-26 00:00:00.0"
    // code: "07"
    // currencycode: "RUB"
    // currencyname: "Рубль"
    // id: "11354536258331"
    // rate: "37.77"
  };

  return (
    <GeneralDataContext.Provider
      value={{
        rateMoneyList,
        loadRateMoneyList,
      }}
    >
      {props.children}
    </GeneralDataContext.Provider>
  );
};

export default GeneralDataContext;
