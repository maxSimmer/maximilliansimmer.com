import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center pt-20 pb-6">
         <div className="w-1/2 flex flex-col items-center justify-center pr-4">
            <div className="overflow-hidden">
               <h1 className="text-4xl md:text-7xl font-bold dark:text-white leading-tight text-center transform transition-transform duration-300 hover:-translate-y-1">
                  <span className="block bg-gradient-to-r from-white via-sky-300 to-blue-400 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">Max</span>
                  <span className="block bg-gradient-to-r from-white via-sky-300 to-blue-400 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">Simmer</span>
               </h1>
            </div>
         </div>
         
         <div className="w-px bg-stone-300 dark:bg-stone-600 h-[200px] transform transition-transform duration-300 hover:scale-y-110"></div>
         
         <div className="w-1/2 flex flex-col items-center justify-center pl-4">
            <p className="text-base md:text-xl mb-3 font-medium text-center transform transition-all duration-300 hover:text-cyan-600">
               Software Engineer & Developer
            </p>
            <p className="text-sm max-w-xl font-bold text-center group">
               <span className="transition-colors duration-300 group-hover:text-cyan-600">
                  Crafting digital experiences through elegant code. CS student at Loyola University Chicago, 
                  focusing on web development and database engineering. Class of 2025.
               </span>
               <br /> 
               <span className="transition-colors duration-300 group-hover:text-cyan-600">
                  Exploring different technologies while also having a passion for skateboarding and analyzing financial markets.
               </span>
               {' '}
               <a 
                  href="https://github.com/maxSimmer?tab=repositories"
                  target="_blank"
                  className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600 transition-all duration-300"
                  rel="noreferrer noopener"
               >
                  View my work →
               </a>
            </p>
         </div>
      </div>
   )
}

export default Intro;