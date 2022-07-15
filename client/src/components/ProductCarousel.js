// import Carousel from 'react-bootstrap/Carousel';

// function UncontrolledExample() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="w-16"
//           src="https://rukminim1.flixcart.com/image/416/416/l5h2xe80/mobile/5/x/r/-original-imagg4xza5rehdqv.jpeg?q=70"
//           alt="Nothing Phone(1)"
//         />
//         <Carousel.Caption>
//           <h3>Nothing Phone(1)</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-20"
//           src="https://rukminim1.flixcart.com/image/416/416/koixwnk0/computer/b/i/z/na-gaming-laptop-asus-original-imag2ygghykjhv95.jpeg?q=70"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-16"
//           src="https://rukminim1.flixcart.com/image/416/416/l5h2xe80/mobile/5/x/r/-original-imagg4xza5rehdqv.jpeg?q=70&bg=20232a"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;







// import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from 'react-bootstrap/Carousel';
// import "../index.css";

// function ProductCarousel() {

// return (
// 	<div style={{ display: 'block', width: 1100, padding: 30 }}>
// 	<h4>React-Bootstrap Carousel Component</h4>
// 	<Carousel>
// 		<Carousel.Item interval={2500} className='nothingimg'>
// 		<img
// 			className="d-block w-20 nothingimg"
// src="https://rukminim1.flixcart.com/image/416/416/l5h2xe80/mobile/5/x/r/-original-imagg4xza5rehdqv.jpeg?q=70"
// 			alt="Image One"
// 		/>
// 		<Carousel.Caption>
// 			<h3>Label for first slide</h3>
// 			<p>Sample Text for Image One</p>
// 		</Carousel.Caption>
// 		</Carousel.Item>
// 		<Carousel.Item interval={2500}>
// 		<img
// 			className="d-block w-100"
// src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
// 			alt="Image Two"
// 		/>
// 		<Carousel.Caption>
// 			<h3>Label for second slide</h3>
// 			<p>Sample Text for Image Two</p>
// 		</Carousel.Caption>
// 		</Carousel.Item>
// 	</Carousel>
// 	</div>
// );
// }

// export default ProductCarousel;








import React, { useEffect } from 'react'
import { Carousel, Image } from 'react-bootstrap';
import "../index.css"

const ProductCarousel = () => {

  return  (

    <Carousel className='bg-dark'>

        <Carousel.Item >
            <Image className="mx-auto d-block" src="https://rukminim1.flixcart.com/image/416/416/l5h2xe80/mobile/5/x/r/-original-imagg4xza5rehdqv.jpeg?q=70" alt="e" />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                Nothing Phone (1)
              </h2>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <Image className="mx-auto d-block iq" src="https://rukminim1.flixcart.com/image/416/416/l2arp8w0/joystick/1/3/d/series-x-s-wireless-controller-xbox-original-imagdz2furpmhmjf.jpeg?q=70" alt="e" fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
              Xbox Series X/S Wireless
              </h2>
            </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
            <Image className="mx-auto d-block iq" src="https://rukminim1.flixcart.com/image/416/416/l26hdow0/smartwatch/j/r/o/1-4-sm-r870nzkainu-android-samsung-yes-original-imagdhf2ahk7nvmf.jpeg?q=70" alt="e" fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
              SAMSUNG Watch 4 44mm 
              </h2>
            </Carousel.Caption>
        </Carousel.Item>

    </Carousel>
  )
}

export default ProductCarousel