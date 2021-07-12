import React from 'react';
import ContentTitle from '../ContentTitle/ContentTitle';

import './About.css';
import Image from './assets/city.jpg';
import Image1 from './assets/image1.jpg';
import Image2 from './assets/image2.jpg';

const About = () => {
    return(
        <div className="About">
            
            <div className="About__hero">
                <div className="About__img">
                    <img alt="about pic" className="About__image" src={Image} />
                </div>
            
                <div className="About__name">
                    <ContentTitle style={{ marginLeft: -20 }} actionTitle="About our agency" titleDescription="Dilandia is an international digital agency that operates in New York and Tashkent. With over five years of experience, we cater to a diverse array of clients, both within and beyond our borders. Whether you're looking for world-class designs, marketing, or technological development, we're the right team for you!" />
                </div>
            </div>

            <div className="About__contentImage">
                <div className="About__leftImage">
                    <img alt="about pic" className="About__image" src={Image1} />
                </div>
                <div className="About__rightImage">
                    <img alt="about pic" className="About__image" src={Image2} />
                </div>
            </div>

            <div className="About__information">

                <div className="About__informationTable">
                    <div className="About__info">
                        <h1 className="About__informationTitle">
                            Who we are
                        </h1>
                        <p className="About__informationText">
                            We have produced stunning, award-winning web designs in multiple verticals, giving our hundreds of clients worldwide the leading edge and exponential growth in an ever changing online digital marketplace. We recognize that usability, functionality, and visualization are three of the most important factors when designing interfaces or websites. Therefore, we will work with you and bring your idea to life. We fundamentally believe in supporting our people to create the future they envision.
                        </p>
                    </div>
                    <div className="About__info">
                        <h1 className="About__informationTitle">
                            How we work
                        </h1>
                        <p className="About__informationText">
                            We know the elements that influence the perception of a brand by potential customers. Our online marketing team is ready to help you grow your business through website design, web development, SEO services, e-commerce, content marketing, content creation, online advertising, social media marketing, and Google Ads / Google Adwords. We can effectively promote your company so that it would stand out from your competitors.
                        </p>
                    </div>
                </div>

                <div className="About__informationTable">
                    <div className="About__info">
                        <h1 className="About__informationTitle">
                            Our Mission
                        </h1>
                        <p className="About__informationText">
                            We advise our customers when they are struggling to find a perfect solution. We prompt when they lack unconventional ideas. We create and implement projects that are destined for success. We know that achieving these goals moves businesses forward, and we believe that our clients' success is the best measure of our own performance. The Internet is our passion, and we are passionate about helping your business reach its goals.
                        </p>
                    </div>
                    <div className="About__info">
                        <h1 className="About__informationTitle">
                            Our Vision
                        </h1>
                        <p className="About__informationText">
                            What truly sets Dilandia apart is our dedication to positivity as the core of our company values. We strive to replace complaints with solutions, use challenges to our benefit, and bring energy and creativity to every project we take on. For every high-impact task we complete, Dilandia adds to the Dilandia Fund, which we use to support organizations that provide education, shelter, and clean drinking water to people worldwide.
                        </p>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default About;