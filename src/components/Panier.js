// idea:  eni njib les books li chrehom
// ne7seb e soum mte3hom

import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../redux/actions/panierACTIONS';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import bookReducer from './../redux/reducers/bookReducer';

function Panier() {   
	const cart = JSON.parse(localStorage['cart']);
  //  const count = JSON.parse(localStorage['count']); 
  // console.log(cart)

	const dispatch = useDispatch();


	return (
		<div>
			{cart.map((el) => (
				<div>
					<h1> {el.name} </h1>
					<h2> {el.price} </h2>
					<button onClick={() => {dispatch(increment(el));  window.location.reload()}}>+</button>
					<span>  {el&& el.qty}  </span>
					<button>-</button>
					<h3 > total {el.qty * el.price}</h3>
				</div>
			))}
		</div>
	);
}
export default Panier;
