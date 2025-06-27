import ProductDetails from "../../components/ProductCard/Productdetails";
import img3 from '../../assets/Bagcharm/Bowbutterfly.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Bpage3(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img3} name='Bow Butterfly' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Bpage3
