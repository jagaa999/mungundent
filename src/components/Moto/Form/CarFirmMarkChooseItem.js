import React, { useContext } from "react";
import MyIcon from "util/iconFunction";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Tooltip, Space, message } from "antd";
import { isEmpty } from "lodash";
import FormSelectFirmMark from "./FormSelectFirmMark";
import { LoadProcess, LoadProcessAdvanced2 } from "util/axiosFunction";
import MemberContext from "context/MemberContext";

//   ####  #####   ##   #####  #####
//  #        #    #  #  #    #   #
//   ####    #   #    # #    #   #
//       #   #   ###### #####    #
//  #    #   #   #    # #   #    #
//   ####    #   #    # #    #   #
const CarFirmMarkChooseItem = ({
  item,
  myCarFirmList,
  setMyCarFirmList,
  index,
}) => {
  const memberContext = useContext(MemberContext);
  const myFirmId = item.trgrecordid || undefined;

  const changeFirm = (value, label) => {
    myCarFirmList[index] = {
      ...myCarFirmList[index],
      trgrecordid: label.value,
      text1: label.children,
    };
    setMyCarFirmList([...myCarFirmList]);
  };

  const removeItFromDatabase = (myItem) => {
    //Энд тухайн META_RECORD бичлэгийг устгана.
    LoadProcessAdvanced2({
      request: {
        username: memberContext.state.memberUID,
        command: "motoMetaDmRecordMap_005",
        parameters: {
          id: myItem.id || "",
        },
      },
      preConfirmModal: {
        title: "Энэ холбоосыг устгахдаа итгэлтэй байна уу?",
        zIndex: 2500,
        icon: <ExclamationCircleOutlined />,
        content: "Энэ холбоос өмнө нь үүссэн байгааг анхаарна уу.",
        okText: "Устгая",
        okType: "danger",
        cancelText: "Больё",
      },
      successActions: [
        {
          action: () => message.warning("Амжилттай устгалаа."),
        },
        // {
        //   action: () => loadMotocar(),
        // },
      ],
    });
  };

  return (
    <Space
      direction="horizontal"
      style={{ display: "flex", marginBottom: 8 }}
      align="baseline"
    >
      <FormSelectFirmMark
        metaListId="1599822188399800"
        title=""
        placeholder="Фирмээ сонгоно уу"
        labelfield="firmname"
        valuefield="id"
        value={myFirmId}
        criteria={{}}
        paging={{
          sortColumnNames: {
            firmname: {
              sortType: "ASC",
            },
          },
        }}
        onChange={changeFirm}
        style={{ width: "170px" }}
      />

      {/* {!isEmpty(myFirmId) && (
        <FormSelectFirmMark
          metaListId="1586946725870325"
          title=""
          placeholder="Маркаа сонгоно уу"
          labelfield="markname"
          valuefield="markid"
          value={myMarkTemp}
          criteria={{
            firmid: {
              0: {
                operator: "=",
                operand: myFirmId,
              },
            },
          }}
          paging={{
            sortColumnNames: {
              markname: {
                sortType: "ASC",
              },
            },
          }}
          onChange={changeMark}
          style={{ width: "170px" }}
        />
      )} */}

      <Tooltip title="Талбарыг устгах" placement="right">
        <MyIcon
          type="icontrash-alt-solid"
          className="moto-icon-1-3"
          onClick={() => {
            console.log("myCarFirmList[index]", myCarFirmList[index]);

            if (!isEmpty(myCarFirmList[index].id)) {
              removeItFromDatabase(myCarFirmList[index]);
            }
            myCarFirmList.splice(index, 1);
            setMyCarFirmList([...myCarFirmList]);
          }}
        />
      </Tooltip>
    </Space>
    // </>
  );
};

export default CarFirmMarkChooseItem;
