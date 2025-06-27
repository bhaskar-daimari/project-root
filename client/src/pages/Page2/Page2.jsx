import img2 from '../../assets/Bouquets/BlueRose.jpg'
import ProductDetails from '../../components/ProductCard/Productdetails'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import '../../components/ProductCard/ProductDetails.css'
import Navbar from '../../components/Navbar/Navbar'
function Page2(){
    return( 
        <> 
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details'
        image={img2} name='Blue Roses' price='100'/>
        <Footer/>
        </>
    );
}
export default Page2