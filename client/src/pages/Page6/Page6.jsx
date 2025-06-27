import img6 from '../../assets/Bouquets/Sunflower.jpg'
import ProductDetails from '../../components/ProductCard/Productdetails'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import '../../components/ProductCard/ProductDetails.css'
import Navbar from '../../components/Navbar/Navbar'

function Page6(){
    return( 
        <> 
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details'
        image={img6} name='Sunflower,Rose' price='100'/>
        <Footer/>
        </>
    );
}
export default Page6