import { useEffect, useState } from "react";
import { Suspense} from "react";
import Categories from "../Categories";

const SideBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
    fetch("/Categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

    

    return (
        <div className="col-span-3">
                <Suspense fallback={<div>Loading...</div>}>
                    <Categories categories={categories} />
                </Suspense>    
        </div>
    );
};

export default SideBar;