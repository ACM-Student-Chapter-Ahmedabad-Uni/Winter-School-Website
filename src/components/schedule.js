import React from 'react';

function Schedule(props) {
    const data = props.day;
    return (

        <div>
            <h3 class="mb-3 text-lg font-bold md:text-xl">{data.Day}</h3>
            <ul class="space-y-4">
                {data.Schedule.map((item, index) => (
                    <li key={index} class="space-y-1">
                        <div class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current text-violet-400">
                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                            </svg>
                            <h4 class="font-medium">{item.time}</h4>
                        </div>
                        <p class="ml-7 text-gray-400">{item.event}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Schedule;