import ProductDetails from "../../components/ProductCard/Productdetails";
import img4 from '../../assets/Keychains/Frog.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Kpage4(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img4} name='Frog' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Kpage4
