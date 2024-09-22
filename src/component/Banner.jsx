import {FaArrowRight} from "react-icons/fa6";
const Banner = () => {
    return (
        <div className='px-4 py-32 bg-black mx-auto
        text-white text-center'>
            <h1 className='text-center lg:text-5xl font-bold leading-snug mb-5'>Welcome to Our Blog</h1>
            <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary'>Start your blog today and join a community of writers and reader who are possinote about sharing thir stories and ideas. We offer everithing you need to get start, from helfull tips and tutorial</p>
            <a href="/" className='hover:text-orange-500 text-center font-medium inline-flex items-center justify-center py-2'>Learn more <FaArrowRight className='mt-1 ml-1 text-sm' /></a>
        </div>
    );
};

export default Banner;