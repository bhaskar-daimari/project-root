import ProductDetails from "../../components/ProductCard/Productdetails";
import img1 from '../../assets/Bagcharm/peachcharm.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Bpage1(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img1} name='Peach Charm' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Bpage1
