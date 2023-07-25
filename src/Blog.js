const BlogList = (props) => {

    const blog = props.blogs;

    const titles = props.title;

    return ( 
        <div>
            {blog.map((blogs, index)=>(
                <div className="blog-pr" key={index} >
                    {console.log(blogs.id)}
                    <h2>{blogs.title}</h2>
                    <p>Writted by{blogs.author}</p>
                </div>
            ))}
            <p>{titles}</p>
        </div>
     );
}
 
export default BlogList;