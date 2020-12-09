import {CarouselCardType} from "../card/types/carousel-card-type";
import {render, unmountComponentAtNode} from "react-dom";
import {StyleProvider, ThemeProvider} from "vcc-ui";
import volvo from "vcc-ui/lib/themes/volvo";
import React from "react";
import {NavigationButtonRow} from "./navigation-button-row";
import {Dot} from "./dot";

let container: Element;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});


/* This is a typical UNIT test, normally I would write another 15, maybe a parameterized test, but due to time constraints I have limited myself */
test('the dot should not be constructed as active', ()=> {
    const items = Array.of<CarouselCardType>( {headline: 'Hello world!', headlineFlavour: undefined, id: '1', imageUrl: "www.google.com/img.png", inlay: 'Im an inlay! Yay!'})

    render( <StyleProvider>
        <ThemeProvider theme={volvo}>
            <Dot id={'1'} startsActive={false} clickChildEvent={() => {}} />
        </ThemeProvider>
    </StyleProvider>, container);

    const dot = container.querySelector('.dot')
    expect(dot?.classList).not.toContain('active');
})


afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove()
});