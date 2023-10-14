import React from "react"
import "./footer1.css"
import facebook from "../../assets/facebook.png"
import instergram from "../../assets/instagram.png"
import linkdin from "../../assets/linkedin.png"
import twitter from "../../assets/twitter.png"
import Logo from "../../assets/LOGO png.png"
import paypal from "../../assets/paypal.png"
import visa from "../../assets/visa.png"
import mastercard from "../../assets/card.png"
import bitcoin from "../../assets/bitcoin.png"

const Admin_GridFooter = () => {
  return (
    <div className="footer">
      <div>
        

        <hr></hr>

        {/* footer bottom part copyright & fb & bitcoin */}
        <div className="sb_footer-below">
          <div className="sb_footer-links_div">
            <div className="socialmedia">
              <p>
                <img src={facebook} alt="" />
              </p>
              <p>
                <img src={twitter} alt="" />
              </p>
              <p>
                <img src={linkdin} alt="" />
              </p>
              <p>
                <img src={instergram} alt="" />
              </p>
            </div>
          </div>
          <div className="sb_footer-copyright">
            <p>
              &nbsp; @{new Date().getFullYear()} ARTICRAFTS All Right Reserved
              &nbsp;
            </p>
          </div>
          <div className="sb_footer-links_div">
            <div className="socialmedia">
              <p>
                <img src={paypal} alt="" />
              </p>
              <p>
                <img src={mastercard} alt="" />
              </p>
              <p>
                <img src={visa} alt="" />
              </p>
              <p>
                <img src={bitcoin} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin_GridFooter
