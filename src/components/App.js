import React, { Component } from 'react';
import Header from './Header'
import AgregarCita from './AgregarCita'
import Listado from './Listado'

export default class App extends Component {

  state = {
    citas: {}
  }

  componentDidMount() {
    const citasLS = localStorage.getItem('citas')
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }

  agregarCita = (cita) => {
    const citas = {...this.state.citas}

    citas[`cita${Date.now()}`] = cita

    this.setState({
      citas: citas
    })
  }

  borrarCita = (id) => {
    const citas = {...this.state.citas}
    delete citas[id]

    this.setState({
      citas: citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header 
          title="Administrador de Pacientes de Veterinaria"
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita 
              agregarCita={this.agregarCita}
            />
          </div>
          <div className="col-md-6">
            <Listado 
              citas = {this.state.citas}
              borrarCita = {this.borrarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

