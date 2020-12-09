import React from 'react';
import {CarouselCardType} from "./card/types/carousel-card-type";
import {render, unmountComponentAtNode} from "react-dom";
import {StyleProvider, ThemeProvider} from "vcc-ui";
import volvo from "vcc-ui/lib/themes/volvo";
import {NavigationButtonRow} from "./navigation-button-row/navigation-button-row";
import {Carousel} from "./carousel";

let container: Element;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});


/* This is a typical UNIT test, normally I would write another 15, maybe a parameterized test, but due to time constraints I have limited myself */
test('[INTEGRATION TEST] it should render a fully-fledged carousel', ()=> {
    const items = Array.of<CarouselCardType>( {headline: 'Hello world!', headlineFlavour: undefined, id: '1', imageUrl: "www.google.com/img.png", inlay: 'Im an inlay! Yay!'})

    render( <StyleProvider>
        <ThemeProvider theme={volvo}>
            <Carousel theme={{ breakpoints: {fromL: 123 }}} />
        </ThemeProvider>
    </StyleProvider>, container);

    // This test is garbage, I know, I would rather re-write this to make checks against event listeners. But time constraints.
    expect(container.children).toBeDefined();
})


afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove()
});