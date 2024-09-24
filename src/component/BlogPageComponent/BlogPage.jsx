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

    useEffect(() => {
        async function fetchBlogs() {
            // Fix URL string interpolation by using backticks
            let url = `/public/api/blogData.json?page=${currentPage}&limit=${pageSize}`;

            // Filter by category
            if (selectCategory) {
                url += `&category=${selectCategory}`;
            }

                const response = await fetch(url);
                const data = await response.json();
                setBlogs(data);
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectCategory]);

    // Page change button handler
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // Category change handler
    const handleCategoryChange = (category) => {
        setSelectCategory(category);
        setCurrentPage(1);
        setActiveCategory(category); // Fix the typo here
    }

    return (
        <div>
            {/* Category section */}
            <div>
                <SelectCategory onSelectCategory={handleCategoryChange} selectCategory={selectCategory} activeCategory={activeCategory} />
            </div>

            {/* Blog Card section */}
            <div className='flex lg:flex-row w-[90%] m-auto '>
                <BlogCard className='w-7/10' blogs={blogs} currentPage={currentPage} pageSize={pageSize} selectCategory={selectCategory} />
                {/* SideBar component */}
                <SideBar className='w-3/10'/>
            </div>
            
            {/* Blog Page Pagination */}
            <div>
                <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
            </div>
        </div>
    );
};

export default BlogPage;