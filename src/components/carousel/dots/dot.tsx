import React from "react";
import {View} from 'vcc-ui'
import './dot.scss';

interface DotState{
    active: boolean
}

interface DotProps {
    id: string;
    clickChildEvent: (e: React.MouseEvent<HTMLSpanElement>, o: Dot) => void;
    startsActive: boolean
}

export class Dot extends React.Component<DotProps, DotState> {

    constructor(props: DotProps) {
        super(props);
        this.state = {
            active: props.startsActive
        }
    }

    render() {
        return <View>
            <span className={`dot ${this.state.active ? 'active' : ''}`} onClick={ (e ) => this.props.clickChildEvent(e, this)}/>
        </View>
    }
}