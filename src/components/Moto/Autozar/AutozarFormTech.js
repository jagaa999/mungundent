import React, { useState, useEffect } from "react";

import { Form, Input, Select, Badge } from "antd";
import { LoadProcess, loadDataview } from "util/axiosFunction";

const { Option, OptGroup } = Select;

//? GOOTECH
// FIRMID;
// CAR_FIRM;
// MARKID;
// CAR_MARK;
// MAINID
// CARID;
// CARTRIM
const MotocarFormTech = ({ form }) => {
  const [firmList, setFirmList] = useState({
    loading: false,
    firmList: [],
  });
  const [markList, setMarkList] = useState({
    loading: false,
    markList: [],
  });
  const [indexList, setIndexList] = useState({
    loading: false,
    indexList: [],
  });
  const [editionList, setEditionList] = useState({
    loading: false,
    editionList: [],
  });

  // * axios-оор ERP-аас дуудна.
  const callFunctionAsync = async () => {
    setFirmList({ ...firmList, loading: true });
    setFirmList({
      firmList: await loadDataview({
        systemmetagroupid: "1599822188399800",
        paging: {
          sortColumnNames: {
            firmName: {
              sortType: "ASC", //эрэмбэлэх чиглэл
            },
          },
        },
      }),
      loading: false,
    });
  };

  useEffect(() => {
    callFunctionAsync();
  }, []);

  const firmChange = async (value) => {
    console.log(`Firm changed selected ${value}`);

    if (value !== "") {
      setMarkList({ ...markList, loading: true });
      setMarkList({
        markList: await loadDataview({
          systemmetagroupid: "1599554598533",
          criteria: {
            id: {
              0: {
                operator: "=",
                operand: value,
              },
            },
          },
          paging: {
            sortColumnNames: {
              markName: {
                sortType: "ASC", //эрэмбэлэх чиглэл
              },
            },
          },
        }),
        loading: false,
      });
    }
  };

  const markChange = async (value) => {
    console.log(`Mark changed selected ${value}`);

    if (value !== "") {
      setIndexList({ ...indexList, loading: true });
      setIndexList({
        indexList: await loadDataview({
          systemmetagroupid: "1599824590726192",
          criteria: {
            markid: {
              0: {
                operator: "=",
                operand: value,
              },
            },
          },
          paging: {
            sortColumnNames: {
              maindate: {
                sortType: "DESC", //эрэмбэлэх чиглэл
              },
            },
          },
        }),
        loading: false,
      });
    }
  };

  const indexChange = async (value) => {
    console.log(`Index changed selected ${value}`);

    if (value !== "") {
      setEditionList({ ...editionList, loading: true });
      setEditionList({
        editionList: await loadDataview({
          systemmetagroupid: "1599825541835232",
          criteria: {
            mainid: {
              0: {
                operator: "=",
                operand: value,
              },
            },
          },
          paging: {
            sortColumnNames: {
              pricenewusd: {
                sortType: "ASC", //эрэмбэлэх чиглэл
              },
            },
          },
        }),
        loading: false,
      });
    }
  };

  // console.log("FITMLIST", firmList);
  // console.log("MARKLIST", markList);
  // console.log("INDEXLIST", indexList);
  // console.log("EDITIONLIST", editionList);

  function handleBlur() {
    console.log("blur");
  }

  function handleFocus() {
    console.log("focus");
  }

  const firmddd = () => {
    console.log("АААААААААААААААААААААААААААААА");
  };

  //  ######  ####### ####### #     # ######  #     #
  //  #     # #          #    #     # #     # ##    #
  //  #     # #          #    #     # #     # # #   #
  //  ######  #####      #    #     # ######  #  #  #
  //  #   #   #          #    #     # #   #   #   # #
  //  #    #  #          #    #     # #    #  #    ##
  //  #     # #######    #     #####  #     # #     #

  return (
    <>
      <Form.Item
        name="firmid"
        hasFeedback
        label="Фирм"
        onChange={firmddd}
        // trigger={firmddd}
        rules={[{ required: true, message: "Фирмээ сонгоно уу!" }]}
      >
        <Select
          className="moto-select-firm"
          loading={firmList.loading}
          showSearch
          allowClear
          placeholder="Фирм"
          optionFilterProp="children"
          onChange={firmChange}
          onSelect={firmddd}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children[0].toLowerCase().indexOf(input.toLowerCase()) >=
                0
              );
            } else {
              return false;
            }
          }}
        >
          {firmList.firmList
            .filter(
              (v, i, a) =>
                a.findIndex((t) => t.firmcountrymon === v.firmcountrymon) === i
            )
            .map((item, index) => (
              <OptGroup label={item.firmcountrymon} key={index}>
                {firmList.firmList.map((option) => {
                  if (item.firmcountrymon === option.firmcountrymon) {
                    return (
                      <Option key={option.id} value={option.id}>
                        {option.firmname}
                        {/* <Badge
                            count={option.count}
                            className="gx-float-right"
                          /> */}
                        <Badge
                          count={option.count}
                          // className="gx-float-right"
                          className="moto-badge-firm"
                        />
                      </Option>
                    );
                  }
                })}
              </OptGroup>
            ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="mark"
        hasFeedback
        label="Марк"
        rules={[{ required: true, message: "Маркаа сонгоно уу!" }]}
      >
        <Select
          className="moto-select-firm"
          loading={markList.loading}
          showSearch
          allowClear
          placeholder="Марк"
          optionFilterProp="children"
          onChange={markChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children[0].toLowerCase().indexOf(input.toLowerCase()) >=
                0
              );
            } else {
              return false;
            }
          }}
        >
          {markList.markList.map((option) => {
            return (
              <Option key={option.markid} value={option.markid}>
                {option.markname}
                <Badge count={option.count} className="moto-badge-firm" />
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item name="index" hasFeedback label="Цуврал">
        <Select
          className="moto-select-firm"
          loading={indexList.loading}
          showSearch
          placeholder="Цуврал"
          optionFilterProp="children"
          onChange={indexChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children[0].toLowerCase().indexOf(input.toLowerCase()) >=
                0
              );
            } else {
              return false;
            }
          }}
        >
          {indexList.indexList.map((option) => {
            return (
              <Option key={option.mainid} value={option.mainid}>
                {option.maindate2}
                <Badge count={option.count} className="moto-badge-firm" />
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item name="edition" hasFeedback label="Хувилбар">
        <Select
          className="moto-select-firm"
          loading={editionList.loading}
          showSearch
          placeholder="Хувилбар"
          optionFilterProp="children"
          onChange={null}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) => {
            if (option.value) {
              return (
                option.children[0].toLowerCase().indexOf(input.toLowerCase()) >=
                0
              );
            } else {
              return false;
            }
          }}
        >
          {editionList.editionList.map((option) => {
            return (
              <Option key={option.id} value={option.id}>
                {option.cartrim}{" "}
                <span className="gx-float-right gx-mr-5 gx-ml-2 gx-fs-sm gx-font-weight-light gx-color-light-purple">
                  {option.body2modelcodefull} • {option.engine2disp} cc •{" "}
                  {option.drive2drivename} • {option.drive2transmissionfull}
                </span>
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    </>
  );
};

export default MotocarFormTech;
