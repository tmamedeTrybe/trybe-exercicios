import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render () {
        const {objeto} = this.props;
        return (
            <div className="pokemon">
                <section className="infos">
                    <h2>{objeto.name}</h2>
                    <p>{objeto.type}</p>
                    <p>{objeto.averageWeight.value}{objeto.averageWeight.measurementUnit}</p>
                </section>
                <section>
                    <img src={objeto.image} alt="Imagem de um pokemon"></img>
                </section>
            </div>
        )
    }
}
Pokemon.propTypes = {
    objeto: PropTypes.object.isRequired
}


export default Pokemon;