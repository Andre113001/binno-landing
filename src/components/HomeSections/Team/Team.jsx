import React from 'react';
import TeamData from './TeamMembers.json';
import TeamItem from './TeamItems/TeamItem';

import img1 from './TeamItems/image_7.png';
import img2 from './TeamItems/image_10.png';
import img3 from './TeamItems/image_1.png';
import img4 from './TeamItems/image_8.png';
import img5 from './TeamItems/image_11.png';
import img6 from './TeamItems/image_9.png';

const images = {
  './TeamItems/image_7.png': img1,
  './TeamItems/image_10.png': img2,
  './TeamItems/image_1.png': img3,
  './TeamItems/image_8.png': img4,
  './TeamItems/image_11.png': img5,
  './TeamItems/image_9.png': img6,
};

const Team = () => {
    return (
        <div className='h-screen mt-28'>
            <h1 className='text-center font-bold text-xl'>Meet the <span className='text-primary'>Team</span></h1>
            <section className='flex items-center justify-center mt-20 w-full'>
                <div className='grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-24 p-5'>
                    {TeamData.map((data) => {
                        return <TeamItem key={data.id} name={data.name} position={data.position} img={images[data.img]} />
                    })}
                </div>
            </section>
        </div>
    );
}

export default Team;
