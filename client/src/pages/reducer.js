export const initialState= {
  basket: [
    {
      id:"1",
      title:'Business Development',
      description:'tasks and processes to develop and implement growth opportunities',
      price:"140",
      thumbnail:'https://sportslearning.online/uploads/thumbnails/course_thumbnails/course_thumbnail_default_D2UzsVO1.jpg',
      content:'Business development is the creation of long-term value for an organization from customers, markets, and relationships. Business development can be taken to mean any activity by either a small or large organization, non-profit or for-profit enterprise which serves the purpose of ‘developing’ the business in some way.',
      user_id:"2"
    },
    {
      id:"1",
      title:'Business Development',
      description:'tasks and processes to develop and implement growth opportunities',
      price:"140",
      thumbnail:'https://sportslearning.online/uploads/thumbnails/course_thumbnails/course_thumbnail_default_D2UzsVO1.jpg',
      content:'Business development is the creation of long-term value for an organization from customers, markets, and relationships. Business development can be taken to mean any activity by either a small or large organization, non-profit or for-profit enterprise which serves the purpose of ‘developing’ the business in some way.',
      user_id:"2"
    },
    
  ],
  user: null,
};

export const getBasketTotal = (basket) => 
 basket?.reduce((amount, item) => item.price + amount, 0);

 console.log("1",getBasketTotal)

const reducer = (state, action) => {
  console.log("Action Happened", action)
  switch (action.type) {
    case 'ADD_TO_BASKET':
      //logic for adding item to basket
      return { 
        ...state,
        basket: [...state.basket, action.item],
      }
      // break;

    case 'REMOVE_FROM_BASKET':
        //logic for removing item from basket

      //cloned the basket
      let newBasket = [...state.basket];
      
      
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0 ) {
        //item exists in basket and you can remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as it is not in the basket`);
      }
      return { ...state, basket: newBasket };
      // break;
    default:
      return state;
  }

}
export default reducer;