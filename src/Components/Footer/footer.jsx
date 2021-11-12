import "./footer.scss"
import siteFooterLogo from "../../img/logo2.svg"
import content from "../../content";

function Footer({ lang }) {
    return (
        <div className="footer">
            <div className="container">
                <div className="site-end">
                    <ul className="footer-logo">
                        <img src={siteFooterLogo} alt="logo2" />
                        <li>
                            <p className="footer-logo__text">
                            {content[lang].footer.sitate}
                            </p>
                        </li>
                            <p>{content[lang].footer.copyright}</p>
            
                    </ul>
                    <nav className="footer-nav">
                        <ul className="list-type">
                            <li>
                                <a href="/" className="site-end-link">
                                    <h3>{content[lang].footer.company.name}</h3>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="site-end-link">{content[lang].footer.company.about}</a>
                            </li>
                            <li>
                                <a href="/" className="site-end-link">{content[lang].footer.company.testimonials}</a>
                            </li>
                            <li>
                                <a href="/" className="site-end-link">{content[lang].footer.company.findDoctor}</a>
                            </li>
                            <li>
                                <a href="/" className="site-end-link">{content[lang].footer.company.apps}</a>
                            </li>
                        </ul>
                        <ul className="list-type">
                            <li>
                                <a href="/" className="site-end-link">
                                    <h3>{content[lang].footer.region.name}</h3>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="site-end-link">{content[lang].footer.region.indonesia}</a>
                            </li>
                            <li>
                                <a href="/" className="site-end-link">{content[lang].footer.region.singapore}</a>
                            </li>
                            <li>
                                <a href="/" className="site-end-link">{content[lang].footer.region.hongkong}</a>
                            </li>
                            <li>
                                <a href="/" className="site-end-link">{content[lang].footer.region.canada}</a>
                            </li>
                        </ul>
                        <ul className="list-type">
                            <li>
                                <a href="/" className="site-end-link">
                                    <h3>{content[lang].footer.help.name}</h3>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="site-end-link">{content[lang].footer.help.helpCenter}</a>
                            </li>
                            <li>
                                <a href="/" className="site-end-link">{content[lang].footer.help.contactSupport}</a>
                            </li>
                            <li>
                                <a href="/" className="site-end-link">{content[lang].footer.help.instructions}</a>
                            </li>
                            <li>
                                <a href="/" className="site-end-link">{content[lang].footer.help.howItWorks}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Footer;