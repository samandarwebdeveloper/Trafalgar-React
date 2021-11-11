import "./hero.scss"
import heroImg from "../../img/illustration.png"
import content from "../../content";

function Hero({ lang }) {
    return (
        <>
        <div className="healthcare">
        <div className="heath">
            <ul className="page-healthcare">
                <li className="list-healthcare">
                    <h1 className="hero-lead">{content[lang].heroSection.lead}</h1>
                </li>
                <li className="list-healthcare">
                    <p className="hero-text">{content[lang].heroSection.text}</p>
                </li>
                <a href="/" className="blubutton">{content[lang].heroSection.button}</a>
                </ul>
        </div>
        <div className="health-image">
            <img className="illustration" src={heroImg} alt="healthcare" width="693" height="598" />
        </div>
    </div>
        </>
    )
}
export default Hero;