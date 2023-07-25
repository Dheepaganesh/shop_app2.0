// import styled from "styled-components";
// import { FaStar, FaStarHalf } from "react-icons/fa";
// import { useState } from "react";

// const StyledStar = styled(FaStar)`
//   font-size: 85px;
//   cursor: pointer;
// `;

// const StyledStarHalf = styled(FaStarHalf)`
//   font-size: 85px;
//   cursor: pointer;
// `;

// function Stars() {
//   const [rating, setRating] = useState(0);

//   const handleMouseEnter = (rating) => {
//     setRating(rating);
//   };

//   const handleMouseLeave = () => {
//     setRating(0);
//   };

//   const renderStars = () => {
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating - fullStars >= 0.5;
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       if (i <= fullStars) {
//         stars.push(<StyledStar key={i} onClick={() => handleMouseEnter(i)} />);
//       } else if (hasHalfStar && i === fullStars + 1) {
//         stars.push(<StyledStarHalf key={i} onClick={() => handleMouseEnter(i + 0.5)} />);
//       } else {
//         stars.push(<StyledStar key={i} onClick={() => handleMouseEnter(i)} />);
//       }
//     }
//     return stars;
//   };

//   return (
//     <div className="App">
//       <div onMouseLeave={handleMouseLeave}>{renderStars()}</div>
//     </div>
//   );
// }

// export default Stars;

import React from "react";


class Rating extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating || null,
      temp_rating: null
    };
  }

  handleMouseover(rating) {
    this.setState(prev => ({
      rating,
      temp_rating: prev.rating
    }));
  }

  handleMouseout() {

    this.setState(prev => ({
      rating: prev.temp_rating
    }));
  }

  rate(rating) {
    this.setState({
      rating,
      temp_rating: rating
    });
  }

  render() {
    const { rating } = this.state;
    let stars = [];
    for (let i = 0; i < 5; i++) {
      console.log('i', i);
      let klass = "ion-ios-star-outline";
      if (this.state.rating >= i && this.state.rating !== null) {
        klass = "ion-ios-star";
      }
      stars.push(
        <i
          className={klass}
          onMouseOver={() => this.handleMouseover(i)}
          onClick={() => this.rate(i)}
          onMouseOut={() => this.handleMouseout()}
        />
      );
    }
    return (
      <div className="rating">
        {stars}
      </div>
    );
  }
}

export default Rating;