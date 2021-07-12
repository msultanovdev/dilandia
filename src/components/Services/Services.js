import React, { useEffect } from 'react';
import ToolCard from '../ToolCard/ToolCard';

import './Services.css';
import gsap from 'gsap';


import servicesImage from './assets/services.png';
import WebDesign from './assets/web-design.png';
import Seo from './assets/seo.png';
import Vector from './assets/vector.png';
import Creative from './assets/creative.png';
import Camera from './assets/action-camera.png';
import Social from './assets/social-media.png';

const Services = () => {
    useEffect(() => {
        gsap.from('.Services__name', { x: -100, opacity: 0, duration: 1, ease: "bounce" });
        gsap.from('.Services__img', { x: 100, opacity: 0, duration: 1, ease: "bounce" });
    }, []);

    return(
        <section className="Services">
            
            <div className="Services__hero">
                <div className="Services__content">

                    <div className="Services__name">
                        <h1 className="Services__title">
                            Our services
                        </h1>
                        <p className="Services__text">
                            By choosing Dilandia, you will be in good company. We have helped global corporations, exciting start-ups, and local service businesses alike by skyrocketing their online revenue. So when you choose Dilandia as your digital agency, you will not get a cookie-cutter strategy — you will get a custom plan that fits your company, your targeted needs, and your goals.
                        </p>
                    </div>

                    <div className="Services__img">
                        <img alt="services pic" className="Services__image" src={servicesImage} />
                    </div>

                </div>

                <div className="Services__cards">
                    <ToolCard toolCardImage={WebDesign} toolCardAction="Web Design" toolCardText="“Pixels with purpose”" toolCardDesctiption="We do not just make websites for you. We sculpt them, refine them, and create art for the internet. Our web design portfolio stresses the importance of having the right brand identity for your business. If you aim to increase revenue, expand your business, and attract dream clients, we can help. “Let’s give your business the image it deserves – the image of success.”" />
                    <ToolCard toolCardImage={Seo} toolCardAction="Web Development" toolCardText="“There is no 'one size fits all' approach”" toolCardDesctiption="Our cutting-edge and dynamic web development service is ideal for small to medium scale projects with complex and bespoke requirements. Our web development services will make sure you get exactly what you want, how you want it, and when you want it. We develop websites and apps with Agile methodology and a focussed project management approach." />
                    <ToolCard toolCardImage={Vector} toolCardAction="Graphic Design" toolCardText="“We’re the stylists your business needs to go to”" toolCardDesctiption="Dress your company for success by bringing cutting-edge graphic design services that allow your brand to look its best. We offer simple yet result driven designs to create innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals." />
                </div>
                <div className="Services__cards">
                    <ToolCard toolCardImage={Creative} toolCardAction="Branding" toolCardText="“Let us make your identity for you”" toolCardDesctiption="A unique, visible brand is central to your businesses’ growth and development. Dilandia has all the tools you need to make your brand, construct your image, refine your look, and streamline your brand identity. Our values define us and how we treat our clients – with respect, honesty, and camaraderie. We are a diverse bunch held together by a great team rapport, working together like a well-oiled machine" />
                    <ToolCard toolCardImage={Camera} toolCardAction="Photography" toolCardText="“Capturing everything that is beautiful about you!”" toolCardDesctiption="Visual content is king. Whether you need to breathe life into your website, social media marketing, or advertising, Dilandia’s photographers tell dimensional stories with photos that are styled, lit, and edited for maximum impact. Our in-house photography services team made up of professional photographers can add value to your website with high-resolution team photos, corporate event photography, and product photography" />
                    <ToolCard toolCardImage={Social} toolCardAction="Social Media" toolCardText="“Get your social media game on-point!”" toolCardDesctiption="With a custom social media marketing service plan, your business can start building brand awareness and generate revenue from social media platforms like Facebook, LinkedIn, Instagram, and more. Your customers are already interacting with brands through social media. Great marketing on social media can bring remarkable success to your business, creating devoted brand advocates and even driving leads and sales. That’s where we come in!" />
                </div>

            </div>

        </section>
    );
}

export default Services;