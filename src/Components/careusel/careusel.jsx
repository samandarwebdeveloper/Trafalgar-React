import "./careusel.scss"
import photoCeo from "../../img/Mask Group.png"
import careusel from "../../img/arrow nav.png"
import content from "../../content"

function Careusel({ lang }) {
    return (
        <>
        <div className="container">
            <div className="founder">
            <h1 className="box">{content[lang].caruesel.lead}</h1>
            <hr className="line2" />
                <img className="photo-ceo" src={photoCeo} alt="founder" width="133" height="133" />
                <ul className="block">
                    <li className="circle">
                        <h3 className="boss">{content[lang].caruesel.name}</h3>
                    </li>
                    <li className="list-healthcare">
                        <p className="boss">{content[lang].caruesel.job}</p>
                    </li>
                </ul>
                <div className="block circle">
                        <p>{content[lang].caruesel.title}</p>
                </div>
            </div>
            <div className="slide-page">
                <img src={careusel} alt="slide page" width="280" />
            </div>
        </div>
        </>
    )
}
export default Careusel;