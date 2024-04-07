import React from 'react';
import Banner from '../modules/Banner';
import Attributes from '../modules/Attributes';
import Definition from '../modules/Definition';
import Companies from '../modules/Companies';
import Instruction from '../modules/Instruction';
import Guide from '../modules/Guide';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Attributes/>
            <Definition/>
            <Companies/>
            <Instruction/>
            <Guide/>
        </div>
    );
};

export default HomePage;