import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';



const Star = (props) => {
  let ratings=props.rate
  const getStr = () => {
    const icons = [];
    const roundedRating = ratings
    for (let i = 1; i <= 5; i++) {
      if (roundedRating >= i) {
        icons.push(<FaStar key={i} color='black' size="20px"/>);
      } else if (roundedRating >= i - 0.5) {
        icons.push(<FaStarHalfAlt key={i} color='black' size="20px"/>);
      } else {
        icons.push(<FaRegStar key={i} color='black' size="20px"/>);
      }
    }
    return icons;
  };
  return <div>{getStr()}</div>;
};
export default Star;