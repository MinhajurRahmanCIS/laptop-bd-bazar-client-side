import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cat from './Cat';
import C_modal from './C_modal';

const Cetegories = () => {
    const laptops_info = useLoaderData();
    const [info, setModalData] = useState();


    return (

        <div>
            <Cat laptops_info={laptops_info} setModalData={setModalData}></Cat>
            <C_modal info={info}></C_modal>
        </div>


    );
};

export default Cetegories;