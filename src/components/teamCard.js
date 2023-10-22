import React from 'react';

function TeamCard( {data: props}) {
    const name = props.name;
    const title = props.title;
    const imageUrl = props.imageUrl;
    return (
        <>
        <div className="mb-16 px-4">
            <img src={imageUrl}
                className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-32 w-32 object-cover" alt=""/>
            <p className="mb-2 font-bold">{name}</p>
            <p className="text-neutral-500 dark:text-neutral-300">
                {title}
            </p>
        </div>
        </>
    );
}

export default TeamCard;
