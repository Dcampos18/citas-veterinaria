import React, { Component } from 'react'
import Cita from './Cita'
import PropTypes from 'prop-types'


export default class Listado extends Component {

    render() {
        const citas = this.props.citas
        const mensaje = Object.keys(citas).length === 0 ? 'No Hay Citas' : 'Administre sus citas aquí'
        return (
            <div className="card mt-2">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>
                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(cita => (
                            <Cita
                                id={cita}
                                key={cita} 
                                info={this.props.citas[cita]}
                                borrarCita={this.props.borrarCita}
                            />
                        ))}
                    </div>  
                </div>
            </div>
        )
    }
}
Listado.propTypes = {
    citas : PropTypes.object.isRequired
}