import React, { useState } from 'react';
import portfolio from '../data/portfolio';
import Portfolioitem from './Portfolioitem';

function Portfolio() {
   const [visibleItems, setVisibleItems] = useState(6);
   
   const showMore = () => {
      setVisibleItems(prevItems => prevItems + 6);
   };

   const showLess = () => {
      setVisibleItems(6);
   };

   return (
      <div className="flex flex-col items-center justify-center pt-16 px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] w-full">
            {portfolio.slice(0, visibleItems).map((project, index) => (
               <Portfolioitem 
                  key={project.title}
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
                  description={project.description}
                  index={index}
               />
            ))}
         </div>
         <div className="mt-8 flex gap-4">
            {visibleItems < portfolio.length && (
               <button
                  onClick={showMore}
                  className="px-6 py-3 text-sm font-semibold border-2 border-stone-900 
                  dark:border-white rounded-md hover:bg-stone-900 hover:text-white
                  dark:hover:bg-white dark:hover:text-stone-900 transition-colors"
               >
                  See More
               </button>
            )}
            {visibleItems > 6 && (
               <button
                  onClick={showLess}
                  className="px-6 py-3 text-sm font-semibold border-2 border-stone-900 
                  dark:border-white rounded-md hover:bg-stone-900 hover:text-white
                  dark:hover:bg-white dark:hover:text-stone-900 transition-colors"
               >
                  See Less
               </button>
            )}
         </div>
      </div>
   )
}

export default Portfolio;