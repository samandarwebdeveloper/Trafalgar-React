import "./page-info.scss"
import illustration from "../../img/trafalgar-illustration.png"
import illustrationSecond from "../../img/trafalgar-illustration2.png"
import downBtn from "../../img/Vector.png"
import content from "../../content"

function PageInfo({ lang }) {
    return (
        <>
        <div className="page-info">
        <div>
            <img src={illustration} alt="trafalgar-illustration" width="650" height="477" />
        </div>
        <ul className="page-item">
            <li className="list-healthcare">
                <h1 className="page-info__lead">{content[lang].pageInfo.pageOne.lead}</h1>
            </li>
            <li className="list-healthcare">
                <h2>______</h2>
            </li>
            <li className="list-healthcare">
                <p className="page-info__text">{content[lang].pageInfo.pageOne.text}</p>
                <a href="/" className="button2">{content[lang].pageInfo.pageOne.button}</a>
            </li>
        </ul>
        </div>
        <div className="page-info">
            <ul className="page-item">
                <li className="list-healthcare">
                    <h1 className="page-info__lead">{content[lang].pageInfo.pageSecond.lead}</h1>
                </li>
                <li className="list-healthcare">
                    <h2>_____</h2>
                </li>
                <li className="list-healthcare">
                    <p className="page-info__text2">{content[lang].pageInfo.pageSecond.text}</p>
                </li>
                <a href="/" className="button2">{content[lang].pageInfo.pageSecond.button} <img src={downBtn} alt="Download button" /></a>
            </ul>
            <img src={illustrationSecond} alt="trafalgar-illustration2" width="665" height="434" />
        </div>
        </>
    )
}
export default PageInfo;