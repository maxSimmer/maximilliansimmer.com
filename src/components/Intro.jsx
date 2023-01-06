import React from 'react';

function Intro() {
   return (
      <div class="flex items-center justify-center flex-col text-center pt-20 pb-6 ">
         <h1 class='text-4xl md:text-7xl mb-1
         md:mb-3 dark:text-white font-bold'>Maximillian Simmer</h1>
         <p class="text-base md:text-x1 mb-3 font-medium">Computer Science Student & Full-Stack Engineer</p>
         <p class="text-sm max-w-xl
         mb-6 font-bold">I am currently a second year computer science student
         studying at Loyola University Chicago. On the side I study full-stack engineering 
         and game-development trying to create my version of reality through code.
         <br /> In my free-time I enjoy trading the financial markets and skateboarding.
         The link to my github can be found {' '}
         <a href="https://github.com/maxSimmer?tab=repositories"
               target="_blank"
               className=" text-cyan-600 hover:underline underline-offset-1 decoration-1 decoration-red-600"
               rel="noreferrer noopener" >
               here.
            </a>{' '}
         </p>
      </div>
   )
}

export default Intro;