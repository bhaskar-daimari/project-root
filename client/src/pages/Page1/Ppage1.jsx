import ProductDetails from "../../components/ProductCard/Productdetails";
import img1 from '../../assets/Phonecharm/bluecinnamonroll.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Ppage1(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img1} name='Macaron Cinnamonroll' price='220'
        />
        
        <Footer/>

         

      </>
    );
}
export default Ppage1
