import FootSocial from "../components/FootSocial"


const Footer = () => {
  return (
    <div className="m-auto w-4/5 mt-12 pb-12">
        <div className="socials">
            <FootSocial />
        </div>

        <div className="links items-center">
            <ul className="flex justify-between items-center w-2/6 m-auto font-bold text-sm">
                <li>HOME</li>
                <li>INSPIRATION</li>
                <li>WEB DEV</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
            </ul>
        </div>

        <div className="copyright">
            <p className="text-center mt-6">Powered by <span className="font-bold">D-Oracle Inc</span></p>
        </div>
      
    </div>
  )
}

export default Footer
