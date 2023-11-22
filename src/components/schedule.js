import React from "react";
import { data } from "../../static/data/schedule_data.js"

export function AccordionCustomStyles() {
    return (
        <table className="table table-hover course-list-table table-harassment">
            <thead>
                {data.Days.map((day, index) => (
                    <React.Fragment key={index}>
                        <tr>
                            <th colSpan="2" style={{width: "5%", textAlign: "left", verticalAlign: "left"}}>
                                <b>{day.Day}</b>
                            </th>
                        </tr>
                        {day.Schedule.map((event, eventIndex) => (
                            <tr key={eventIndex}>
                                <td style={{textAlign: "left", verticalAlign: "left", width: "5%"}}>
                                    {event.time}
                                </td>
                                <td style={{textAlign: "left", verticalAlign: "left", width: "15%"}}>
                                    {event.event}
                                </td>
                            </tr>
                        ))}
                    </React.Fragment>
                ))}
            </thead>
        </table>
    );
}