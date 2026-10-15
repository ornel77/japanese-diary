import React from 'react'

const Main  = () => {
  return (
    <div class="p-4 sm:ml-64">
        <div class="p-4 border-1 border-default border-dashed rounded-base">
          <div class="">
            <h1>Japanese Diary</h1>
            <section className='md:flex justify-between gap-3'>
                <article className='flex-1 p-2'>
                    <h2 className='bg-emerald-600 text-white rounded-sm px-2 mb-3'>Entry</h2>
                    <div className='border-2'>
                        <textarea className='w-full h-32'></textarea>
                    </div>
                </article>
                <article className='flex-1 p-2'>
                    <h2 className='bg-emerald-600 text-white rounded-sm px-2 mb-3'>Correction</h2>
                    <div className='border-2'>
                        <textarea className='w-full'></textarea>
                    </div>
                </article>
            </section>
            </div>
        </div>
      </div>
  )
}

export default Main