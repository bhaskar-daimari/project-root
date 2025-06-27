import ProductDetails from "../../components/ProductCard/Productdetails";
import img1 from '../../assets/Bouquets/tulip.jpg'
import '../../components/ProductCard/ProductDetails.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";



function Page1(){
    return(
        <>
        <Header/>
        <Navbar/>
        <ProductDetails className='Product-details' 
        image={img1} name='Mixed Rose,Tulip' price='150'
        />
        
        <Footer/>

         

      </>
    );
}
export default Page1
