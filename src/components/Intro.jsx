import React from 'react';

function Intro() {
   return (
      <div class="flex items-center justify-center flex-col text-center pt-20 pb-6 ">
         <h1 class='text-4xl md:text-7xl mb-1
         md:mb-3 font-bold'>Maximillian Simmer</h1>
         <p class="text-base md:text-x1 mb-3 font-medium">Computer Science Student & Full-Stack Engineer</p>
         <p class="text-sm max-w-xl
         mb-6 font-bold">I am currently a second year computer science student
         studying at Loyola University Chicago. On the side I study full-stack engineering 
         and game-development trying to create my version of reality through code.
         <br /> This website was created following a code-along posted by Forrest Knight on youtube.
         The link can be found here, {' '}
         <a href="https://www.youtube.com/watch?v=b0pkpcD8Ms4&t=3531s"
               target="_blank"
               className=" text-cyan-600 hover:underline underline-offset-1 decoration-1 decoration-red-600"
               rel="noreferrer noopener" >
               How to Build a Minimal Developer Portfolio Website Using React + Tailwind + Vite
            </a>{' '}
         </p>
      </div>
   )
}

export default Intro;