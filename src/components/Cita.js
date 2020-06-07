import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Cita extends Component {
    render() {
        const {nombreMascota, nombreDueno, fecha, hora, sintomas} = this.props.info
        return (
            <div className="media">
                <div className="media-body">
                    <h3>{nombreMascota}</h3>
                    <p className="card-text"><span>Nombre Dueño:</span> {nombreDueno}</p>
                    <p className="card<span>-text"><span>Fecha:</span> {fecha}</p>
                    <p className="car<span>d-text"><span>Hora:</span> {hora}</p>
                    <p className="card-te<span>xt"><span>Síntomas:</span> {sintomas}</p>
                    <button
                        onClick={ () => this.props.borrarCita(this.props.id)} 
                        className="btn btn-danger">Borrar &times;</button>
                </div>
            </div>
        )
    }
}
Cita.propTypes = {
    info : PropTypes.shape({
        fecha: PropTypes.string.isRequired,
        hora: PropTypes.string.isRequired,
        nombreMascota: PropTypes.string.isRequired,
        nombreDueno: PropTypes.string.isRequired,
        sintomas: PropTypes.string.isRequired
    })
}
