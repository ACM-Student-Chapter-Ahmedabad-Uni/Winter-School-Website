import React from 'react';

function TeamCard({ data: props }) {
    const name = props.name;
    const title = props.title;
    const imageUrl = props.imageUrl;
    
    return (
        <div className="max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                <img alt="" className="w-56 h-56 sm:w-64 sm:h-64 object-cover" src={imageUrl} />
            </div>
            <div className="sm:ml-4 flex justify-center items-center">
                    <p className="text-lg font-bold">{name}</p>
            </div>
            <div className="sm:ml-4 flex justify-center items-center">
                    <p className="text-lg">{title}</p>
            </div>
        </div>
    );
}

export default TeamCard;
