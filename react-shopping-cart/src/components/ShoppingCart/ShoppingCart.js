import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { IncreaseQuantity,DecreaseQuantity,DeleteCart } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function ShoppingCart({items,IncreaseQuantity,DecreaseQuantity,DeleteCart}){
  
    let ListCart = [];
    let TotalCart=0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
        console.log(items.Carts[item])
    });

    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }
    
    let cartData;

    return(
        <div className="container py-12">
            <div className="m-8 grid grid-cols-3 justify-evenly">
                <div className="bg-white border col-span-2 p-4">
                    <div className="border-b border-slate-200 pb-4 flex justify-between">
                        <h1 className="flex-auto text-lg font-semibold text-slate-900">
                          Shopping Cart
                        </h1>
                        <h1 className="flex text-lg font-semibold text-slate-900 text-right"><span className="pr-2">{ListCart.length}</span>Items</h1>
                    </div>
                    {ListCart.length === 0 && <p className="text-center p-4">No product in the cart.</p>}
                    {ListCart.length !== 0 && 
                        <div className="mb-3">
                            <table className="table-auto w-full">
                                <thead className="py-8">
                                    <tr>
                                        <th className="p-4 py-8"><span className="btn btn-info border-2 border px-1 rounded-md text">-</span></th>
                                        <th className="p-4 py-8 text-left">Product Detail</th>
                                        <th className="p-4 py-8">Price</th>
                                        <th className="p-4 py-8">Quantity</th>
                                        <th className="p-4 py-8">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ListCart.map((item,key)=>{
                                            return(
                                                <tr key={key} className="mb-3">    
                                                    <td className="p-4 py-3">
                                                        <span className="btn btn-info border-2 border-rose-600 px-1 rounded-md text-red-600" onClick={()=>DeleteCart(key)}>-</span>
                                                    </td>
                                                    <td className="flex items-center py-3">
                                                        <div className="pr-3">
                                                            <img src={item.image} width="40" height="68" className="flex-none rounded-md bg-slate-100"/>
                                                        </div>
                                                        <p>{item.name}</p>
                                                    </td>
                                                    <td className="text-center py-3">$ {item.price} </td>
                                                    <td className="text-center py-3">
                                                        <span className="btn btn-primary pr-1" style={{margin:'2px'}} onClick={()=>DecreaseQuantity(key)}>-</span>
                                                        <span className="btn btn-info border py-1 px-4 rounded-md">{item.quantity}</span>
                                                        <span className="btn btn-primary pl-1" style={{margin:'2px'}} onClick={()=>IncreaseQuantity(key)}>+</span>
                                                    </td>
                                                    <td className="text-center">$ { TotalPrice(item.price,item.quantity)}</td>
                                                </tr>
                                            )
                                        })
                                            
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                    <div className="pt-3">
                        <Link to="/" className="flex items-center text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out">
                          <FontAwesomeIcon icon={["fas", "fa-chevron-left"]} className="text-sm pr-2"/>
                          <p>Continue Shopping</p>
                        </Link>
                    </div>
                </div> 
                <div className="bg-gray-100 p-4">
                    <div className="border-b border-slate-200 pb-4 flex justify-between">
                        <h1 className="flex-auto text-lg font-semibold text-slate-900">
                          Order Summary
                        </h1>
                    </div>
                    {ListCart.length === 0 && 
                        <div className="py-3">
                            <p>No order to proceed.</p>
                        </div>
                    }

                    {ListCart.length !== 0 && 
                        <div className="py-3 flex flex-col w-full">
                            <div>
                                <div className="py-5 flex justify-between">
                                    <h4 className="flex-auto text-sm font-semibold text-slate-900">
                                      <span className="uppercase">Items</span>
                                      <span className="pl-2">{ListCart.length}</span>
                                    </h4>
                                    <h4 className="flex text-sm font-semibold text-slate-900 text-right">$ {Number(TotalCart).toLocaleString('en-US')}</h4>
                                </div>
                                <div>
                                    <h4 className="flex text-sm font-semibold text-slate-900 text-right py-2">Shipping</h4>
                                    <div className="w-full text-sm py-2 px-4 border rounded bg-white">
                                      Free shipping
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-end mt-8">
                                <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                  Check Out
                                </button>
                            </div>
                        </div>
                    }
                </div> 
            </div>
        </div>
    )
}
const mapStateToProps = state =>{
   console.log(state)
    return{
        items:state._todoProduct
    }
}

export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(ShoppingCart)
