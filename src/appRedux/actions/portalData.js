import axios from "../../util/axiosConfig";

export const loadPortalData = (myParams) => {
  return function (dispatch, getState) {
    // dispatch(loadPortalDataStart());

    const myparams = {
      request: {
        sessionid: "efa772a2-1923-4a06-96d6-5e9ecb4b1dd4",
        command: "PL_MDVIEW_004",
        parameters: {
          //"systemmetagroupid": "1587100905303413",
          systemmetagroupid: "1587197820548033", //news list
          showQuery: "0",
          paging: {
            pageSize: params.results || "15", //нийтлэлийн тоо
            offset: params.page || "1", //хуудасны дугаар
            sortColumnNames: {
              publisheddate: {
                //эрэмбэлэх талбар
                sortType: "DESC", //эрэмбэлэх чиглэл
              },
            },
          },
        },
      },
    };

    axios
      .get(`orders.json?&auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then((response) => {
        const loadedOrders = Object.entries(response.data).reverse();
        dispatch(loadOrdersSuccess(loadedOrders));
      })
      .catch((err) => dispatch(loadOrdersError(err)));
  };
};
