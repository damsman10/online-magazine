import Button from "./Button"

const Newsletter = () => {
  return (
    <div>
        <div className="newsletter w-4/5 m-auto mt-12 pb-10 border-b flex flex-col lg:flex-row justify-center items-center gap-4">
            <div className="left">
                <p className="text-center text-[1.5rem] lg:text-left lg:text-[1.8rem] font-bold lg:mr-36">Subscribe to my Newsletter</p>
            </div>
            <div className="right">
                <div className="flex flex-col md:flex-col lg:flex-col justify-between items-center gap-2">

                    <input className="ml-8 sm:w-40 w-72 h-10 border placeholder:text-center placeholder:font-bold " type="email" placeholder="Your E-mail address"/>

                    <Button bg="black" 
                    color="white" 
                    text="SUBSCRIBE"
                    width="12rem"
                    />
                    

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Newsletter
