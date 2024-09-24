import { useState } from 'react';

const SelectCategory = ({ onSelectCategory }) => {
    const categories = ['Security', 'Startups', 'AI', 'Work', 'Apps', 'Fintech', 'Health', 'Tech'];
    const [selectCategory, setSelectCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectCategory(event.target.value);
    };

    const handleShowResult = () => {
        if (selectCategory) {
            onSelectCategory(selectCategory); // Call the prop function to update the parent component
        } 
    };

    return (
        <div>
            <div className="flex items-center justify-center mt-3">
                <button className='ml-2 mr-3' onClick={() => { setSelectCategory(''); onSelectCategory(null); }}>All</button>
                <select 
                    value={selectCategory} 
                    onChange={handleCategoryChange} 
                    className="mr-2 py-2 px-5 rounded font-primary cursor-pointer"
                >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <button onClick={handleShowResult} className="ml-2 bg-orange-500 hover:bg-orange-400 transition-all ease-in duration-150  py-1 px-3 rounded text-white hover:text-black">
                    Show Result
                </button>
            </div>
            <hr className='mt-2 mb-3 w-[90%] m-auto border-gray-400 border-[1.2px]' />
        </div>
    );
};

export default SelectCategory;
