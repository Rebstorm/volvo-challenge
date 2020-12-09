import React from "react";
import chevronRight from "../../../assets/chevron-circled.svg";
import {View} from "vcc-ui";

interface NavigationButtonRowProps {
    theme: any,
    clickLessEvent: (e: React.MouseEvent<HTMLImageElement>) => void;
    clickMoreEvent: (e: React.MouseEvent<HTMLImageElement>) => void;

}
export class NavigationButtonRow extends React.Component<NavigationButtonRowProps, {}> {
    render() {
        return <View
            extend={{
                /* As we're switching between views, visibility is not smart here as it just hides the object, but still reserves the height/width */
                display: 'none',
                [this.props.theme.breakpoints.fromL]: {
                    display: 'block'
                },
            }}
            padding={1}
            direction={'row'} alignSelf={'end'}>
            <img src={chevronRight} alt={'left-chevron'} className='navigation-button inverted' onClick={this.props.clickMoreEvent}/>
            <img src={chevronRight} alt={'right-chevron'} className='navigation-button' onClick={this.props.clickLessEvent}/>
        </View>
    }
}