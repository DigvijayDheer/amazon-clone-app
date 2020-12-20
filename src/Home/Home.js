import React from 'react';
import banner from './banner.png';
import './Home.css';
import Product from '../Product/Product';

function Home() {
    return (
        <div className = "home">
            <img className = "home__image" src = {banner} alt = ""/>
            <div className = "home__row">
                <Product
                    id="12345"
                    title="Samsung Galaxy S10+ Plus 128GB+8GB RAM SM-G975F/DS Dual Sim"
                    price={36000.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg" />
                <Product
                    id="18389"
                    title="Redmi Note 8 Pro 128+8gb RAM"
                    price={18000.00}
                    rating={5}
                    image="https://i01.appmifile.com/webfile/globalimg/in/cms/19C951A9-2E5A-5E42-3944-F35A22187CBE.jpg" />
                <Product
                    id="12387"
                    title=" Apple iPhone XR (64GB) - White"
                    price={52000.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51PuFBgBK4L._SL1024_.jpg" />
                <Product
                    id="15769"
                    title="Realme 5 Pro Dual SIM Crystal Green 128GB and 8GB RAM"
                    price={7890.00}
                    rating={5}
                    image="https://cdn.movertix.com/media/catalog/product/cache/image/1200x/r/e/realme-5-pro-dual-sim-en-verde-cristal-de-128gb-y-8gb-ram.jpg" />
            </div>

            <div className="home__row">
                <Product
                    id="84328"
                    title="LEVIZO Men’s 100% Cotton Designer Printed Full Sleeves Regular Fit Shirt"
                    price={399.00}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/81rjPyEIoQL._AC_UL320_SR240,320_.jpg" />
                <Product
                    id="50984"
                    title="Elyraa Women's Embroidered 3/4 Sleeves White Top"
                    price={398.00}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51yr2cMxQoL._UX522_.jpg" />
                <Product
                    id="69538"
                    title="COTTON SHOPY Women's Jacquard Chiffon Saree With Unstitched Blouse Piece"
                    price={789.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81dEkyfRGeL._UL1500_.jpg" />
            </div>

            <div className="home__row">
                <Product
                    id="96048"
                    title="Amazon Brand - Solimo Wall Sticker for Living Room(Ride through Nature, ideal size on wall: 140 cm x 100 cm),Multicolour"
                    price={360.00}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51vIhgdIaNL._AC_SY350_.jpg" />
            </div>
           
        </div>
    )
}

export default Home
