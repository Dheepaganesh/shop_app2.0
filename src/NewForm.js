import React, { useState } from 'react';
import CardVal from './GetCard';

const MyForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    location: '',
    rating: '',
    review:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loc=['Chennai','Banglore','Mumbai','Pune']
  const rate=[1,1.5,2,2.5,3,3.5,4,4.5,5]

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Name"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
        <select
        name="location"
        value={formData.location}
        onChange={handleChange}
    >
    {loc.map((ele, index) => (
        <option value={ele} key={index}>
        {ele}
        </option>
    ))}
    </select>


    <select
        name="rating"
        value={formData.rating}
        onChange={handleChange}
    >
    {rate.map((ele, index) => (
        <option value={ele} key={index}>
        {ele}
        </option>
    ))}
    </select>
    <textarea name="review" value={formData.review} onChange={handleChange}>{formData.review}</textarea>
      <button type="submit">Submit</button>
    </form>
    <CardVal formData={formData}/>
    </div>
    
  );
};

export default MyForm;
