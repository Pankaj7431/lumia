import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";

export default function Contacts() {
    return (
        <div className="w-100 px-5 py-5 mt-1" style={{ backgroundColor: "#f7fbfe" }} id="contacts">
            <br /><br /><br />
            <div className="section-title1  p-0">
                <h2>Contacts</h2>
                <h1></h1>
                <p className="pt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nobis!
                </p>
            </div><br />
            <div class="row justify-content-center bg-white mx-5 my-5">

                <div class="col-lg-8">

                    <div class="info-wrap">
                        <div class="row">
                            <div className="col-lg-4 info">
                                <a href="/" >
                                    <IoLocationOutline
                                        className="contact-icon"
                                        style={{
                                            fontSize: "50px",
                                            color: "rgb(52, 152, 219)",
                                            backgroundColor: "rgb(234, 244, 251)",
                                            borderRadius: "50%",
                                            padding: "5px",
                                            marginTop: "25px",
                                            cursor: "pointer",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            float: "left",

                                        }}
                                    />
                                </a>
                                <div style={{
                                    margin: "20px",
                                    float: "left"
                                }}>
                                    <h4>Location:</h4>
                                    Lorem, ipsum. <br />Lorem ipsum.
                                </div>
                            </div>
                            <div className="col-lg-4 info">
                                <a href="" className="contact-icon">
                                    <MdOutlineAttachEmail
                                        className="contact-icon"
                                        style={{
                                            fontSize: "50px",
                                            color: "rgb(52, 152, 219)",
                                            backgroundColor: "rgb(234, 244, 251)",
                                            borderRadius: "50%",
                                            padding: "5px",
                                            marginTop: "25px",
                                            cursor: "pointer",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            float: "left",

                                        }}
                                    />
                                </a>
                                <div style={{
                                    margin: "20px",
                                    float: "left"
                                }}>
                                    <h4>Email:</h4>
                                    info@example.com <br />contact@example.com.
                                </div>
                            </div>
                            <div className="col-lg-4 info">
                                <a href="" className="contact-icon">
                                    <CiMobile3
                                        className="contact-icon"
                                        style={{
                                            fontSize: "50px",
                                            color: "rgb(52, 152, 219)",
                                            backgroundColor: "rgb(234, 244, 251)",
                                            borderRadius: "50%",
                                            padding: "5px",
                                            marginTop: "25px",
                                            cursor: "pointer",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            float: "left",

                                        }}
                                    />
                                </a>
                                <div style={{
                                    margin: "20px",
                                    float: "left"
                                }}>
                                    <h4>Call:</h4>
                                    +1 5589 55488 51 <br />+1 5589 22475 14
                                </div>
                            </div>

                            <div className="row">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row justify-content-center bg-white mx-5 my-5">
                <div className="col-lg-8 form-group mt-3">
                    <form action="" method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="col-md-6">
                                <input type="email" name="email" className="form-control" id="email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group mt-3">
                            <textarea type="text-aria" name="message" className="form-control" placeholder="Message" rows={5} required />
                        </div>
                        <div className="text-center my-3">
                            <button type="submit" onSubmit={<Contacts />} style={{
                                background: "#3498db",
                                border: "0",
                                padding: "10px 24px",
                                color: "#fff",
                                transition: "0.4s",
                                borderRadius: "4px"
                            }}>Submit</button>
                        </div>
                    </form>
                </div>
            </div >

        </div>


    );
}