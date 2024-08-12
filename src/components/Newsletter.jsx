import Button from "./Button"

const Newsletter = () => {
  return (
    <div>
        <div className="newsletter w-4/5 m-auto mt-12 pb-10 border-b flex justify-center items-center">
            <div className="left">
                <p className="text-[1.8rem] font-bold pr-14">Subscribe to our Newsletter</p>
            </div>
            <div className="right">
                <div className="flex justify-between items-center gap-2">

                    <input className="w-72 h-10 border " type="email" placeholder="Your E-mail address" />
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
