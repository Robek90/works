export function appendItem(newCard, list) {
  let card = newCard;

  card['quantity'] = 1;

  return list.shoppingCartData.find((item) => item.shopCartId === card.shopCartId)
};

export function quantityItem(index, list, count) {
  const quantity = count;

  list[index] = {...list[index],quantity}

  return list
}

export function calcTotalSumm(list) {
  let result = list.reduce((sum, current) => sum + (+current.price * +current.quantity), 0);

  return result
}

export function calcTotalQuantity(list) {
  let result = list.reduce((quantity, current) => quantity + +current.quantity, 0);

  if(result < 2) {
    return [result,"product1"]
  }
  if(result > 1 && result < 5){
    return [result,"product2"]
  }
  if(result > 4) {
    return [result,"product3"]
  }
}
