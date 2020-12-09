import React from 'react';
import './carousel.scss';
import {View} from 'vcc-ui';
import {CarCarouselResponse} from "../../types/car.carousel.response";
import {DotSlider} from "./dot-slider/dot-slider";
import {NavigationButtonRow} from "./navigation-button-row/navigation-button-row";
import {Slide} from "./types/slide";
import {CarouselCards} from "./card/carousel-cards";
import {CarouselCardType} from "./card/types/carousel-card-type";


interface carCarouselProperties {
    theme: any // Missing typing from volvo vcc?
}
interface carCarouselState {
    cars: Array<CarCarouselResponse>;
}
export class Carousel extends React.Component<carCarouselProperties, carCarouselState> {

    private apiBaseUrl = 'http://localhost:3000';

    /* I want to use View as a type, but I dont have the typing */
    private rootView: React.RefObject<any>;

    constructor(props: any) {
        super(props);

        this.state = {
            cars: Array.of(),
        }

        this.rootView = React.createRef();
    }

    componentDidMount() {
        fetch(`${this.apiBaseUrl}/api/cars.json`)
            .then((readableJson: any) => readableJson.json())
            .then((cars: CarCarouselResponse[]) => this.loadCars(cars))
    }

    private loadCars(cars: CarCarouselResponse[]): void {
        this.setState({ cars: cars });
    }


    render() {
        /* This can be done with lodash, but I want to keep it vanilla for presentation */
        const carouselCards: CarouselCardType[] = [];
        const navigationSliders: Slide[] = [];
        this.state.cars.forEach(car => {

            const sliderObject: Slide = {
                id: car.id
            };
            navigationSliders.push(sliderObject);

            const cardObject: CarouselCardType = {
                id: car.id,
                inlay: car.bodyType,
                headline: car.modelName,
                headlineFlavour: car.modelType,
                imageUrl: car.imageUrl
            }
            carouselCards.push(cardObject)
        });


        return <View direction={'column'}>
            {/* My approach was to just simply inject the data, but you could also have the item just be a wrapper and
            handle design here as well. I didnt think that was a good idea though, as it makes the entire component redundant */}
            <CarouselCards theme={this.props.theme} getRootView={this.getRootView} items={carouselCards} baseUrl={this.apiBaseUrl}/>
            <NavigationButtonRow theme={this.props.theme} clickMoreEvent={this.showMore} clickLessEvent={this.showLess}/>
            <DotSlider theme={this.props.theme} items={navigationSliders}/>
        </View>
    }

    /* Not sure if this is the most optimal way of doing this, but I ask for the carousel container, so I can update it from here */
    private getRootView = (carCarousel: CarouselCards ) => {
        this.rootView = carCarousel.carContainer;
    }

    /* This is not hooked up to any view, because of time constraints - but basically here you can handle data coordination with other components */
    private showLess = (click: React.MouseEvent<HTMLImageElement>): void => {
        this.rootView.current.scrollLeft += 400;
    }

    private showMore = (click: React.MouseEvent<HTMLImageElement>): void => {
        this.rootView.current.scrollLeft -= 400;
    }


}

