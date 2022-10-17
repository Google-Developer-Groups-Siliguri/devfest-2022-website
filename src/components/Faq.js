import React from "react";
import "../stylesheet/Faq.css";
const schemeFaq = [
    {
        id: 1,
        faq: "What is Devfest?",
        des: "GDG DevFests are large-scale community-run events that can offer speaker sessions across Google product areas, all-day hack-a-thons, or both. It is a platform for developers, entrepreneurs, and tech enthusiasts to come together and get inspired by the latest technologies.",
    },
    {
        id: 2,
        faq: "Who is GDG?",
        des: "Google Developer Groups(GDG) are a group of local developers who are interested in Google products and APIs. We host various technical events for developers ranging from keynote sessions to hackathons. Our main aim is to learn more and keep growing",
    },
    {
        id: 3,
        faq: "Where can I find updates related to Devfest Siliguri?",
        des: "You can follow us on our Social Media links which you can find below - https://linktr.ee/gdgsiliguri",
    },
    {
        id: 4,
        faq: "How can I attend DevFest Siliguri ? How much does it cost?",
        des: "GDG Siliguri is a Free event. There are no costs for the ticket to this event. However, you must apply to be a participant in the event, and only upon a positive review of your application, you shall be allowed to claim a ticket. You can apply to be a participant by clicking the Register button on this website's home page.",
    },
];

const Faq = () => {
    return (
        <>
            <section id="faq">
                <div className="container">
                    <h1 className="heading">F.A.Q</h1>
                    <div className="faq-col col mt-5">
                        <div>
                            <div>
                                {schemeFaq.map((item, key) => (
                                    <div
                                        key={item.id}
                                    >
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className={`accordion-button ${key===0?"":"collapsed"}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapsescheme${key}`}
                                                aria-expanded="true"
                                                aria-controls={`#collapsescheme${key}`}
                                            >
                                                <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                                                <span>&nbsp;&nbsp;</span>
                                                <b>{item.faq}</b>
                                            </button>
                                        </h2>

                                        <div
                                            id={`collapsescheme${key}`}
                                            className={`accordion-collapse collapse ${key===0?"show":""}`}
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body parafix">
                                                <h5 className="faqcardheading">{item.faq}</h5>
                                                <p>{item.des}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faq;