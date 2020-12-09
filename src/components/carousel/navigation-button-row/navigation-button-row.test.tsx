import {CarouselCardType} from "../card/types/carousel-card-type";
import {render, unmountComponentAtNode} from "react-dom";
import {StyleProvider, ThemeProvider} from "vcc-ui";
import volvo from "vcc-ui/lib/themes/volvo";
import React from "react";
import {NavigationButtonRow} from "./navigation-button-row";

let container: Element;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});


/* This is a typical UNIT test, normally I would write another 15, maybe a parameterized test, but due to time constraints I have limited myself */
test('should render to chevrons, one with 180deg rotation', ()=> {
    const items = Array.of<CarouselCardType>( {headline: 'Hello world!', headlineFlavour: undefined, id: '1', imageUrl: "www.google.com/img.png", inlay: 'Im an inlay! Yay!'})

    render( <StyleProvider>
        <ThemeProvider theme={volvo}>
            <NavigationButtonRow theme={{ breakpoints: {fromL: 123 }}} clickMoreEvent={() => {}} clickLessEvent={() => {}} />
        </ThemeProvider>
    </StyleProvider>, container);

    const chevronButtons = container.querySelectorAll('.navigation-button');
    expect(chevronButtons[0].className).toContain('navigation-button inverted')
    expect(chevronButtons[1].className).toBe('navigation-button')
})


afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove()
});