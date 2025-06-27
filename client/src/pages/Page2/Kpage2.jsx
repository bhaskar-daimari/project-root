import ProductDetails from "../../components/ProductCard/Productdetails";
import img2 from '../../assets/Keychains/Pompompurin.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Kpage2(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img2} name='Pompompurin' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Kpage2
