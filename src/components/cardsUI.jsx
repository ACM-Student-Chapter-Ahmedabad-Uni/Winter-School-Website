import React from 'react';
import { data } from '../../static/data/topics_data.js';
import { data_schedule } from '../../static/data/schedule_data.js';

const TopicCards = ({ siteUrl }) => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.Topics.map((topic, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg mx-6 relative">
                    <div className="w-full h-80 relative">
                        <img className="w-full h-80 object-cover rounded-t-lg" src={topic.imageUrl} alt={topic.topic} />
                        <p className="absolute bottom-0 right-0 bg-opacity-50 bg-black text-xs text-gray-500 p-1">Image provided by <a href="https://www.istockphoto.com/" target="_blank" rel="noopener noreferrer">iStock</a></p>
                    </div>
                    <div className="p-6">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight">{topic.topic}</h4>
                        <p className="mb-2">Professor: <a className="no-underline" href={`/speakers/#${topic.professor}`}>{topic.professor}</a></p>
                        <p className="mb-2">Dates:
                            <ul>
                                {topic.days.map((day, dayIndex) => (
                                    <li key={dayIndex}>
                                        <a className="no-underline" href={`/schedule/#day${day}`}>{data_schedule["Days"][day - 1]["Day"]}</a>
                                    </li>
                                ))}
                            </ul>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TopicCards;