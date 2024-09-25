import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";


const BlogCard = ({ blogs, pageSize, currentPage, selectCategory }) => {
    const filteredBlog = blogs
    .filter((blogs) => !selectCategory || blogs.category === selectCategory )
    .slice((currentPage - 1) * pageSize, currentPage * pageSize)

    return (
        <div className='m-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
            {
                filteredBlog.map((blog) => <Link key={blog.id} className='p-5 shadow-md'>
                    {/* image */}
                    <div>
                        <img src={blog.image} alt="" className='w-full'/>
                    </div>
                    {/* Card Title */}
                    <h3 className='mt-4 mb-2 font-bold hover:text-blue-500 cursor-pointer'>{blog.title}</h3>
                    {/* Card User */}
                    <p className='mb-2 text-gray-700 inline-flex justify-center items-center'><FaUser className='mr-2' />{blog.author}</p>
                    {/* user publish date */}
                    <p className='text-sm text-gray-500'>Published: {blog.published_date}</p>
                </Link>)
            }
        </div>
    );
};

export default BlogCard;
