import { NavLink } from "react-router";

const Categories = ({ categories }) => {
    console.log(categories)
    return (
        <div className="sticky top-0">
            <h2 className="font-semibold">All Categories ({categories.length}) </h2>       
                <ul className="mt-4">
                    {categories.map(category => <li className="flex w-100"><NavLink key={category.id} className="hover:bg-[#E7E7E7] hover:text-black text-[#9F9F9F] my-2 py-2 px-4 py-2 rounded w-100 text-xl" to={`/category/${category.id}`}>{category.name}</NavLink></li>)}
                </ul>       
        </div>
    );
};

export default Categories;