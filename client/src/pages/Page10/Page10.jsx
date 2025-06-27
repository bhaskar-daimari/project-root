import img10 from '../../assets/Bouquets/Lily.jpg'
import ProductDetails from '../../components/ProductCard/Productdetails'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import '../../components/ProductCard/ProductDetails.css'
import Navbar from '../../components/Navbar/Navbar'

function Page10(){
    return( 
        <> 
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details'
        image={img10} name='Lily' price='100'/>
        <Footer/>
        </>
    );
}
export default Page10