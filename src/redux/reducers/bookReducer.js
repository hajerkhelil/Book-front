import { ADDTOCART, INCREMENT } from '../types/panierTYPES.js';
import { GET_BOOK, GET_BOOKS } from '../types/booktypes';
import { DECREMENT } from './../types/panierTYPES';

const initialState = {
	books: [],
	book: {},
	cart: [],
	count: 1,
};

const bookReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_BOOKS:
			return { ...state, books: payload.books };

		case GET_BOOK:
			return { ...state, book: payload.foundbook };

		case ADDTOCART:
			console.log(payload);

			localStorage.setItem('cart',JSON.stringify([...state.cart, { ...payload, qty:  payload.qty+1 }]));
       const t=state.cart.find((p) => p._id == payload._id)
      
    // return{...state, cart: state.map(el=>el._id==payload._id? ({...el,qty:el.qty+1})   : el  )}

    	 	return { ...state, cart: [...state.cart, { ...payload, qty: payload.qty+1 }] };
		
			// if (t) {
			
			// 	return {
			// 		...state,
			// 		cart: [...state.cart, { ...payload, qty: payload.qty+1 }],
			// 	};
			// } else {
			// 	return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };
			// }

			
				case INCREMENT:
          
			const cart = JSON.parse(localStorage['cart']);
			const newcart = cart.map((el) =>   el._id==payload._id ? ({ ...el, qty: el.qty + 1 }) :el );
			localStorage.setItem('cart', JSON.stringify(newcart));
			// localStorage.setItem('count', state.count);
			return { ...state, cart:newcart}; 



			

		default:
			return state;
	}
};

export default bookReducer;
