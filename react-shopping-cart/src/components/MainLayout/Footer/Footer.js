import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer (props){    
    return(
    	<div className="w-full bg-slate-800">
	        <div className="container">
	        	<div className="py-8">
	        		<div className="relative flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
	        			<div className="flex items-center">
	        				<a href="#!" className="text-gray-400 hover:text-gray-500 transition duration-300 ease-in-out px-5">
			    				<p>Privacy Policy</p>
			    			</a>
			    			<a href="#!" className="text-gray-400 hover:text-gray-500 transition duration-300 ease-in-out px-5">
			    				<p>Delivery</p>
			    			</a>
	        			</div>
	        			<div className="flex items-center">
	        				<a href="#!" className="text-gray-400 hover:text-gray-500 transition duration-300 ease-in-out px-5">
			    				<p>Contact Us</p>
			    			</a>
	        			</div>
	        		</div>
	        		
	        	</div>
	        </div>
        </div>
    )
}

export default Footer;