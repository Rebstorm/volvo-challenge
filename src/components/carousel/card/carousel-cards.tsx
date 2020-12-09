import React from "react";
import {Link, Text, View} from "vcc-ui";
import {CarouselCardType} from "./types/carousel-card-type";

interface CarouselCardProps {
    theme: any,
    items: Array<CarouselCardType>;
    getRootView: (carouselCard: CarouselCards) => void;
    baseUrl: string
}
export class CarouselCards extends React.Component<CarouselCardProps, {} > {

    // I want to use a type, but I dont have the typings for the VCC
    carContainer: React.RefObject<any>

    constructor(props: CarouselCardProps) {
        super(props);

        this.carContainer = React.createRef();
    }

    render() {
        this.props.getRootView(this);

        return <View spacing={2}
                     direction={'row'}
                     className="carousel-container" ref={this.carContainer} >
            {
                this.props.items.map(item => {
                    return <View key={item} className="car-container" id={item.id}>
                        <Text variant="bates" as="h2">{item.inlay.toUpperCase()}</Text>
                        <Text subStyle="emphasis">{item.headline}
                        <Text extend={{
                            fontSize: '1em',
                            color: '#707070',
                            fontWeight: 300,
                            // As the sub headline slips down in mobile
                            display: 'block',
                            paddingLeft: 'none',
                            [this.props.theme.breakpoints.fromL]: {
                                display: 'inline',
                                paddingLeft: '6px'
                            },
                        }}>
                            {item.headlineFlavour} </Text></Text>
                        <img className="image-container" alt={item.headline} src={ `${this.props.baseUrl}${item.imageUrl}` }></img>
                        <div className="grid-links">
                            <Link href="https://www.volvocars.com/" arrow="right">
                                Learn
                            </Link>
                            <Link href="https://www.volvocars.com/" arrow="right">
                                Shop
                            </Link>
                        </div>
                    </View>
                })
            }
        </View>
    }




}