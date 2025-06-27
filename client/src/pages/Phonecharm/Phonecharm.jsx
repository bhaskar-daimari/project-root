import { useState } from 'react';
import './Phonecharm.css'
import '../../components/Card/Card.css'
import '../../components/Footer/Footer.css'
import '../../components/Header/Header.css'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

import img1 from '../../assets/Phonecharm/bluecinnamonroll.jpg'
import img2 from '../../assets/Phonecharm/greenbutterfly.jpg'
import img3 from '../../assets/Phonecharm/pinkbutterfly.jpg'
import img4 from '../../assets/Phonecharm/kuromi.jpg'


function Phonecharm() {
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
            <h1>Phonecharms</h1>
            
            {/* Optional: Display wishlist count */}
            {wishlist.length > 0 && (
                <div className="wishlist-info">
                    <p>❤️ {wishlist.length} item{wishlist.length > 1 ? 's' : ''} in your wishlist</p>
                </div>
            )}
            
            <div className='card-container'>
                <Card 
                    image={img1} 
                    tittle="Macaron Cinnamonroll" 
                    price="220" 
                    onWishlistToggle={handleWishlistToggle}
                />
                <Card 
                    image={img2} 
                    tittle="Green butterfly" 
                    price="260" 
                    onWishlistToggle={handleWishlistToggle}
                />
                <Card 
                    image={img3} 
                    tittle="Pink Butterfly " 
                    price="320" 
                    onWishlistToggle={handleWishlistToggle}
                />
                <Card 
                    image={img4} 
                    tittle="Kuromi" 
                    price="250" 
                    onWishlistToggle={handleWishlistToggle}
                />
                
                  
            </div>
            <Footer />
        </>
    );
}

export default Phonecharm