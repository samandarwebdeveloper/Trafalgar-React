import "./doctors.scss"
import vector from "../../img/Vector2.png"
import shprits from "../../img/shprits.png"
import doctor from "../../img/doctor.png"
import skin from "../../img/care.png"
import content from "../../content"

function Doctors({ lang }) {
return (
<>
    <div>
        <h1 className="skin">{content[lang].doctors.lead}</h1>
        <h2 className="skin">______</h2>
        <div className="skincare">
            <ul className="healthcare-list">
                <li className="list-healthcare">
                    <img src={shprits} alt="shprits" />
                    <h3 className="doctors-lead">{content[lang].doctors.list.itemOne.lead}</h3>
                    <p className="doctors-text">{content[lang].doctors.list.itemOne.text}</p>
                    <a className="button2" href="/">{content[lang].doctors.list.button} <img src={vector} alt="view all vektor" /> </a>
                </li>
            </ul>
            <ul>
                <li className="list-healthcare">
                    <img src={doctor} alt="doctor" />
                    <h3 className="doctors-lead">{content[lang].doctors.list.itemSecond.lead}</h3>
                    <p className="doctors-text">{content[lang].doctors.list.itemThree.lead}</p>
                    <a className="button2" href="/">{content[lang].doctors.list.button} <img src={vector} alt="view all vektor" /> </a>
                </li>
            </ul>
            <ul>
                <li className="list-healthcare">
                    <img src={skin} alt="skin" />
                    <h3 className="doctors-lead">{content[lang].doctors.list.itemThree.lead}</h3>
                    <p className="doctors-text">{content[lang].doctors.list.itemThree.lead}</p>
                    <a className="button2" href="/">{content[lang].doctors.list.button} <img src={vector} alt="view all vektor" /> </a>
                </li>
            </ul>
        </div>
    </div>
    <div className="view-button">
        <a href="/" className="button2">{content[lang].doctors.list.button}</a>
    </div>
</>
)
}

export default Doctors;