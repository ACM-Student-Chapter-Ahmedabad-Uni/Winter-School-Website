    import React from 'react';
    import {data} from '../../static/data/topics_data.js';

    const TopicCards = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.Topics.map((topic, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg mx-6">
            <img className="w-full h-70 object-cover rounded-t-lg" src={topic.imageUrl} alt={topic.topic} />
            <div className="p-6">
                <h4 className="mb-3 text-xl font-semibold tracking-tight">{topic.topic}</h4>
                <p className="mb-2">Professor: {topic.professor}</p>
                <p className="mb-2">Days: {topic.days}</p>
            </div>
            </div>
        ))}
        </div>
    );
    }

    export default TopicCards;
