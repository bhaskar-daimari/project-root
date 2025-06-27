import ProductDetails from "../../components/ProductCard/Productdetails";
import img7 from '../../assets/Keychains/Piggy.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Kpage7(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img7} name='Piggy' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Kpage7
