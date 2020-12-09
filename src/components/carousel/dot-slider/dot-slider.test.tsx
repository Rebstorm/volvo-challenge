import {render, unmountComponentAtNode} from "react-dom";
import React from "react";
import {StyleProvider, ThemeProvider} from "vcc-ui";
import volvo from "vcc-ui/lib/themes/volvo";
import {DotSlider} from "./dot-slider";
import {Slide} from "../types/slide";


let container: Element;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

/* This is a typical UNIT test, normally I would write another 15, maybe a parameterized test, but due to time constraints I have limited myself */
test('it should render the 3 buttons, if we have 3 cars', ()=> {
    const items = Array.of<Slide>( {id: "1"}, { id: "2"}, {id: "3"})

    render( <StyleProvider>
                <ThemeProvider theme={volvo}>
                    <DotSlider theme={{ breakpoints: {fromL: 123 }}} items={ items }/>
                </ThemeProvider>
            </StyleProvider>, container);

    // Apparently VCC has a div-> inside a div -> then we get the kids.
    expect(container.firstChild?.childNodes.length).toBe(3);
})


afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove()
});