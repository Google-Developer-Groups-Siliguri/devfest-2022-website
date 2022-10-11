import React from "react";
import "../stylesheet/Faq.css";
const schemeFaq = [
    {
        id: 1,
        faq: "What is a cochlear implant?",
        des: "The cochlear implant is a prosthetic device, a part of which is surgically implanted inside the cochlea. Cochlear implants have been found to be beneficial for children with severe to profound hearing loss in both ears who do not benefit adequately with hearing aids but have an intact auditory nerve. While a hearing aid provides amplified sound energy to the ear, the cochlear implant directly provides electrical stimulation to the nerve endings in the cochlea",
    },
    {
        id: 2,
        faq: "What does the surgery involve?",
        des: "The surgery for the cochlear implant may take about 1-2 hours. The surgeon makes an incision behind the pinna and then surgically implants the electrodes inside the cochlea and the receiver-stimulator are implanted in the mastoid bone behind the ear. The patient may have to remain in hospital for 2-3 days.",
    },
    {
        id: 3,
        faq: "Will a cochlear implant restore normal hearing in children who are deaf?",
        des: "No, a cochlear implant does not restore normal hearing. It is a communication tool but not a 'cure' for deafness. An implant, supplemented with Speech& Language therapy and Auditory Verbal therapy, can help the children recognize sound, including speech to use it for communication and education purposes.",
    },
    {
        id: 4,
        faq: "What sounds can be heard with a cochlear implant?",
        des: "Your child will probably hear most sounds of medium-to-high loudness. Patients often report that they can hear footsteps, slamming of doors, ringing telephones car engines, barking dogs, crackers, and various other environmental sounds.",
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