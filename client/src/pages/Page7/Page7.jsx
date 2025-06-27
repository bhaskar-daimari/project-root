import img7 from '../../assets/Bouquets/PinkandWhiteRose.jpg'
import ProductDetails from '../../components/ProductCard/Productdetails'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import '../../components/ProductCard/ProductDetails.css'
import Navbar from '../../components/Navbar/Navbar'
function Page7(){
    return( 
        <> 
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details'
        image={img7} name='(Pink,White) Rose' price='100'/>
        <Footer/>
        </>
    );
}
export default Page7