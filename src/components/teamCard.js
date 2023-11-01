import React from 'react';

function TeamCard({ data: props }) {
    const name = props.name;
    const title = props.title;
    const imageUrl = props.imageUrl;
    return (
       <div>
        <div className="flex items-center space-x-3 sm:justify-center">
            <img alt="" className="h-56 w-56 object-cover" src={imageUrl} />
        </div>
        <div className="flex justify-center items-center">
        <p className="text-lg font-bold">{name}</p>
        </div>
       </div>
        
        
     
        
        
    );
}

export default TeamCard;
