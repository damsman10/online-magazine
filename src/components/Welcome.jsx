import Button from "./Button"


const Welcome = () => {
  return (
    <div className="welcome m-auto w-4/5 border-b-2 text-center">
        <h3 className="m-3">WELCOME TO DAMMY BYTES</h3>
        <p className="m-3">We love every day! A new day gives us travel and pleasant acquaintances. We are open to new ideas and new incredible evens. No matter what!</p>
        <Button text="READ MORE" />
    </div>
  )
}

export default Welcome
