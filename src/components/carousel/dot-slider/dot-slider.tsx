import React from "react";
import {View} from "vcc-ui";
import {Dot} from "../dots/dot";
import {Slide} from "../types/slide";

interface DotSliderProps {
    theme: any,
    items: Slide[]
}

export class DotSlider extends React.Component< DotSliderProps, { }> {
    private readonly dotViews: React.RefObject<Dot>[]
    constructor(props: DotSliderProps) {
        super(props);
        this.dotViews = [];
    }

    render() {
        /* I want to use a grid, but I cannot for some reason extend that component as it breaks the queryParameters - Known Issue? Or just wrongly implemented? */
        return <View
            alignSelf={'center'}
            direction={'row'}
            extend={{
                display: 'flex',
                [this.props.theme.breakpoints.fromL]: {
                    display: 'none'
                },
            }}
            padding={1}>
            {
                /* Not sure this is the brightest of idea, but basically I map over all the entities I have, then I set the refs into an array so I can easily access them.
                The equivalent in Angular would be @ViewChildren().
                 */
                this.props.items.map((item, index) => {
                    let ref = React.createRef<Dot>();
                    this.dotViews.push(ref);
                    return <Dot startsActive={index === 0}
                        ref={ref}
                        id={item.id}
                        clickChildEvent={(e, dot) => this.changeFromChild(e,dot)}
                        key={item.id}
                    > </Dot>
                })
            }
        </View>
    }

    /**
     *
     * @param click
     * @param dot
     * @private Here we set the child as active and scrolls to the view
     */
    private changeFromChild(click: React.MouseEvent<HTMLSpanElement>, dot: Dot) {
        this.setStateOfChildren(dot);
        DotSlider.scrollToView(dot);
    }

    private setStateOfChildren(dot: Dot) {
        dot.setState({active: true});

        this.dotViews.forEach(everyDot => {
            if (everyDot.current) {
                if (everyDot.current.props.id !== dot.props.id) {
                    everyDot.current.setState({
                        active: false
                    })
                }
            }
        })
    }

    private static scrollToView(dot: Dot) {
        const selectedCar = document.querySelector(`#${dot.props.id}`);
        if (selectedCar) {
            selectedCar.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    }

}