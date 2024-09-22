import BlogPage from "../component/BlogPageComponent/BlogPage";


const Blogs = () => {
    return (
        <div >
            <div className='px-4 py-32 bg-black mx-auto
        text-white text-center'>
            <h2 className='text-center lg:text-5xl font-bold leading-snug mb-5'>Blog Page</h2>
            </div>
            <BlogPage/>
        </div>
    );
};

export default Blogs;