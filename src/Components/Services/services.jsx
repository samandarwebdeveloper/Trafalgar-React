import "./services.scss"
import magnifier from "../../img/magnifier.png"
import pharmacy from "../../img/pharmacy.png"
import consultation from "../../img/consultation.png"
import info from "../../img/info.png"
import emergency from "../../img/emergency.png"
import tracking from "../../img/tracking.png"
import content from "../../content"

function Services( { lang, color }) {
    return (
        <>
         <div className="container">
             <div className="services">
                <h1>{content[lang].ourService.serviceLead}</h1>
                <hr className="line" />
                <p className="service-text">{content[lang].ourService.serviceText}</p>
                <div className="our-services">
                    <ul className="box">
                        <li className="list-item">
                            <img src={magnifier} alt="its magnifier" />
                            <h2>{content[lang].ourService.serviseList.searchDoctor}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, mollitia!</p>
                        </li>
                        <li className="list-item">
                            <img src={pharmacy} alt="its pharmacy" />
                            <h2>{content[lang].ourService.serviseList.onlinePharmacy}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolor impedit assumenda.</p>
                        </li>
                        <li className="list-item">
                            <img src={consultation} alt="its consultation" />
                            <h2>{content[lang].ourService.serviseList.consultation}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas eveniet!</p>
                        </li>
                    </ul>
                    <ul className="box">
                        <li className="list-item">
                            <img src={info} alt="its info" />
                            <h2>{content[lang].ourService.serviseList.detailsInfo}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, consectetur architecto.</p>
                        </li>
                        <li className="list-item">
                            <img src={emergency} alt="its emergency" />
                            <h2>{content[lang].ourService.serviseList.emergencyCare}</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima odio, similique non voluptatum
                            nisi numquam!</p>
                        </li>
                        <li className="list-item">
                            <img src={tracking} alt="its tracking" />
                            <h2>{content[lang].ourService.serviseList.tracking}</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa.</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="/" className="button2">{content[lang].ourService.button}</a>
                </div>
                     </div>
         </div>
        </>
    )
}
export default Services;