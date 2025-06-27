import ProductDetails from "../../components/ProductCard/Productdetails";
import img9 from '../../assets/Keychains/Duck.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Kpage9(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img9} name='Duck' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Kpage9
