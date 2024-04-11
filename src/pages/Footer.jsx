import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <div className="footer bg-white">
                <div className="container-fluid mt-5 pt-5 mx-5 px-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <h2>LUMIA</h2>
                            <p className="">Lorem ipsum dolor sit amet consectetur. <br />Lorem ipsum dolor dipisic
                                ventore, voluptatum beatae hic sint consectetur necessitatibus nemo. <br />reiciendis?sit.</p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h2>Useful Links</h2>
                            <ul className="useful-links">
                                <li href=""><a>Lorem, ipsum dolor.</a></li>
                                <li href=""><a>Lorem, ipsum dolor.</a></li>
                                <li href=""><a>Lorem, ipsum dolor.</a></li>
                                <li href=""><a>Lorem, ipsum dolor.</a></li>
                                <li href=""><a>Lorem, ipsum dolor.</a></li>

                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h2>Our Services</h2>
                            <ul className="useful-links">
                                <li href=""><a>Lorem, ipsum dolor.</a></li>
                                <li href=""><a>Lorem, ipsum dolor.</a></li>
                                <li href=""><a>Lorem, ipsum dolor.</a></li>
                                <li href=""><a>Lorem, ipsum dolor.</a></li>
                                <li href=""><a>Lorem, ipsum dolor.</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h2>Join Our Newsletter</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                            <div className="input-group" style={{borderRadius:"10px"}}>
                                    <input type="email" name="email" id="footer-email" className="px-3 py-2" style={{borderColor:"#3498db",}} />
                                    <input type="submit" value="Subscribe" className="btn btn-primary" style={{backgroundColor:"#3498db"}} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container d-md-flex py-4" style={{ backgroundColor: "#f7fbfe" }}>

                <div className="text-md-start me-md-auto text-sm-center">
                    <p>© Copyright <b>Lumia.</b> All Rights Reserved <br />
                        Designed by <a className="text-primary">BootStrapMade</a></p>
                </div>
                <div className="social-icons text-md-end text-center">

                    <FaTwitter
                        className="mx-1 p-2"
                        style={{
                            backgroundColor: "#3498db", color: "white", borderRadius: "50%", fontSize: "35px", cursor: "pointer",
                        }}
                    />
                    <FaFacebook
                        className="mx-1 p-2"
                        style={{
                            backgroundColor: "#3498db", color: "white", borderRadius: "50%", fontSize: "35px", cursor: "pointer"
                        }}
                    />
                    <FaInstagram
                        className="mx-1 p-2"
                        style={{
                            backgroundColor: "#3498db", color: "white", borderRadius: "50%", fontSize: "35px", cursor: "pointer"
                        }}
                    />
                    <FaLinkedin
                        className="mx-1 p-2"
                        style={{
                            backgroundColor: "#3498db", color: "white", borderRadius: "50%", fontSize: "35px", cursor: "pointer"
                        }}
                    />
                </div>
            </div>

        </>
    );
}