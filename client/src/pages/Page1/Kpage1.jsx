import ProductDetails from "../../components/ProductCard/Productdetails";
import img1 from '../../assets/Keychains/Capybara.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Kpage1(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img1} name='Capybara' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Kpage1
