import { IoIosSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
    return (
        <div className="shadow py-5 sticky top-0">
            <div className="container mx-auto grid lg:grid-cols-4 gap-4">
                <div className="flex items-center justify-center lg:justify-start">
                    <h2 className="text-xl font-semibold">Cooking Recipe</h2>
                </div>
                <div className="col-span-2 flex justify-center items-center">
                    <ul className="flex gap-4">
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-end">
                    <label className="flex gap-2 items-center border rounded-full px-3 py-2">
                        <IoIosSearch className="text-xl" />
                        <input type="text" placeholder="Search" />
                    </label>
                    <div className="bg-green-400 p-2 rounded-full">
                        <FaRegCircleUser className="text-3xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;