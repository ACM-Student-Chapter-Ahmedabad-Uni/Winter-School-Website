import React from 'react';

function TeamCard(props) {
    const name = props.name;
    return (
        <>
        <div className="mb-16 px-4">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.jpg"
                className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-32 w-32 object-cover" alt=""/>
            <p className="mb-2 font-bold">{name}</p>
            <p className="text-neutral-500 dark:text-neutral-300">
                Senior developer
            </p>
        </div>
        </>
    );
}

export default TeamCard;
