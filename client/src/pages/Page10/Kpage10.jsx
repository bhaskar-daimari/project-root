import ProductDetails from "../../components/ProductCard/Productdetails";
import img10 from '../../assets/Keychains/MiniBouquet.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Kpage10(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img10} name='Mini Bouquet' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Kpage10
