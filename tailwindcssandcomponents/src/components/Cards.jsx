import React from 'react'

function Cards({userName ="No name provided",Post="Not assigned", urlA="/profile.jpg" }) {
  return (
    <>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 m-2">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={urlA} alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 ">
            <blockquote >
            <p class="text-lg font-medium">
                “I'm learning Tailwind CSS. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              {userName}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                {Post}
            </div>
            </figcaption>
        </div>
        </figure>
    
</>
  )
}

export default Cards