
import './Bouquet.css'
import '../../components/Card/Card.css'
import '../../components/Footer/Footer.css'
import '../../components/Header/Header.css'
import Card from '../../components/Card/Card.jsx'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'


import img1 from '../../assets/Bouquets/Sunflower.jpg'
import img2 from '../../assets/Bouquets/PinkandWhiteRose.jpg'
import img3 from '../../assets/Bouquets/RoseBouquet.jpg'
import img4 from '../../assets/Bouquets/DoubleLayeredRose.jpg'
import img5 from '../../assets/Bouquets/tulip.jpg'
import img6 from '../../assets/Bouquets/BlueRose.jpg'
import img7 from '../../assets/Bouquets/mixedbouquet.jpg'
import img8 from '../../assets/Bouquets/RedRose.jpg'
import Navbar from '../../components/Navbar/Navbar.jsx'
function Bouquet() {
  return(
    <> 
    <Header/>
    <Navbar/>
    <h1>Crochet Flower</h1>
    
   <div className='card-container'>
    
    <Card image={img1} title="Sunflower" price="300" />
  
    <Card image={img2} tittle="Pink and White Rose" price="350" />
    <Card image={img3} tittle="Rose Bouquet" price="320" />
    <Card image={img4} tittle="DoubleLayeredRose" price="250"/>
    <Card image={img5} tittle='Tulip,Rose' price='100'/>
    <Card image={img6} tittle='Blue Rose' price='200'/>
    <Card image={img7} tittle='Mixed Bouquet' price='300'/>
    <Card image={img8} tittle='Red Rose' price='150'/>
   </div>
   <Footer/>
   </>
);
}
export default Bouquet
