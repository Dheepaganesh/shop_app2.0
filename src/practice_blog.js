const BlogList = (props) => {
  const mydata = props.blogs;
  return mydata.map((ele) => console.log(ele?.id));
};

export default BlogList;
