const BlogList = ({ blogs }) => {

 
  return (
    <div className="blog-list">
      {blogs.map((blog) => {
        return (
          <div className="blog-preview">
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;

