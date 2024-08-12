/* eslint-disable react/no-unescaped-entities */
import feature from '../assets/featuredimages/webdev.jpg'

import BigCard from "./BigCard"


const EditorPicks = () => {
  return (
    <div className="picks w-4/5 m-auto text-center pb-6 border border-b">
        <p className="text-[#9C9793] text-[0.8rem] mt-12">BEST POSTS FROM DAMMY</p>
        <p className="my-4">EDITOR'S PICKS</p>
        
        <div className="picks flex justify-between items-center flex-wrap">
            <BigCard pic={feature} date="MAY 11, 2016" 
            title="Beauty Treatments Worth Traveling For" 
            category="INSPIRATION" 
            />

            <BigCard pic={feature} date="MAY 11, 2016" 
            title="Beauty Treatments Worth Traveling For" 
            category="INSPIRATION" 
            />

            <BigCard pic={feature} date="MAY 11, 2016" 
            title="Beauty Treatments Worth Traveling For" 
            category="INSPIRATION" 
            />

            <BigCard pic={feature} date="MAY 11, 2016" 
            title="Beauty Treatments Worth Traveling For" 
            category="INSPIRATION" 
            />

        </div>
      
    </div>
  )
}

export default EditorPicks
