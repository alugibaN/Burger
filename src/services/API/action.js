import { request } from "../../utils/utils";

export const GET_DATA = "GET_DATA";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED = "FETCH_DATA_FAILURE";
export const POST_BURGER = 'POST_BURGER'

export const getData = () => {
  return function (dispatch) {
    request(`ingredients`)
      .then((data) => {
        dispatch({
          type: GET_DATA_SUCCESS,
          data: [...data.data],
          success: data.success,
          dat: true,
        });
      })
      .catch(console.error);
  };
};

const postHead = (el) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients: el }),
  };
};

export const postOrder = (ingr) => {
  return function (dispatch) {
    request(`orders`, postHead(ingr))
      .then((data) => {
        dispatch({
          type: POST_BURGER,
          order: data,
        });
      })
      .catch(console.error);
  };
};
