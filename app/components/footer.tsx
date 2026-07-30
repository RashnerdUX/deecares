import { Link } from "react-router";
import FooterNavIconLink from "./footer-nav-icon";
import { MdOutlinePublic, MdOutlineMail, MdOutlineShare, MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md"; 

const DeeCaresFooter = () => {

    return (
        <>
            <footer className="footer py-24">
                <div className="flex flex-col md:flex-row justify-between items-start max-w-300 mx-auto px-4 w-full gap-12">
                    {/* The Company details */}
                    <div className="max-w-xs space-y-6">
                        <h2 className="text-headline-md font-headline-md font-bold text-primary-foreground">DeeCares Foundation</h2>
                        <p className="font-body-md opacity-80">A registered non-profit organization dedicated to enhancing the quality of life for Nigeria's senior citizens through compassion, care, and community.</p>
                        <div className="flex gap-4">
                            <FooterNavIconLink linkAddress="#" linkIcon={<MdOutlinePublic size={24} />} />
                            <FooterNavIconLink linkAddress="#" linkIcon={<MdOutlineMail size={24} />} />
                            <FooterNavIconLink linkAddress="#" linkIcon={<MdOutlineShare size={24} />} />
                        </div>
                    </div>

                    {/* The Website shortcut links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 grow">
                        {/* Quick Links */}
                        <div>
                            <h4 className="footer-link-header"> Quick Links </h4>
                            <ul className="footer-link-list">
                                <li><Link to={"#"} className="footer-link-item">Our Story</Link></li>
                                <li><Link to={"#"} className="footer-link-item">Impact Stories</Link></li>
                                <li><Link to={"#"} className="footer-link-item">Get Involved</Link></li>
                                <li><Link to={"#"} className="footer-link-item">Donate</Link></li>
                            </ul>
                        </div>
                        {/* Resources */}
                        <div>
                            <h4 className="footer-link-header"> Resources </h4>
                            <ul className="footer-link-list">
                                <li><Link to={"#"} className="footer-link-item">Annual Reports</Link></li>
                                <li><Link to={"#"} className="footer-link-item">Outreach Reports</Link></li>
                                <li><Link to={"#"} className="footer-link-item">Privacy Policy</Link></li>
                                <li><Link to={"#"} className="footer-link-item">Careers</Link></li>
                            </ul>
                        </div>
                        {/* Contact details */}
                        <div>
                            <h4 className="footer-link-header"> Contact </h4>
                            <ul className="footer-link-list">
                                <li className="flex items-start gap-2">
                                    <MdOutlineLocationOn size={20}/>
                                    Ibadan, Oyo State, Nigeria
                                </li>
                                <li className="flex items-start gap-2">
                                    <MdOutlinePhone size={20}/>
                                    +2347076160818
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="max-w-300 mx-auto px-4 mt-20 pt-8 border-t border-on-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 opacity-60 font-label-sm">
                    <p className="text-center md:text-left">© 2026 DeeCares Foundation. Empowering elderly lives in Nigeria.</p>
                    <div className="flex gap-6">
                        <a className="hover:underline" href="#">Privacy Policy</a>
                        <a className="hover:underline" href="#">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default DeeCaresFooter;