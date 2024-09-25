import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const SideBar = () => {
    const [popularBlog, setPopularBlog] = useState([]);
    const [loading, setLoading] = useState(true); // Looder add  

    useEffect(() => {
        fetch('/public/api/blogData.json')
            .then(res => res.json())
            .then(data => {
                setPopularBlog(data.slice(0, 15));
                setLoading(false); // when data load then load off
            })
            .catch(() => setLoading(false)); // if any error, load off 
    }, []);

    return (
        <div>
            <div className='text-center'>
                <h3 className='text-2xl font-semibold'>Latest Blogs</h3>
                {loading ? ( // loading running if not showing data
                    <p>Loading...</p>
                ) : (
                    <div>
                        {
                            popularBlog.slice(0, 5).map((blog) => (
                                <div key={blog.id} className='my-6 border-b-2 border-spacing-2 px-4 text-start'>
                                    <h3 className='font-serif text-gray-700'>{blog.title}</h3>
                                    <Link to='/' className='hover:text-orange-500 mb-2 text-center text-base inline-flex items-center justify-center py-2 font-primary'>
                                        Read more <FaArrowRight className='mt-1 ml-1 text-sm' />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>

            {/* Popular Blogs */}
            <div className='text-center mt-10'>
                <h3 className='text-2xl font-semibold'>Popular Blogs</h3>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {
                            popularBlog.slice(6, 10).map((blog) => (
                                <div key={blog.id} className='my-6 border-b-2 border-spacing-2 px-4 text-start'>
                                    <h3 className='font-serif text-gray-700'>{blog.title}</h3>
                                    <Link to='/' className='hover:text-orange-500 mb-2 text-center text-base inline-flex items-center justify-center py-2 font-primary'>
                                        Read more <FaArrowRight className='mt-1 ml-1 text-sm' />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default SideBar;
