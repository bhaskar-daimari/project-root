import ProductDetails from "../../components/ProductCard/Productdetails";
import img6 from '../../assets/Keychains/Miffy.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Kpage6(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img6} name='Miffy' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Kpage6;
