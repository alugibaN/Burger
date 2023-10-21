export const reducer = (state, action) => {
  switch (action.type) {
    case 'SUM_PRICES':
      const totalSum = action.items.reduce((sum, item) => sum + item.price, 0);
      return { totalSum };
      case 'REMOVE_PRICE':
        return  {totalSum:'0'}
    default:
      return state;
  }
};