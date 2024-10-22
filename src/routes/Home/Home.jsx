import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


export default function Home() {

  const images = [
    'src/assets/agua.png',
    'src/assets/floresta.png',
    'src/assets/gelo.png'
  ];


  return (

    <div>
      <Zoom scale={0.4}>
        {
          images.map((img, index) => <img key={index} style={{ width: "100%", height: "600px" }} src={img} />)
        }
      </Zoom>
    </div>
  )
}
