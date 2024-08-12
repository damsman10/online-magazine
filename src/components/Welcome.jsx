import Button from "./Button"


const Welcome = () => {
  return (
    <div className="welcome m-auto w-4/5 pb-8 border-b-2 text-center">
        <h3 className="m-3 text-[#9C9793] text-[1rem]">WELCOME TO DAMMY BYTES</h3>
        <p className="m-auto text-[1.8rem] w-3/5 font-bold my-6">We love every day! A new day gives us travel and pleasant acquaintances. We are open to new ideas and new incredible evens. No matter what!</p>
        <Button bg="black" color="white" className="" text="READ MORE" />
    </div>
  )
}

export default Welcome
