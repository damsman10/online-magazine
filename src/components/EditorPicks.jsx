/* eslint-disable react/no-unescaped-entities */


import BigCard from "./BigCard"


const EditorPicks = () => {
  return (
    <div className="picks w-4/5 m-auto text-center">
        <p className="text-[#9C9793] text-[0.8rem] my-2">BEST POSTS FROM DAMMY</p>
        <p className="mb-6">EDITOR'S PICKS</p>
        
        <div className="picks flex justify-between items-center flex-wrap">
            <BigCard />
            <BigCard />
            <BigCard />
        </div>
      
    </div>
  )
}

export default EditorPicks
