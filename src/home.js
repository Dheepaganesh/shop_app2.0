import { useState } from "react"
import BlogList from "./Blog";


const Home = () => {

    const[value,setValue]=useState('Deepak')



    const handleCL=(e)=>{
        setValue('Dheepaganesh')
    }


    // const [blog,setblog]= useState(
    //     [{title:'Food',body:'Zomato is mostly used food app',author:'deepak',id:"1"},
    //     {title:'Street',body:'Street cricket is Useful',author:'akshay',id:"2"},
    //     {title:'News',body:'Tsunami in Chennai',author:'kumar',id:"3"}
    // ]);

    const [blog,setblog]= useState(
        [{title:'Food',body:'Zomato is mostly used food app',author:'deepak',id:"1"},
        {title:'Street',body:'Street cricket is Useful',author:'akshay',id:"2"},
        {title:'News',body:'Tsunami in Chennai',author:'deepak',id:"3"}
    ]);


    return ( 
        <div className="home">
            <button onClick={handleCL}>Click For Full Name</button>
            <h1>{value}</h1>
            <BlogList blogs={blog} titles="deepak"/>
            <BlogList blogs={blog.filter*((ele)=>ele?.author ==='deepak')} titles="Mario-Blogs"/>
        </div>
     );
}
 
export default Home;