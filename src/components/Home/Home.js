import React, { useEffect } from 'react';
import Card from '../Card/Card';
import ServiceCard from '../ServiceCard/ServiceCard'
import Button from '../Button/Button';
import ContentTitle from '../ContentTitle/ContentTitle';
import './style.css';
import { page } from '../../router';

import Image1 from './assets/1.jpg';
import Image2 from './assets/2.jpg';
import Image3 from './assets/3.jpg';
import Image4 from './assets/4.jpg';
import Image5 from './assets/5.jpg';
import Image6 from './assets/6.jpg';

import WebDesign from './assets/web-design.png';
import Seo from './assets/seo.png';
import Vector from './assets/vector.png';
import Creative from './assets/creative.png';
import Camera from './assets/action-camera.png';
import Social from './assets/social-media.png';

import { gsap } from 'gsap';


const Home = () => {
    useEffect(() => {
        gsap.from('.Home__title', { y: -40, opacity: 0, duration: 1, ease: "bounce" });
        gsap.from('.Home__text', { y: -40, opacity: 0, duration: 1, ease: "bounce" });
    }, []);

    return(
        <div>
            <div className="Home__wrapper">
                <section className="Home" >
                    <h1 className="Home__title" >
                        We're in this together
                    </h1>
                    <p className="Home__text" >
                        We are a digital agency that lives and breathes results. We’ve pushed ourselves to deliver the most forward-thinking digital
                        experiences for our clients.
                    </p>
                 </section>

                <section className="Home__work">
                    <div className="Home__workHeader">
                        <ContentTitle actionTitle="Work" titleDescription="Our selected projects" />
                    </div>
                    <div className="Home__cardTable">
                        <div className="Home__workContent">
                            <Card actionTitle="Colibrisoft" cardImage={Image1} titleDescription="We are a digital agency that lives and breathes results. We’ve pushed ourselves" />
                            <Card actionTitle="World History" cardImage={Image2} titleDescription="We're researching for history of maps" />
                            <Card actionTitle="Fly company" cardImage={Image3} titleDescription="We're fly agency" />
                        </div>
                        <div className="Home__workContent">
                            <Card actionTitle="Dark Night" cardImage={Image4} titleDescription="It's an interesting game for adults" />
                            <Card actionTitle="Monopoly" cardImage={Image5} titleDescription="It's an intellektual game for children" />
                            <Card actionTitle="Building Company" cardImage={Image6} titleDescription="We're building a new appartaments" />
                        </div>
                    </div>
                    
                    <div className="Home__workFooter">
                        <Button goTo={page.work} ButtonTitle="Show More" />
                    </div>
                </section>

                <section className="Home__services">

                    <div className="Home__servicesName">
                        <ContentTitle actionTitle="Our Services" titleDescription="Tell us about your goals" />
                    </div>

                    <div className="Home__servicesContent">
                        <div className="Home__servicesTable">
                            <ServiceCard actionName="Web Design" titleDescription="We don’t just make websites for you. We sculpt them, we refine then, and we create art for the internet." cardImage={WebDesign} />
                            <ServiceCard actionName="Web Development" titleDescription="Our cutting-edge and dynamic web development service is ideal for small to medium scale projects." cardImage={Seo} />
                            <ServiceCard actionName="Graphic Design" titleDescription="Dress your company for success by bringing cutting-edge graphic design services that allow your brand to look its best." cardImage={Vector} />
                        </div>
                        <div className="Home__servicesTable">
                            <ServiceCard actionName="Branding" titleDescription="A unique, visible brand is central to your businesses’ growth and development." cardImage={Creative} />
                            <ServiceCard actionName="Photography" titleDescription="Visual content is king. Whether you need to breathe life into your website or advertising" cardImage={Camera} />
                            <ServiceCard actionName="Social Media" titleDescription="With our custom social media marketing service plan, the sky is the limit." cardImage={Social} />
                        </div>
                    </div>

                    <div className="Home__workFooter" >
                        <Button goTo={page.services} ButtonTitle="Show More" />
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Home;