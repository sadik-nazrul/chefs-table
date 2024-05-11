import Recipeis from "./Recipeis/Recipeis";

const Main = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-10 lg:py-10 p-5">
            <Recipeis />
            <h2>Menu</h2>
        </div>
    );
};

export default Main;