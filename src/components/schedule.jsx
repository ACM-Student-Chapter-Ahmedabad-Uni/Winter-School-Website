import React from 'react';
import './schedule-style.css';

function Schedule() {
  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <section className="w-[800px]">
        <div className="sticky top-0 bg-white py-3 z-10 shadow-x shadow-white">
          <h2 className="group-date">NOVEMBER 2021</h2>
        </div>
        <div className="timeline">
          <div className="relative">
            <div className="dot"></div>
            <div className="pl-10">
              <span className="timeline-date">13 NOVEMBER 2021</span>
              <h3 className="timeline-title">Event 1</h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deleniti officiis, architecto aperiam et incidunt eveniet quibusdam culpa, sed aut vero, doloremque soluta aliquid nulla. Sapiente asperiores soluta quam quod.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Schedule;
