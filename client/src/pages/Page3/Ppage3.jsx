import ProductDetails from "../../components/ProductCard/Productdetails";
import img3 from '../../assets/Phonecharm/pinkbutterfly.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Ppage3(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img3} name='Pink Butterfly' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Ppage3
