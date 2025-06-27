import ProductDetails from "../../components/ProductCard/Productdetails";
import img2 from '../../assets/Bagcharm/starcharm.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Bpage2(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img2} name='Star charm' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Bpage2
