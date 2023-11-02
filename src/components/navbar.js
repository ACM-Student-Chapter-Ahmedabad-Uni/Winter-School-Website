import React, { useState } from 'react';
import './navbar-style.css';

function TextLinkExample() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openMenu = (
        <div className="sm:hidden absolute inset-y-0 right-0 bg-white w-48">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="/schedule" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">SCHEDULE</a>
                <a href="/speakers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">SPEAKERS</a>
                <a href="/team" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">TEAM</a>
                <a href="/venue" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">VENUE</a>
            </div>
        </div>
    );

    const closedMenu = (
        <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4 ml-auto">
                <a href="/schedule" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">SCHEDULE</a>
                <a href="/speakers" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">SPEAKERS</a>
                <a href="/team" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">TEAM</a>
                <a href="/venue" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">VENUE</a>
                <a href="/resources" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">RESOURCES</a>
            </div>
        </div>
    );

    return (
        <nav className={`bg-white border-b border-gray-200 ${isOpen ? 'blur-background' : ''}`}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <a href="/" className="text-2xl font-bold text-black">ACM x Ahmedabad University</a>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {isOpen ? openMenu : closedMenu}
                </div>
            </div>
        </nav>
    );
}

export default TextLinkExample;