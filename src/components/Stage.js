import React, { PropTypes } from 'react';
import Menu from 'containers/Menu';
import { Card } from 'components/Card';
import TweenLite from 'gsap';

export class Stage extends React.Component {

    // TODO: talvez tirar daqui
    componentWillReceiveProps(nextProps) {
        if (nextProps.play !== this.props.play) {
            TweenLite.staggerTo('.card-faces', 1, { rotationY: nextProps.play ? -180 : 0 }, 0.01);
        }
    }

    render() {
        return (
            <div className="stage">
                <div className="cards-list">
                    {this.props.order.map(id =>
                        <Card
                            key={id}
                            name={this.props.cards[id].name}
                            frontImg={this.props.cards[id].image}
                            backImg={this.props.cards[id].imageBackCard}
                            onClick={() => this.props.setCard(id)}
                            selected={this.props.play && this.props.selected === id}
                        />
                    )}
                </div>
            </div>
        );
    }
}

Stage.propTypes = {
    order: PropTypes.array.isRequired,
    cards: PropTypes.shape({
        name: PropTypes.string,
        frontImg: PropTypes.string,
        backImg: PropTypes.string,
    }),
    play: PropTypes.bool,
};
