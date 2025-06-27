import { useState } from 'react';
import './Bagcharm.css'
import '../../components/Card/Card.css'
import '../../components/Footer/Footer.css'
import '../../components/Header/Header.css'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

import img1 from '../../assets/Bagcharm/peachcharm.jpg'
import img2 from '../../assets/Bagcharm/starcharm.jpg'
import img3 from '../../assets/Bagcharm/Bowbutterfly.jpg'



function Bagcharm() {
    const [wishlist, setWishlist] = useState([]);

    const handleWishlistToggle = (itemData) => {
        if (itemData.isWishlisted) {
            // Add to wishlist
            setWishlist(prev => [...prev, itemData]);
            console.log(`Added ${itemData.tittle} to wishlist`);
        } else {
            // Remove from wishlist
            setWishlist(prev => prev.filter(item => item.tittle !== itemData.tittle));
            console.log(`Removed ${itemData.tittle} from wishlist`);
        }
    };

    return (
        <>
            <Header />
            <Navbar />
            <h1>Bagcharm</h1>
            
            {/* Optional: Display wishlist count */}
            {wishlist.length > 0 && (
                <div className="wishlist-info">
                    <p>❤️ {wishlist.length} item{wishlist.length > 1 ? 's' : ''} in your wishlist</p>
                </div>
            )}
            
            <div className='card-container'>
                <Card 
                    image={img1} 
                    tittle="Peach charm" 
                    price="220" 
                    onWishlistToggle={handleWishlistToggle}
                />
                <Card 
                    image={img2} 
                    tittle="Star charm" 
                    price="260" 
                    onWishlistToggle={handleWishlistToggle}
                />
                <Card 
                    image={img3} 
                    tittle="Bow Butterfly" 
                    price="320" 
                    onWishlistToggle={handleWishlistToggle}
                />
               
                
                  
            </div>
            <Footer />
        </>
    );
}

export default Bagcharm