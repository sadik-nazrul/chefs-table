const Hero = () => {
    return (
        <div className="h-[75vh] bg-cover bg-center hero-bg container mx-auto flex flex-col justify-center rounded-xl lg:my-10 p-8">
            <div className="lg:w-2/4 w-full space-y-4">
                <h2 className="lg:text-5xl text-2xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h2>
                <p className="text-base font-light text-slate-300">Embark on a flavorful journey through our curated recipe collection, where every dish tells a story. From classic comfort foods to innovative culinary creations, find inspiration for every occasion and palate. Let elevate your cooking experience together!</p>
                <button className="bg-green-400 px-5 py-3 rounded">Explore Now</button>
            </div>
        </div>
    );
};

export default Hero;