import React from "react";
import Navbar from "../../components/Navbar";
import Brackets from "../../components/Brackets";
import Cards from "../../components/Cards";

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Brackets />
            <Cards />
        </div>
    );
};

export default Home;