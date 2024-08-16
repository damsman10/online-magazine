/* eslint-disable react/no-unescaped-entities */

import Navigation from "../components/Navigation"
import Header from "../sticky/Header"


const NotFound = () => {
  return (
    <div>
        <Header />
        <Navigation />

        <div className="w-4/5 m-auto my-20 text-center mb-44 pb-20 border-b">
            <h1 className="text-[6rem] font-bold">404 Not Found</h1>
            <p className="text-[2rem]">Sorry, the page you're looking for doesn't exist.</p>

        </div>
      
    </div>
  )
}

export default NotFound
