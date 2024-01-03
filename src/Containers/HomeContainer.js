import React, { useRef, useEffect } from 'react';
import '../Styles/Components/HomeContainer.scss'; // Prilagodite putanju do vašeg CSS fajla

const HomeContainer = () => {
    const homeContainerRef = useRef(null);
    const fePointLightRef = useRef(null);

    useEffect(() => {
        const homeContainerNode = homeContainerRef.current;
        const fePointLightNode = fePointLightRef.current;

        if (!homeContainerNode || !fePointLightNode) {
            // Provera da li su reference postavljene pre nego što pristupimo svojstvima
            return;
        }

        const handleMove = (event) => {
            fePointLightNode.setAttribute('x', event.clientX);
            fePointLightNode.setAttribute('y', event.clientY);
        };

        homeContainerNode.addEventListener('mousemove', handleMove);
        homeContainerNode.addEventListener('touchmove', handleMove);

        return () => {
            homeContainerNode.removeEventListener('mousemove', handleMove);
            homeContainerNode.removeEventListener('touchmove', handleMove);
        };
    }, [homeContainerRef, fePointLightRef]);

    return (
        <div className="home-container" ref={homeContainerRef}>
            <svg
                width="100%"
                height="100vh" // Postavi visinu na 100vh
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <filter id="light">
                    <feGaussianBlur stdDeviation="3" result="blurred"></feGaussianBlur>
                    <feColorMatrix in="blurred" type="luminanceToAlpha" result="bumpMap"></feColorMatrix>
                    <feDiffuseLighting in="bumpMap" surfaceScale="3" result="light">
                        <fePointLight ref={fePointLightRef} x="225" y="150" z="30"></fePointLight>
                    </feDiffuseLighting>
                    <feComposite
                        in="light"
                        in2="SourceGraphic"
                        operator="arithmetic"
                        k1="1" k2="0" k3="0" k4="0"
                    ></feComposite>
                </filter>
                <pattern
                    id="pattern1"
                    width="100%"
                    height="100%"
                    patternUnits="userSpaceOnUse"
                >
                    <image
                        xlinkHref="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="100%"
                        height="100%"
                    ></image>
                </pattern>
                <rect
                    width="100%"
                    height="100%"
                    fill="url(#pattern1)"
                    filter="url(#light)"
                ></rect>

            </svg>
            <div className="text-overlay">
                <p>Your text goes here</p>
            </div>
        </div>
    );
};

export default HomeContainer;
