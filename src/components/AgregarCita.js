import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class AgregarCita extends Component {

    nombreMascotaRef = React.createRef()
    nombreDuenoRef = React.createRef()
    fechaRef = React.createRef()
    horaRef = React.createRef()
    sintomasRef = React.createRef()

    agregarCita = (e) => {
        e.preventDefault()

        const cita = {
            nombreMascota: this.nombreMascotaRef.current.value,
            nombreDueno: this.nombreDuenoRef.current.value,
            fecha: this.fechaRef.current.value,
            hora: this.horaRef.current.value,
            sintomas: this.sintomasRef.current.value
        }

        this.props.agregarCita(cita)

        e.currentTarget.reset()
    }

    render() {
        return (
            <div className="card mt-2">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agrega las Citas aquí</h2>
                    <form onSubmit={this.agregarCita}>
                        <div className="form-group row">
                            <label className="col-sm-6 col-lg-4 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-6 col-lg-8">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre Mascota" 
                                    ref={this.nombreMascotaRef}
                                />
                            </div> 
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-4 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-8">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre del Dueño de la Mascota" 
                                    ref={this.nombreDuenoRef}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-4 col-lg-4">
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    style={{fontSize: "14px"}}
                                    ref={this.fechaRef}
                                    />
                            </div>
                            <label className="col-sm-2 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-4 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    style={{fontSize: "14px"}}
                                    ref={this.horaRef} 
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Síntomas</label>
                            <div className="col-sm-8 col-lg-9">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Síntomas"
                                    ref={this.sintomasRef} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <input type="submit" value="Agregar Cita" className="btn btn-primary btn-block" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
AgregarCita.protoTypes = {
    agregarCita : PropTypes.func.isRequired
}
