import React from 'react';

const gradients = [
    'from-blue-200 via-indigo-200 to-violet-200',
    'from-violet-200 via-purple-200 to-blue-200',
    'from-indigo-200 via-blue-200 to-purple-200',
    'from-purple-200 via-violet-200 to-indigo-200',
    'from-blue-200 via-purple-200 to-violet-200',
    'from-violet-200 via-indigo-200 to-blue-200'
];

const darkGradients = [
    'dark:from-blue-900 dark:via-indigo-900 dark:to-violet-900',
    'dark:from-violet-900 dark:via-purple-900 dark:to-blue-900',
    'dark:from-indigo-900 dark:via-blue-900 dark:to-purple-900',
    'dark:from-purple-900 dark:via-violet-900 dark:to-indigo-900',
    'dark:from-blue-900 dark:via-purple-900 dark:to-violet-900',
    'dark:from-violet-900 dark:via-indigo-900 dark:to-blue-900'
];

function Portfolioitem({ title, imgUrl, stack, link, description, index }) {
    const gradientIndex = index % gradients.length;
    const gradient = `bg-gradient-to-br ${gradients[gradientIndex]} ${darkGradients[gradientIndex]}`;

    return (
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block border-2 border-stone-900 dark:border-white rounded-lg 
            overflow-hidden hover:transform hover:scale-[1.02] transition-all
            shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
            ${gradient}
            min-w-[350px]`}
        >
            <div className="relative">
                <img 
                    src={imgUrl} 
                    alt="portfolio" 
                    className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity" />
            </div>
            <div className="p-6">
                <h3 className="text-xl dark:text-white mb-3 font-bold">{title}</h3>
                <p className="text-sm dark:text-stone-300 mb-4 line-clamp-2">{description}</p>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start">
                    {stack.map(item => (
                        <span 
                            key={item}
                            className="inline-block px-2 py-1 text-sm font-semibold 
                            border-2 border-stone-900 dark:border-white rounded-md
                            hover:bg-stone-900 hover:text-white dark:hover:bg-white 
                            dark:hover:text-stone-900 transition-colors"
                        >
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    )
} 

export default Portfolioitem