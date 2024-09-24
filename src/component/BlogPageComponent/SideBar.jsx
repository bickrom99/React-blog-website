import { useState , useEffect} from "react";

const SideBar = () => {
    const [popularBlog, setPopularBlog] = useState([]);
    useEffect(() => {
        fetch('/public/api/blogData.json').then(res => res.json()).then(data => setPopularBlog(data.slice(0, 5)))
    }, [])
    
    return (
        <div>
            <div>
                <h3 className='text-2xl font-semibold '>Latest Blogs</h3>
            </div>
        </div>
    );
};

export default SideBar;