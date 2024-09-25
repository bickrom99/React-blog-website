import { useEffect, useState } from 'react'; 
import BlogCard from '../BlogPageComponent/BlogCard';
import Pagination from '../BlogPageComponent/Pagination';
import SelectCategory from './SelectCategory';
import SideBar from './SideBar';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12;
    const [selectCategory, setSelectCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [loading, setLoading] = useState(true); // Loader state

    useEffect(() => {
        async function fetchBlogs() {
            setLoading(true); // Show loader while fetching
            let url = `/public/api/blogData.json?page=${currentPage}&limit=${pageSize}`;

            if (selectCategory) {
                url += `&category=${selectCategory}`;
            }

            try {
                const response = await fetch(url);
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false); // Hide loader after data is fetched
            }
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectCategory]);

    // Page change handler
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // Category change handler
    const handleCategoryChange = (category) => {
        setSelectCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }

    return (
        <div>
            {/* Category section */}
            <div>
                <SelectCategory onSelectCategory={handleCategoryChange} selectCategory={selectCategory} activeCategory={activeCategory} />
            </div>

            {/* Blog Card section */}
            <div className='w-[90%] m-auto flex flex-col lg:flex-row gap-12 '>
                {loading ? ( // Show loader while loading
                    <p>Loading...</p>
                ) : (
                    <BlogCard blogs={blogs} currentPage={currentPage} pageSize={pageSize} selectCategory={selectCategory} />
                )}
                {/* SideBar component */}
                <div>
                    <SideBar />
                </div>
            </div>

            {/* Pagination */}
            <div>
                <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
            </div>
        </div>
    );
};

export default BlogPage;
