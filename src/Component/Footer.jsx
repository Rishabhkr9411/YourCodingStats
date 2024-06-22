import React from "react";
import  "./footer.css";

function Footer(){
    return (
        <>
        <div className="foot">
            <div className="foot-content">
                <div className="about">This website will help to see your coding info from different platform</div>
                <div className=" QuickLinks"> 
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact Us</p>
                </div>
                <div className="Contacts">
                    <table>
                        <tr>
                            <td>Email :</td>
                            <td>rishabhkumar9411@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Phone :</td>
                            <td>+91 7479601671</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="foot-bottom">
                <p>Copyright © 2024 . All Rights Reserved. MADE IN INDIA❤️ </p>
            </div>
        </div>
        </>
    )
}

export default Footer;