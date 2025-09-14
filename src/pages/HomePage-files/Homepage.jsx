import React from 'react';
import { Link } from 'react-router-dom';
import HeroSect from "../../compontents/Sect1Hero/Sect1Hero";
import Sect2 from "../../compontents/Sect2Hero/Sect2Hero";
import GetQuote from "../../compontents/GetAQuote/GetAQuote";
import FlipCard from '../../compontents/FlipCard/FlipCard'; // NEW: Import FlipCard
import '../../compontents/FlipCard/FlipCard.css'; // NEW: Import FlipCard CSS
import "./homepage.css";

function newHomepage() {
    return (
        <div className="home-body">
            <div className="Section-1">
                {/* This section will contain: UVP, Problem/Result */}
                <HeroSect />
                <div className="Sect1-PandR">
                    <h2>Tired of a website that is slow, insecure, and looks just like your competitor's?</h2>
                    <h4>We build custom websites that are:</h4>
                    <div className="Sect1-List-Container">
                        <div className="Sect1-List-Item">
                            <FlipCard
                                className="website-flip-card"
                                frontContent={<h3>Fast-Loading</h3>}
                                backContent={<p>Do not lose customers to slow loading speeds.</p>}
                            />
                        </div>
                        <div className="Sect1-List-Item">
                            <FlipCard
                                className="website-flip-card"
                                frontContent={<h3>Uniquely Yours</h3>}
                                backContent={<p>Break free from generic templates.</p>}
                            />
                        </div>
                        <div className="Sect1-List-Item">
                            <FlipCard
                                className="website-flip-card"
                                frontContent={<h3>Built to Last</h3>}
                                backContent={<p>Secure, stable and scalable code.</p>}
                            />
                        </div>
                        <div className="Sect1-List-Item">
                            <FlipCard
                                className="website-flip-card"
                                frontContent={<h3>Mobile-Perfect</h3>}
                                backContent={<p>Flawless on Every Device</p>}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Sect2 />
            <div className="Section-3">
                {/* This section will contain: ideal Client, Call to actions */}
                <div className="Sect3-Ideal">
                    <h2>Is DEIS Right For You?</h2>
                    <h4>We are the perfect fit for businesses that:</h4>
                    <ul>
                        <li>Value quality and customization over cheap, quick fixes.</li>
                        <li>See their website as a key investment in their growth.</li>
                        <li>Are ready to upgrade from a generic template or outdated site.</li>
                        <li>Want a true partner, not just a coder.</li>
                    </ul>
                </div>
            </div>
            <GetQuote />
        </div>
    )
}

export default newHomepage
