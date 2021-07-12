import React, { useEffect } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import ServiceCard from '../ServiceCard/ServiceCard';
import ContentTitle from '../ContentTitle/ContentTitle';

import './style.css';
import { page } from '../../router';

import Image from '../Work/assets/1.jpg'

import WebDesign from './assets/web-design.png';
import Seo from './assets/seo.png';
import Vector from './assets/vector.png';
import Creative from './assets/creative.png';
import Camera from './assets/action-camera.png';
import Social from './assets/social-media.png';

import gsap from 'gsap';

const Work = () => {
    useEffect(() => {
        gsap.from('.Work__title', { y: -40, opacity: 0, duration: 1, ease: "bounce" });
        gsap.from('.Work__text', { y: -40, opacity: 0, duration: 1, ease: "bounce" });
    }, []);
    
    return(

            <section className="Work" >
                <h1 className="Work__title" >Our wall of fame</h1>
                <p className="Work__text" >
                    We believe that great success comes from forming great relationships. We work closely with our clients all over the world to identify their digital vision and needs to exceed their goals by making them stand out in a fast-moving online environment. Here are some recent success stories.
                </p>

                <div className="Work__content">

                    <Card actionTitle="Colibrisoft" cardImage={Image} />
                    <Card actionTitle="Colibrisoft" cardImage={Image} />
                    <Card actionTitle="Colibrisoft" cardImage={Image} />

                </div>

                <div className="Work__content">

                    <Card actionTitle="Colibrisoft" cardImage={Image} />
                    <Card actionTitle="Colibrisoft" cardImage={Image} />
                    <Card actionTitle="Colibrisoft" cardImage={Image} />

                </div>
                
                <div className="Work__content">

                    <Card actionTitle="Colibrisoft" cardImage={Image} />
                    <Card actionTitle="Colibrisoft" cardImage={Image} />
                    <Card actionTitle="Colibrisoft" cardImage={Image} />

                </div>

                        <div className="Work__servicesName">
                            <ContentTitle actionTitle="Our Services" titleDescription="Tell Us about your goals" />
                        </div>
                
                <div className="Work__servicesTable">
                  
                        <div className="Work__servicesContent">
                            <ServiceCard actionName="Web Design" titleDescription="We don’t just make websites for you. We sculpt them, we refine then, and we create art for the internet." cardImage={WebDesign} />
                            <ServiceCard actionName="Web Development" titleDescription="Our cutting-edge and dynamic web development service is ideal for small to medium scale projects." cardImage={Seo} />
                            <ServiceCard actionName="Graphic Design" titleDescription="Dress your company for success by bringing cutting-edge graphic design services that allow your brand to look its best." cardImage={Vector} />
                        </div>
                        <div className="Work__servicesContent">
                            <ServiceCard actionName="Branding" titleDescription="A unique, visible brand is central to your businesses’ growth and development." cardImage={Creative} />
                            <ServiceCard actionName="Photography" titleDescription="Visual content is king. Whether you need to breathe life into your website or advertising" cardImage={Camera} />
                            <ServiceCard actionName="Social Media" titleDescription="With our custom social media marketing service plan, the sky is the limit." cardImage={Social} />
                        </div>

                </div>
                <div className="Work__servicesFooter">
                    <Button goTo={page.services} ButtonTitle="Show More" />
                </div>
                
    
            </section>

    );
}

export default Work;