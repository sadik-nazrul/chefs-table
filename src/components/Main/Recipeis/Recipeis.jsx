import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipeis = () => {
    // Recipeis state
    const [recipeis, setRecipeis] = useState([]);

    // Load recipeis
    useEffect(() => {
        fetch('../../../../public/recipes.json')
            .then(res => res.json())
            .then(data => setRecipeis(data))
    }, []);
    return (
        <div className="col-span-2">
            <div className="grid grid-cols-2 gap-5">
                {
                    recipeis.map((recipe, indx) => <Recipe key={indx} recipe={recipe} />)
                }
            </div>
        </div>
    );
};

export default Recipeis;