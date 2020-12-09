import {render, unmountComponentAtNode} from "react-dom";
import {CarouselCards} from "./carousel-cards";
import React from "react";
import {CarouselCardType} from "./types/carousel-card-type";
import {StyleProvider, ThemeProvider} from "vcc-ui";
import volvo from "vcc-ui/lib/themes/volvo";


let container: Element;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});


/* This is a typical UNIT test, normally I would write another 15, maybe a parameterized test, but due to time constraints I have limited myself */
test('should make sure that the inlay is correctly set as UPPERCASE', ()=> {
    const items = Array.of<CarouselCardType>( {headline: 'Hello world!', headlineFlavour: undefined, id: '1', imageUrl: "www.google.com/img.png", inlay: 'Im an inlay! Yay!'})

    render( <StyleProvider>
                <ThemeProvider theme={volvo}>
                    <CarouselCards theme={{ breakpoints: {fromL: 123 }}} getRootView={ () => {}} items={ items } baseUrl={'hello'}/>
                </ThemeProvider>
            </StyleProvider>, container);

    expect(container.querySelector('h2')?.textContent).toBe(items[0].inlay.toUpperCase())
})


afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove()
});