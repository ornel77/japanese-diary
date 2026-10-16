import React from 'react'

const Main  = () => {
  return (
    <div class="p-4 sm:ml-64">
        <div class="p-4 border-1 border-default border-dashed rounded-base">
          <div class="">
            <h1 className='text-text'>Japanese Diary</h1>
            <section className='md:flex justify-between gap-3'>
                <article className='flex-1 p-2'>
                    <h2 className=' mb-3'>Entry</h2>
                    <div className='border-2'>
                        <textarea className='w-full h-32'></textarea>
                    </div>
                    <button className='bg-primary text-surface px-1 w-full mt-1 py-2 rounded-md'>CORRECT</button>

                </article>
                <article className='flex-1 p-4 bg-correction-bg border-2 border-correction-text rounded-xl'>
                    <h2 className='text-correction-text font-bold'>Correction</h2>
                  
                        <div className='text-correction-text'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nulla, eum doloremque quod id iusto sit, eius ut magnam laboriosam quidem adipisci laudantium aut neque consequuntur et tempore, aperiam commodi. Placeat aliquam aut aperiam similique expedita eaque commodi enim cupiditate sed, quas sequi veniam, facere vero atque facilis omnis. Dolore?
                        </div>
                  
                </article>
            </section>
            </div>
        </div>
      </div>
  )
}

export default Main