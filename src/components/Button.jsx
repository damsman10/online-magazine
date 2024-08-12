/* eslint-disable react/prop-types */


const Button = (props) => {
  return (
    <div>
      <button className="border py-2 px-8 rounded-sm font-bold" style={{backgroundColor: props.bg, color: props.color, width: props.width, borderRadius: "5px"}}>{props.text}</button>
      {/*
       className={`border py-2 px-8 rounded-sm font-bold ${props.className}`} 
      if you want to dynamically style your componet using tailwind
      */}
    </div>
  )
}

export default Button
