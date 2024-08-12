/* eslint-disable react/prop-types */


const Button = (props) => {
  return (
    <div>
      <button className="border py-2 px-8 rounded-sm font-bold bg-transparent" style={{backgroundColor: props.bg, color: props.color}}>{props.text}</button>
    </div>
  )
}

export default Button
