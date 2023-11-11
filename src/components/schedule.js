import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    Typography,
    TimelineHeader,
} from "@material-tailwind/react";
import { data } from "../../static/data/schedule_data.js"

export function AccordionCustomStyles() {
    
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            {data.Days.map((day, index) => (
                <Accordion id={`day${index + 1}`} onClick={() => handleOpen(index + 1)} open={open === index + 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4" key={index}>
                    <AccordionHeader
                        className={`border-b-0 transition-colors ${open === index + 1 ? "text-blue-500 hover:!text-blue-700" : ""
                            }`}
                    >
                        {day.Day}
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-base font-normal">
                        <Timeline>
                            {day.Schedule.map((event, eventIndex) => (
                                <TimelineItem className="md:h-28" key={eventIndex}>
                                    <TimelineConnector className="md:!w-[78px]" />
                                    <TimelineHeader className="relative rounded-xl border border-blue-gray-50 py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                        <TimelineIcon className="p-3" variant="ghost">
                                            <p className="text-sm md:text-base lg:text-lg">{event.time}</p>
                                        </TimelineIcon>
                                        <div className="flex flex-col md:flex-row gap-1">
                                            <Typography variant="h7" color="blue-gray" className="text-sm md:text-base lg:text-lg">
                                                {event.event}
                                            </Typography>
                                        </div>
                                    </TimelineHeader>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </AccordionBody>
                </Accordion>
            ))}
        </>
    );
}