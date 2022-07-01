import React from 'react';
import ProductLists from './Products/Products';
import Footer from './MainLayout/Footer/Footer';

function Home (props){
    
    return(
        <div>
            <ProductLists />
            <Footer />
        </div>
    )
}

export default Home;