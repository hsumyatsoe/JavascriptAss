import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from  'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Header extends Component {
    render() {
        return (
            <div className="sticky top-0 z-40 w-full bg-white border-b">
              <div className="container py-8">
                <div className="relative flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
                    <Link to="/"> 
                      Logo
                    </Link>
                  <div className="flex items-center">
                    <Link to="/" className="text-gray-400 hover:text-gray-500 transition duration-300 ease-in-out px-5">
                      <p>Home</p>
                    </Link>
                    <a href="#!" className="text-gray-400 hover:text-gray-500 transition duration-300 ease-in-out px-5">
                      <p>Shop</p>
                    </a>
                      <a href="#!" className="text-gray-400 hover:text-gray-500 transition duration-300 ease-in-out px-5">
                      <p>Collections</p>
                    </a>
                    <a href="#!" className="text-gray-400 hover:text-gray-500 transition duration-300 ease-in-out px-5">
                      <p>Sales</p>
                    </a>
                  </div>
                  <div className="flex items-center">  
                    <a href="#!" className="text-slate-500 dark:text-slate-400 text-sm leading-6 border-r">
                    <p className="text-sm pr-5">Login</p>
                  </a>          
                  <a href="#!" className="text-gray-400 hover:text-gray-500 transition duration-300 ease-in-out">
                    <FontAwesomeIcon icon={["far", "fa-heart"]} className="px-5 text-lg" />
                  </a>
                  <Link to="/carts" className="text-gray-400 hover:text-gray-700 transition duration-300 ease-in-out flex items-center">
                    <FontAwesomeIcon icon={["fas", "fa-cart-shopping"]} className="text-lg"/>
                    <div className="w-10"><p className="px-1 grid-cols-1">{this.props.numberCart}</p></div>
                  </Link>
                </div>      
                </div>
              </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        numberCart:state._todoProduct.numberCart
    }
}
export default connect(mapStateToProps,null)(Header)
