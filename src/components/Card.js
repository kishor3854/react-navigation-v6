import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Card = ({ cardData, onClickCard}) => {
  console.log('cardData', cardData);
  const ref = useRef();
  return (
    <Flippy
      flipOnHover={true}
      flipOnClick={false}
      flipDirection="horizontal"
      ref={ref}
      style={{ width: '250px', height: '300px' }}
      onClick={()=>onClickCard(cardData.id)}
    >
      <FrontSide style={{ backgroundColor: '#F9FAF8', borderRadius: 20, }} >
        <img style={{ backgroundColor: 'red', width: '100%', resize: 'block', height: '50%' }} src={cardData.images[1]} alt="mouse corsair" class="mouse" />
        <h4>Name : {cardData.title}</h4>
        <h4>price : {cardData.price}</h4>
      </FrontSide>
      <BackSide style={{ backgroundColor: '#F9FAF8', borderRadius: 20, }}>
        <h3>Product Name : {cardData.title}</h3>
        <h4>Brand : {cardData.brand}</h4>
        <h5>Description : {cardData.description}</h5>
      </BackSide>
    </Flippy>
  )
}

export default Card;