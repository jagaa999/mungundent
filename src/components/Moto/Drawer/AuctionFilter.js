import React, { useState, useEffect, useContext } from "react";
import { isEmpty } from "lodash";

import { Button, Input, Checkbox, Divider, Select } from "antd";
import { ClearOutlined } from "@ant-design/icons";
import CustomScrollbars from "util/CustomScrollbars";
import { LoadProcess, loadDataview } from "util/axiosFunction";
import AuctionContext from "context/AuctionContext";
import FilterContext from "context/FilterContext";

const { Search } = Input;
const { Option } = Select;

const AuctionFilter = (props) => {
  const auctionListContext = useContext(AuctionContext);
  const filterContext = useContext(FilterContext);

  const [firmList, setFirmList] = useState({
    firmList: [
      { MARKA_ID: "1", MARKA_NAME: "TOYOTA" },
      { MARKA_ID: "2", MARKA_NAME: "NISSAN" },
      { MARKA_ID: "3", MARKA_NAME: "MAZDA" },
      { MARKA_ID: "4", MARKA_NAME: "MITSUBISHI" },
      { MARKA_ID: "5", MARKA_NAME: "HONDA" },
      { MARKA_ID: "6", MARKA_NAME: "SUZUKI" },
      { MARKA_ID: "7", MARKA_NAME: "SUBARU" },
      { MARKA_ID: "8", MARKA_NAME: "ISUZU" },
      { MARKA_ID: "9", MARKA_NAME: "DAIHATSU" },
      { MARKA_ID: "10", MARKA_NAME: "MITSUOKA" },
      { MARKA_ID: "12", MARKA_NAME: "ALFAROMEO" },
      { MARKA_ID: "13", MARKA_NAME: "AUDI" },
      { MARKA_ID: "14", MARKA_NAME: "BMW" },
      { MARKA_ID: "15", MARKA_NAME: "CHRYSLER" },
      { MARKA_ID: "16", MARKA_NAME: "CITROEN" },
      { MARKA_ID: "17", MARKA_NAME: "DAIMLER" },
      { MARKA_ID: "18", MARKA_NAME: "FIAT" },
      { MARKA_ID: "19", MARKA_NAME: "FORD" },
      { MARKA_ID: "20", MARKA_NAME: "GM" },
      { MARKA_ID: "21", MARKA_NAME: "HINO" },
      { MARKA_ID: "23", MARKA_NAME: "LEXUS" },
      { MARKA_ID: "24", MARKA_NAME: "MERCEDES BENZ" },
      { MARKA_ID: "25", MARKA_NAME: "OPEL" },
      { MARKA_ID: "26", MARKA_NAME: "PEUGEOT" },
      { MARKA_ID: "27", MARKA_NAME: "RENAULT" },
      { MARKA_ID: "28", MARKA_NAME: "ROVER" },
      { MARKA_ID: "30", MARKA_NAME: "TCM" },
      { MARKA_ID: "31", MARKA_NAME: "VOLKSWAGEN" },
      { MARKA_ID: "32", MARKA_NAME: "VOLVO" },
      { MARKA_ID: "33", MARKA_NAME: "MG" },
      { MARKA_ID: "34", MARKA_NAME: "LAND ROVER" },
      { MARKA_ID: "35", MARKA_NAME: "LINCOLN" },
      { MARKA_ID: "98", MARKA_NAME: "OTHERS" },
      { MARKA_ID: "112", MARKA_NAME: "ASTON MARTIN" },
      { MARKA_ID: "115", MARKA_NAME: "BENTLEY" },
      { MARKA_ID: "117", MARKA_NAME: "BMW ALPINA" },
      { MARKA_ID: "119", MARKA_NAME: "CADILLAC" },
      { MARKA_ID: "121", MARKA_NAME: "CHEVROLET" },
      { MARKA_ID: "124", MARKA_NAME: "DODGE" },
      { MARKA_ID: "129", MARKA_NAME: "HUMMER" },
      { MARKA_ID: "130", MARKA_NAME: "HYUNDAI" },
      { MARKA_ID: "132", MARKA_NAME: "JAGUAR" },
      { MARKA_ID: "135", MARKA_NAME: "LANCIA" },
      { MARKA_ID: "137", MARKA_NAME: "MASERATI" },
      { MARKA_ID: "139", MARKA_NAME: "MINI" },
      { MARKA_ID: "148", MARKA_NAME: "PORSCHE" },
      { MARKA_ID: "229", MARKA_NAME: "INFINITI" },
      { MARKA_ID: "234", MARKA_NAME: "JEEP" },
      { MARKA_ID: "236", MARKA_NAME: "KAWASAKI" },
      { MARKA_ID: "291", MARKA_NAME: "SMART" },
    ],
    loading: false,
  });
  const [markList, setMarkList] = useState({
    markList: [
      { MODEL_ID: "9948", MODEL_NAME: "86" },
      { MODEL_ID: "2", MODEL_NAME: "ALLEX" },
      { MODEL_ID: "3", MODEL_NAME: "ALLION" },
      { MODEL_ID: "4", MODEL_NAME: "ALPHARD" },
      { MODEL_ID: "8", MODEL_NAME: "ALTEZZA" },
      { MODEL_ID: "9", MODEL_NAME: "ALTEZZA WAGON" },
      { MODEL_ID: "9580", MODEL_NAME: "AQUA" },
      { MODEL_ID: "10", MODEL_NAME: "ARISTO" },
      { MODEL_ID: "11", MODEL_NAME: "AURIS" },
      { MODEL_ID: "14", MODEL_NAME: "AVENSIS SEDAN" },
      { MODEL_ID: "15", MODEL_NAME: "AVENSIS WAGON" },
      { MODEL_ID: "16", MODEL_NAME: "BB" },
      { MODEL_ID: "17", MODEL_NAME: "BELTA" },
      { MODEL_ID: "1291", MODEL_NAME: "BLADE" },
      { MODEL_ID: "20", MODEL_NAME: "BREVIS" },
      { MODEL_ID: "26992", MODEL_NAME: "C-HR" },
      { MODEL_ID: "21", MODEL_NAME: "CALDINA" },
      { MODEL_ID: "22", MODEL_NAME: "CALDINA VAN" },
      { MODEL_ID: "23", MODEL_NAME: "CAMI" },
      { MODEL_ID: "24", MODEL_NAME: "CAMROAD" },
      { MODEL_ID: "25", MODEL_NAME: "CAMRY" },
      { MODEL_ID: "30", MODEL_NAME: "CARINA" },
      { MODEL_ID: "31", MODEL_NAME: "CARINA ED" },
      { MODEL_ID: "35", MODEL_NAME: "CELICA" },
      { MODEL_ID: "36", MODEL_NAME: "CELSIOR" },
      { MODEL_ID: "37", MODEL_NAME: "CENTURY" },
      { MODEL_ID: "38", MODEL_NAME: "CHASER" },
      { MODEL_ID: "40", MODEL_NAME: "COASTER" },
      { MODEL_ID: "4852", MODEL_NAME: "COMFORT" },
      { MODEL_ID: "27459", MODEL_NAME: "COMS" },
      { MODEL_ID: "29218", MODEL_NAME: "COPEN" },
      { MODEL_ID: "41", MODEL_NAME: "COROLLA" },
      { MODEL_ID: "42", MODEL_NAME: "COROLLA AXIO" },
      { MODEL_ID: "44", MODEL_NAME: "COROLLA FIELDER" },
      { MODEL_ID: "47", MODEL_NAME: "COROLLA LEVIN" },
      { MODEL_ID: "1922", MODEL_NAME: "COROLLA RUMION" },
      { MODEL_ID: "48", MODEL_NAME: "COROLLA RUNX" },
      { MODEL_ID: "49", MODEL_NAME: "COROLLA SPACIO" },
      { MODEL_ID: "20353", MODEL_NAME: "COROLLA SPORT" },
      { MODEL_ID: "29075", MODEL_NAME: "COROLLA TOURING" },
      { MODEL_ID: "50", MODEL_NAME: "COROLLA TOURING WAGON" },
      { MODEL_ID: "51", MODEL_NAME: "COROLLA VAN" },
      { MODEL_ID: "27231", MODEL_NAME: "COROLLA2" },
      { MODEL_ID: "53", MODEL_NAME: "CORONA" },
      { MODEL_ID: "137", MODEL_NAME: "CORONA PREMIO" },
      { MODEL_ID: "58", MODEL_NAME: "CORSA" },
      { MODEL_ID: "59", MODEL_NAME: "CRESTA" },
      { MODEL_ID: "60", MODEL_NAME: "CROWN" },
      { MODEL_ID: "2185", MODEL_NAME: "CROWN COMFORT" },
      { MODEL_ID: "63", MODEL_NAME: "CROWN ESTATE" },
      { MODEL_ID: "6353", MODEL_NAME: "CROWN VAN" },
      { MODEL_ID: "66", MODEL_NAME: "CROWN WAGON" },
      { MODEL_ID: "67", MODEL_NAME: "CURREN" },
      { MODEL_ID: "68", MODEL_NAME: "CYNOS" },
      { MODEL_ID: "71", MODEL_NAME: "DUET" },
      { MODEL_ID: "72", MODEL_NAME: "DYNA" },
      { MODEL_ID: "22500", MODEL_NAME: "ESQUIRE" },
      { MODEL_ID: "74", MODEL_NAME: "ESTIMA" },
      { MODEL_ID: "75", MODEL_NAME: "ESTIMA HYBRID" },
      { MODEL_ID: "1744", MODEL_NAME: "FJ CRUISER" },
      { MODEL_ID: "7812", MODEL_NAME: "FORKLIFT" },
      { MODEL_ID: "78", MODEL_NAME: "FUNCARGO" },
      { MODEL_ID: "79", MODEL_NAME: "GAIA" },
      { MODEL_ID: "30212", MODEL_NAME: "GRANACE" },
      { MODEL_ID: "81", MODEL_NAME: "GRANVIA" },
      { MODEL_ID: "31210", MODEL_NAME: "GRYALIS" },
      { MODEL_ID: "82", MODEL_NAME: "HARRIER" },
      { MODEL_ID: "84", MODEL_NAME: "HIACE" },
      { MODEL_ID: "86", MODEL_NAME: "HIACE REGIUS" },
      { MODEL_ID: "87", MODEL_NAME: "HIACE TRUCK" },
      { MODEL_ID: "88", MODEL_NAME: "HIACE VAN" },
      { MODEL_ID: "27729", MODEL_NAME: "HIACE VAN 5D4W" },
      { MODEL_ID: "89", MODEL_NAME: "HILUX" },
      { MODEL_ID: "2196", MODEL_NAME: "HILUX SURF" },
      { MODEL_ID: "96", MODEL_NAME: "IPSUM" },
      { MODEL_ID: "5053", MODEL_NAME: "IQ" },
      { MODEL_ID: "97", MODEL_NAME: "ISIS" },
      { MODEL_ID: "98", MODEL_NAME: "IST" },
      { MODEL_ID: "27246", MODEL_NAME: "JPN TAXI" },
      { MODEL_ID: "99", MODEL_NAME: "KLUGER" },
      { MODEL_ID: "102", MODEL_NAME: "LAND CRUISER" },
      { MODEL_ID: "106", MODEL_NAME: "LAND CRUISER PRADO" },
      { MODEL_ID: "110", MODEL_NAME: "LITE ACE NOAH" },
      { MODEL_ID: "113", MODEL_NAME: "LITE ACE TRUCK" },
      { MODEL_ID: "114", MODEL_NAME: "LITE ACE VAN" },
      { MODEL_ID: "115", MODEL_NAME: "LITE ACE WAGON" },
      { MODEL_ID: "117", MODEL_NAME: "MARK II" },
      { MODEL_ID: "26569", MODEL_NAME: "MARK II BLIT" },
      { MODEL_ID: "26570", MODEL_NAME: "MARK II QUALIS" },
      { MODEL_ID: "118", MODEL_NAME: "MARK II VAN" },
      { MODEL_ID: "122", MODEL_NAME: "MARK X" },
      { MODEL_ID: "1951", MODEL_NAME: "MARK X ZIO" },
      { MODEL_ID: "9800", MODEL_NAME: "MARK2 BLIT" },
      { MODEL_ID: "9801", MODEL_NAME: "MARK2 QUALIS" },
      { MODEL_ID: "27233", MODEL_NAME: "MASTERACE SURF" },
      { MODEL_ID: "26001", MODEL_NAME: "MIRAI" },
      { MODEL_ID: "126", MODEL_NAME: "MR-S" },
      { MODEL_ID: "1747", MODEL_NAME: "MR2" },
      { MODEL_ID: "127", MODEL_NAME: "NADIA" },
      { MODEL_ID: "128", MODEL_NAME: "NOAH" },
      { MODEL_ID: "130", MODEL_NAME: "OPA" },
      { MODEL_ID: "132", MODEL_NAME: "OTHER" },
      { MODEL_ID: "134", MODEL_NAME: "PASSO" },
      { MODEL_ID: "5468", MODEL_NAME: "PASSO SETTE" },
      { MODEL_ID: "10203", MODEL_NAME: "PIXIS EPOCH" },
      { MODEL_ID: "27018", MODEL_NAME: "PIXIS JOY" },
      { MODEL_ID: "25432", MODEL_NAME: "PIXIS MEGA" },
      { MODEL_ID: "9499", MODEL_NAME: "PIXIS SPACE" },
      { MODEL_ID: "9938", MODEL_NAME: "PIXIS TRUCK" },
      { MODEL_ID: "9877", MODEL_NAME: "PIXIS VAN" },
      { MODEL_ID: "135", MODEL_NAME: "PLATZ" },
      { MODEL_ID: "136", MODEL_NAME: "PORTE" },
      { MODEL_ID: "55", MODEL_NAME: "PREMIO" },
      { MODEL_ID: "139", MODEL_NAME: "PRIUS" },
      { MODEL_ID: "9245", MODEL_NAME: "PRIUS ALPHA" },
      { MODEL_ID: "9784", MODEL_NAME: "PRIUS PHV" },
      { MODEL_ID: "140", MODEL_NAME: "PROBOX" },
      { MODEL_ID: "141", MODEL_NAME: "PROBOX VAN" },
      { MODEL_ID: "143", MODEL_NAME: "PROGRES" },
      { MODEL_ID: "144", MODEL_NAME: "PRONARD" },
      { MODEL_ID: "2208", MODEL_NAME: "QUICK DELIVERY" },
      { MODEL_ID: "27750", MODEL_NAME: "QUICKDELIVERY VAN" },
      { MODEL_ID: "148", MODEL_NAME: "RACTIS" },
      { MODEL_ID: "29131", MODEL_NAME: "RAIZE" },
      { MODEL_ID: "149", MODEL_NAME: "RAUM" },
      { MODEL_ID: "150", MODEL_NAME: "RAV4" },
      { MODEL_ID: "151", MODEL_NAME: "RAV4 J" },
      { MODEL_ID: "152", MODEL_NAME: "RAV4 L" },
      { MODEL_ID: "155", MODEL_NAME: "REGIUS" },
      { MODEL_ID: "156", MODEL_NAME: "REGIUS ACE" },
      { MODEL_ID: "2089", MODEL_NAME: "REGIUS ACE COMMUTER" },
      { MODEL_ID: "6355", MODEL_NAME: "REGIUS ACE VAN" },
      { MODEL_ID: "157", MODEL_NAME: "REGIUS VAN" },
      { MODEL_ID: "27013", MODEL_NAME: "ROOMY" },
      { MODEL_ID: "159", MODEL_NAME: "RUSH" },
      { MODEL_ID: "5647", MODEL_NAME: "RX" },
      { MODEL_ID: "6356", MODEL_NAME: "SAI" },
      { MODEL_ID: "28158", MODEL_NAME: "SHOVELLOADER" },
      { MODEL_ID: "169", MODEL_NAME: "SIENTA" },
      { MODEL_ID: "170", MODEL_NAME: "SOARER" },
      { MODEL_ID: "10211", MODEL_NAME: "SPADE" },
      { MODEL_ID: "171", MODEL_NAME: "SPARKY" },
      { MODEL_ID: "172", MODEL_NAME: "SPRINTER" },
      { MODEL_ID: "2210", MODEL_NAME: "SPRINTER CARIB" },
      { MODEL_ID: "174", MODEL_NAME: "SPRINTER MARINO" },
      { MODEL_ID: "176", MODEL_NAME: "SPRINTER VAN" },
      { MODEL_ID: "178", MODEL_NAME: "STARLET" },
      { MODEL_ID: "179", MODEL_NAME: "SUCCEED" },
      { MODEL_ID: "180", MODEL_NAME: "SUCCEED VAN" },
      { MODEL_ID: "182", MODEL_NAME: "SUPRA" },
      { MODEL_ID: "27012", MODEL_NAME: "TANK" },
      { MODEL_ID: "185", MODEL_NAME: "TERCEL" },
      { MODEL_ID: "187", MODEL_NAME: "TOWN ACE" },
      { MODEL_ID: "188", MODEL_NAME: "TOWN ACE NOAH" },
      { MODEL_ID: "190", MODEL_NAME: "TOWN ACE TRUCK" },
      { MODEL_ID: "191", MODEL_NAME: "TOWN ACE VAN" },
      { MODEL_ID: "193", MODEL_NAME: "TOYOACE" },
      { MODEL_ID: "1853", MODEL_NAME: "VANGUARD" },
      { MODEL_ID: "2855", MODEL_NAME: "VELLFIRE" },
      { MODEL_ID: "201", MODEL_NAME: "VEROSSA" },
      { MODEL_ID: "202", MODEL_NAME: "VISTA" },
      { MODEL_ID: "203", MODEL_NAME: "VISTA ARDEO" },
      { MODEL_ID: "205", MODEL_NAME: "VITZ" },
      { MODEL_ID: "206", MODEL_NAME: "VOLTZ" },
      { MODEL_ID: "207", MODEL_NAME: "VOXY" },
      { MODEL_ID: "27396", MODEL_NAME: "WHEELLOADER" },
      { MODEL_ID: "208", MODEL_NAME: "WILL" },
      { MODEL_ID: "209", MODEL_NAME: "WILL VI" },
      { MODEL_ID: "210", MODEL_NAME: "WILL VS" },
      { MODEL_ID: "211", MODEL_NAME: "WINDOM" },
      { MODEL_ID: "212", MODEL_NAME: "WISH" },
      { MODEL_ID: "1752", MODEL_NAME: "YARIS" },
      { MODEL_ID: "31230", MODEL_NAME: "YARIS CROSS" },
    ],
    loading: false,
  });
  const [newsType, setNewsType] = useState([]);
  const [newsSource, setNewsSource] = useState([]);
  const [newsPublisher, setNewsPublisher] = useState([]);

  // * axios-оор Filter-үүдийн анхны утга ERP-аас дуудна.
  const callAllDataAsync = async () => {
    setNewsType(
      await loadDataview({
        systemmetagroupid: "1587100905303413",
        criteria: auctionListContext.auctionList.loadParams.criteria,
      })
    );
    // setNewsSource(
    //   await loadDataview({
    //     systemmetagroupid: "1585046479054",
    //     criteria: auctionListContext.auctionList.loadParams.criteria,
    //   })
    // );
    // setNewsPublisher(
    //   await loadDataview({
    //     systemmetagroupid: "1585046481242",
    //     criteria: auctionListContext.auctionList.loadParams.criteria,
    //   })
    // );
  };

  useEffect(() => {
    callAllDataAsync();
    console.log(
      "auctionListContext.auctionList.loadParams.criteriaauctionListContext.auctionList.loadParams.criteriaauctionListContext.auctionList.loadParams.criteria",
      auctionListContext.auctionList.loadParams.criteria
    );
    // setDidMount(true); //first render-ийг илрүүлэхийн төлөө
  }, [auctionListContext.auctionList.loadParams.criteria]);

  const prepareURL = (checkedValues, parameterLabel) => {
    //multiple values || checkbox etc
    const param = checkedValues
      .map(function (itemvalue) {
        return encodeURIComponent(itemvalue);
      })
      .join("|");

    const tempObject = {
      [parameterLabel]: param,
    };

    filterContext.updateParams(tempObject);
  };

  const prepareURL2 = (checkedValues, parameterLabel) => {
    //multiple values || checkbox etc
    console.log("checkedValues", checkedValues);
    console.log("parameterLabel", parameterLabel);

    const tempObject = {
      [parameterLabel]: checkedValues,
    };

    // console.log("tempObjecttempObject", tempObject);
    filterContext.updateParams(tempObject);
  };

  return (
    <div className="gx-p-3" style={{ height: "100%", width: "100%" }}>
      <CustomScrollbars>
        {/* <Search
          placeholder="Гарчгаас хайх"
          onSearch={(value) => console.log(value)}
        /> */}

        <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
          Фирм
        </h6>
        <Select
          className="moto-select-firm gx-w-100"
          loading={firmList.loading}
          showSearch
          allowClear
          placeholder="Фирм"
          optionFilterProp="children"
          onChange={(e) => prepareURL2(e, "auctionfirmid")} //нэмэлт параметр дамжуулж байгаа юм.
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return false;
            }
          }}
          defaultValue={[filterContext.state.filterList?.auctionfirmid || null]}
        >
          {firmList.firmList.map((item, index) => (
            <Option key={index} value={item.MARKA_ID}>
              {item.MARKA_NAME}
            </Option>
          ))}
        </Select>

        <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
          Марк
        </h6>
        <Select
          className="moto-select-firm gx-w-100"
          loading={markList.loading}
          showSearch
          allowClear
          placeholder="Марк"
          optionFilterProp="children"
          onChange={(e) => prepareURL2(e, "auctionmarkid")} //нэмэлт параметр дамжуулж байгаа юм.
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return false;
            }
          }}
          defaultValue={[filterContext.state.filterList?.auctionmarkid || null]}
        >
          {markList.markList.map((item, index) => (
            <Option key={index} value={item.MODEL_ID}>
              {item.MODEL_NAME}
            </Option>
          ))}
        </Select>

        {newsSource === [] ? (
          "Ачаалж байна"
        ) : (
          <>
            <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
              Эх сурвалж
            </h6>
            <Checkbox.Group
              onChange={(e) => prepareURL(e, "newssourceid")} //нэмэлт параметр дамжуулж байгаа юм.
              className="moto-filter-checkbox"
              defaultValue={[
                filterContext.state.filterList?.newssourceid || "",
              ]}
            >
              {newsSource.map((item) => (
                <Checkbox value={item.newssourceid} key={item.newssourceid}>
                  {item.newssourcename}
                  <span className="gx-fs-sm gx-text-light gx-ml-3">
                    {item.count}
                  </span>
                </Checkbox>
              ))}
            </Checkbox.Group>
          </>
        )}

        {newsPublisher === [] ? (
          "Ачаалж байна"
        ) : (
          <>
            <h6 className="gx-my-3 gx-text-uppercase gx-text-orange gx-mt-4">
              Нийтлэгч
            </h6>
            <Checkbox.Group
              onChange={(e) => prepareURL(e, "publisherid")} //нэмэлт параметр дамжуулж байгаа юм.
              className="moto-filter-checkbox"
              defaultValue={[filterContext.state.filterList?.publisherid || ""]}
            >
              {newsPublisher.map((item) => (
                <Checkbox value={item.publisherid} key={item.publisherid}>
                  {item.publishername}
                  <span className="gx-fs-sm gx-text-light gx-ml-3">
                    {item.publishercount}
                  </span>
                </Checkbox>
              ))}
            </Checkbox.Group>
          </>
        )}

        {/* <MotoCheckBox title="Нийтлэлийн төрөл" /> */}
        {/* <MotoCheckBox title="Нийтлэгч" /> */}

        {isEmpty(filterContext.state.filterList) ? (
          <></>
        ) : (
          <>
            <Divider dashed className="gx-mt-5" />
            <Button
              type="dashed"
              icon={<ClearOutlined />}
              onClick={(e) => {
                filterContext.clearAll();
              }}
            >
              Арилгах
            </Button>
          </>
        )}
      </CustomScrollbars>
    </div>
  );
};

export default AuctionFilter;
