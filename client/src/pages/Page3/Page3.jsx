import img3 from '../../assets/Bouquets/mixedbouquet.jpg'
import ProductDetails from '../../components/ProductCard/Productdetails'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import '../../components/ProductCard/ProductDetails.css'
import Navbar from '../../components/Navbar/Navbar'

function Page3(){
    return( 
        <> 
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details'
        image={img3} name='Mixed Flowers' price='100'/>
        <Footer/>
        </>
    );
}
export default Page3