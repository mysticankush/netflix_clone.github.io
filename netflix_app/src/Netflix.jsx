import React from 'react';
import Sdata from './Sdata';
import Card from './Cards';
const Netflix = () => {
    return (
        < Card
            key={Sdata[1].id}
            imgsrc={Sdata[1].imgsrc}
            title={Sdata[1].title}
            link={Sdata[1].link}
            sname={Sdata[1].sname}
        />
    );
};
export default Netflix; 