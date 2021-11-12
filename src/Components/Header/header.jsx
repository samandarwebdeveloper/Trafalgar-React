import "./header.scss"
import siteLogo from "../../img/logo.svg"
import content from "../../content";


function Header({ lang, setLang, color, setColor }) {

    return (
        <>
        <div className="container">
            <div className="navbar">
                <div className="header-left">
                    <a href="/">
                        <img src={siteLogo} alt="its site logo" />
                    </a>
                </div>
                <div className="header-right">
                    <select defaultValue={color} onChange={(evt) => setColor(evt.target.value)}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                    <select defaultValue={lang} onChange={(evt) => setLang(evt.target.value)}>
                        <option value="eng">ENG</option>
                        <option value="ru">RU</option>
                        <option value="uz">UZ</option>
                    </select>
                    <ul className="navbar-items">
                        <li className="items"><a className={"nav-list-active"} href="/">{content[lang].navbar.home}</a></li>
                        <li className="items"><a className={"nav-list"} href="/">{content[lang].navbar.findDoctor}</a></li>
                        <li className="items"><a className={"nav-list"} href="/">{content[lang].navbar.apps}</a></li>
                        <li className="items"><a className={"nav-list"} href="/">{content[lang].navbar.testimonials}</a></li>
                        <li className="items"><a className={"nav-list"} href="/">{content[lang].navbar.aboutUs}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
export default Header;