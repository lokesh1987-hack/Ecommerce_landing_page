import React from 'react'
import { categories } from '../demo_data/data'
export const CategoriesBar = ({ image }) => {
    return (
        <div>
            <div className={`d-flex ${!image && "p-0 m-0 my-4"} category_bar my-4 justify-content-center`}>
                {categories.map((items) => {
                    return (
                        <div key={items.id} className={`mx-2 px-1 text-center ${!image && "border-end m-0 p-0 category_text_bar"} w-100`}>
                            {image ? <div>
                                <img src={items.image_url} alt="category img" className='rounded-circle mt-1' style={{ width: "73px", height: "73px" }} />
                                <p className='mt-2'>{items.name}</p>
                            </div> : <div className='category_text m-0 p-0'>
                                <p className='m-0 p-0' style={{ fontSize: "15px" }} >{items.name}</p>
                            </div>}
                        </div>
                    )
                })
                }
            </div>
        </div >
    )
}
