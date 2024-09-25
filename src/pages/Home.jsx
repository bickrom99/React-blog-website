import Banner from "../component/Banner";
import BlogPage from "../component/BlogPageComponent/BlogPage";


const Home = () => {
    return (
        <div>
            <Banner/>  
                  {/* this is Blog */}
            <div className=' mx-auto'>
                <BlogPage/>
            </div>    
        </div>
    );
};

export default Home;