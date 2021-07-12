import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { gsap } from 'gsap';

import './style.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const App = () => {

    return(
        <BrowserRouter>
            <Header />
            
            <Route render={({ location }) => {
                    const { key } = location;

                    return(
                        <TransitionGroup component={null} >
                            <Transition 
                            key={key}
                            timeout={{ enter: 200, exit: 1000 }}
                            onEnter={(node) => {
                                node.style.display = 'none';
                                setTimeout(() => node.style.display = 'block', 300);
                            }}
                            onExit={() => {
                                const wrapper = document.createElement('div');
                                wrapper.classList.add('Wrapper');
                                document.body.appendChild(wrapper);

                                gsap.from('.Wrapper', { x: '100%', duration: 1, onComplete: () => document.body.removeChild(wrapper) });
                            }
                        }
                            >
                                <Main location={location} />
                            </Transition>
                        </TransitionGroup>
                    );
                }
            } 
        />

            <Footer />
        </BrowserRouter>
    );
}

export default App;