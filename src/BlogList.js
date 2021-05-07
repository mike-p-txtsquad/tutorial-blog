import { Link } from "react-router-dom";

const BlogList = ({blogs, title, handleDelete}) => {

    return ( 
        <div className="blog-list">
            <h3>{title}</h3>    
            {blogs.map((blog)=>(
                <Link to={`/blogs/${blog.id}`}>
                    <div className="blog-preview" key={blog.id}>
                        <h2> {blog.title} </h2>
                        <p> Written by {blog.author} </p>
                    </div>
                </Link>
            ))}
    </div>
     );
}
 
export default BlogList;