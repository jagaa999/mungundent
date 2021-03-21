import React, { useState } from "react";
import myAxiosZ from "util/myAxiosZ";
import { message, Modal } from "antd";
import { isEmpty } from "lodash";

//  ######  ######  #######  #####  #######  #####   #####
//  #     # #     # #     # #     # #       #     # #     #
//  #     # #     # #     # #       #       #       #
//  ######  ######  #     # #       #####    #####   #####
//  #       #   #   #     # #       #             #       #
//  #       #    #  #     # #     # #       #     # #     #
//  #       #     # #######  #####  #######  #####   #####
export function LoadProcess(props) {
  const myParams = {
    request: {
      username: props.username || "d14BuUMTjSRnLbrFXDOXM80fNfa2", //Moto Guest
      password: props.password || "89",
      command: props ? props.command : "",
      parameters: {
        ...props.parameters,
        // newsid: "",
        // memberid: "",
      },
    },
  };

  myAxiosZ(myParams)
    .then((myData) => {
      const myDetail = myData.response || {};
      if (myDetail.status === "error") {
        message.error(myDetail.text.toString(), 7);
      } else {
        if (props.successMessage !== "none") {
          message.success(
            props.successMessage ||
              "Амжилттай гүйцэтгэлээ. Өдрийг сайхан өнгөрүүлээрэй."
          );
        }
        return isEmpty(myDetail.result) ? {} : myDetail.result;
      }
    })
    .catch((error) => {
      if (props.errorMessage !== "none") {
        message.error(props.errorMessage || error.toString, 7);
      }
      console.log(error);
      return {};
    });
}

const letRunLoadProcessAdvanced2 = (props) => {
  console.log("ЦААШАА АЖИЛЛАЖ байна");

  const myParams = {
    request: {
      ...props.request,
      username: props.request.username || "d14BuUMTjSRnLbrFXDOXM80fNfa2", //Moto Guest
      password: props.request.password || "89",
    },
  };

  myAxiosZ(myParams)
    .then((myData) => {
      console.log("Axios ажилласан");

      const myDetail = myData.response || {};
      if (myDetail.status === "error") {
        message.error(myDetail.text.toString(), 7);
      } else {
        props.successActions.map((item, index) => {
          console.log("successActions ажилласан", item);
          return item.action();
        });

        return isEmpty(myDetail.result) ? {} : myDetail.result;
      }
    })
    .catch((error) => {
      console.log("Axios алдаа өгсөн");

      if (props.errorMessage !== "none") {
        message.error(props.errorMessage || error.toString, 7);
      }
      console.log(error);
      return {};
    });
};

export const LoadProcessAdvanced2 = (props) => {
  const { preConfirmModal } = props;

  if (!isEmpty(preConfirmModal)) {
    console.log("preConfirmModal байгаа");
    Modal.confirm({
      ...preConfirmModal,
      onOk() {
        console.log("OK даржээ");
        letRunLoadProcessAdvanced2(props);

        // return new Promise((resolve, reject) => {
        //   // setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        //   console.log("OK даржээ");
        //   letRunLoadProcessAdvanced2(props);
        // }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {
        console.log("Cancel даржээ");
        // return null;
      },
    });
  } else {
    console.log("preConfirmModal байхгүй");
    letRunLoadProcessAdvanced2(props);
  }
};

//  ######     #    #######    #    #     # ### ####### #     #
//  #     #   # #      #      # #   #     #  #  #       #  #  #
//  #     #  #   #     #     #   #  #     #  #  #       #  #  #
//  #     # #     #    #    #     # #     #  #  #####   #  #  #
//  #     # #######    #    #######  #   #   #  #       #  #  #
//  #     # #     #    #    #     #   # #    #  #       #  #  #
//  ######  #     #    #    #     #    #    ### #######  ## ##
export function loadDataview(props) {
  const myParams = {
    request: {
      username: "d14BuUMTjSRnLbrFXDOXM80fNfa2", //Moto Guest
      password: "89",
      command: "PL_MDVIEW_004",
      parameters: {
        systemmetagroupid: props ? props.systemmetagroupid : "",
        ignorepermission: "1",
        showQuery: "0",
        criteria: {
          ...props.criteria,
        },
        paging: {
          ...props.paging,
        },
      },
    },
  };

  // console.log("loadDataview - myParams", myParams);

  return myAxiosZ(myParams)
    .then((myResponse) => {
      // console.log("Цаанаас юу ирэв?", myResponse);
      const myData = myResponse.response;

      if (myData.status === "error") {
        message.error(myData.text.toString(), 7);
        return [];
      } else {
        const myPaging = myData.result?.paging || {};
        const myArray = myData.result || [];
        delete myArray["aggregatecolumns"];
        delete myArray["paging"];

        return Object.values(myArray);
      }
    })
    .catch((error) => {
      message.error(error.toString(), 7);
      return [];
    });
}

//  ######  #     # ####### ######        # #######  #####  #######
//  #     # #     # #     # #     #       # #       #     #    #
//  #     # #     # #     # #     #       # #       #          #
//  #     # #     # #     # ######        # #####   #          #
//  #     #  #   #  #     # #     # #     # #       #          #
//  #     #   # #   #     # #     # #     # #       #     #    #
//  ######     #    ####### ######   #####  #######  #####     #
export function loadDVObject(props) {
  const myParams = {
    request: {
      username: "d14BuUMTjSRnLbrFXDOXM80fNfa2", //Moto Guest
      password: "89",
      command: "PL_MDVIEW_004",
      parameters: {
        systemmetagroupid: props ? props.systemmetagroupid : "",
        ignorepermission: "1",
        showQuery: "0",
        criteria: {
          ...props.criteria,
        },
        paging: {
          ...props.paging,
        },
      },
    },
  };

  return myAxiosZ(myParams)
    .then((myResponse) => {
      const myData = myResponse.response;

      if (myData.status === "error") {
        message.error(myData.text.toString(), 7);
        return {};
      } else {
        const myArray = myData.result || {};
        return myArray;
      }
    })
    .catch((error) => {
      message.error(error.toString(), 7);
      return {};
    });
}
