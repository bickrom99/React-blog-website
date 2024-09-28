import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 dark:bg-white mt-10">
                <div className='grid grid-cols-5 gap-5 w-[90%] m-auto pt-5 pb-5 text-white'>
                    {/* Logo */}
                    <div className='col-span-1'>
                        <a href="">bickrom99</a>
                        <h3 className='text-gray-400 mb-2'>I am Bickrom Chandro Sen.<br />As a React Developer</h3>
                        <a href="mailto:bickromsen99@gmail.com">bickromsen99@gmail.com</a><br />
                        <a href="tel:+8801518993773">+8801518993773</a>
                    </div>
                    {/* and other */}
                    <div className='col-span-4'>
                        <div className='flex justify-between items-center gap-10'>
                            <div className='w-full'>
                                <h2 className='font-semibold text-gray-200 mb-3'>About Me</h2>
                                <ul className='flex flex-col text-gray-300'>
                                    <NavLink to='/' className={({ isActive }) => isActive ? "Footer-active mb-1" : "mb-1"}>Home</NavLink>
                                    <NavLink to='/about' className={({ isActive }) => isActive ? "Footer-active mb-1" : "mb-1"}>About Me</NavLink>
                                    <NavLink to='/blogs' className={({ isActive }) => isActive ? "Footer-active mb-1" : "mb-1"}>Blogs</NavLink>
                                    <NavLink to='/service' className={({ isActive }) => isActive ? "Footer-active mb-1" : "mb-1"}>Service</NavLink>
                                    <NavLink to='/contact' className={({ isActive }) => isActive ? "Footer-active mb-1" : "mb-1"}>Contact Me</NavLink>
                                </ul>
                            </div>
                            <div className='w-full'>
                                <h2 className='font-semibold text-gray-200 mb-3'>Service</h2>
                                <ul className='text-gray-300 text-base'>
                                    <li className='list-none mb-1'>Web Development</li>
                                    <li className='list-none mb-1'>WordPress Expert</li>
                                    <li className='list-none mb-1'>Recover Hacked Website</li>
                                    <li className='list-none mb-1'>Website Migration</li>
                                    <li className='list-none mb-1'>WordPress Security</li>
                                </ul>
                            </div>
                            <div className='w-full'>
                                <h2 className='font-semibold mb-3 text-gray-200'>Privacy Policy</h2>
                                <h3 className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam natus nisi, reprehenderit repellendus dolore eius unde id tempore!</h3>
                            </div>
                            <div className='w-full'>
                                <form className="max-w-sm mx-auto">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-gray-900 text-white">Your email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        aria-describedby="helper-text-explanation"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@flowbite.com"
                                    />
                                    <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        We’ll never share your details. Read our <a href="/" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* all reserved section */}
                <div className='bg-gray-700 py-3 text-center text-gray-400'>
                    2024 @ all Reserved By Bickrom Chandro Sen
                </div>
            </footer>
        </div>
    );
};

export default Footer;
