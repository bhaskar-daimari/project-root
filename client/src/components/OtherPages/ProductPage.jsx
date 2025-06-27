import React from 'react';
import { useParams } from 'react-router-dom';

import Kpage1 from '../../pages/Page1/Kpage1';
import Kpage2 from '../../pages/Page2/Kpage2';
import Kpage3 from '../../pages/Page3/Kpage3';
import Kpage4 from '../../pages/Page4/Kpage4';
import Kpage5 from '../../pages/Page5/Kpage5';
import Kpage6 from '../../pages/Page6/Kpage6';
import Kpage7 from '../../pages/Page7/Kpage7';
// import Kpage8 from '../../pages/Page8/Kpage8';
import Kpage9 from '../../pages/Page9/Kpage9';
import Kpage10 from '../../pages/Page10/Kpage10';

export default function ProductPage() {
  const { id } = useParams();

  switch(id) {
    case 'Capybara':
      return <Kpage1 />;
    case 'Pompompurin':
      return <Kpage2 />;
    case 'crochetcat':
      return <Kpage3 />;
    case 'Frog':
      return <Kpage4 />;
    case 'Tata':
      return <Kpage5 />;
    case 'Miffy':
      return <Kpage6 />;
    case 'Piggy':
      return <Kpage7 />;
    // case 'StrawberryPiggy':
    //   return <Kpage8 />;
    case 'Duck':
      return <Kpage9 />;
    case 'MiniBouquet':
      return <Kpage10 />;
    default:
      return <div>Product Not Found</div>;
  }
}
