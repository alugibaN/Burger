export const GET_DATA = 'GET_DATA'
export const GET_DATA_SUCCESS ='GET_DATA_SUCCESS'
export const GET_DATA_FAILED = 'FETCH_DATA_FAILURE'


const url = 'https://norma.nomoreparties.space/api/ingredients'

export const getData = () => {
  return function(dispatch) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: GET_DATA_SUCCESS,
          data: [...data.data],
          success:data.success,
          dat:true
        })
      })
      .catch(err => {
        dispatch({
          type: GET_DATA_FAILED
        })
      })
  }
}


const postUrl = 'https://norma.nomoreparties.space/api/orders'

const postHead = (el) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingredients: el })
  }
}

export const postOrder = (ingr) => {
  return function (dispatch) {
    fetch(postUrl, postHead(ingr))
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch({
          type: 'POST_BURGER',
          order: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}