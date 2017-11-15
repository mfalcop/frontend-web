import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';

class NewProject extends Component{
    
    
    constructor(props) {
        super(props)
    } 
    
    render() {
        return (
            
            <MuiThemeProvider>
                <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10">
                        <Card>
                        <CardHeader
                              title="Crear Proyecto"
                              showExpandableButton={true}
                              className="text-center  pt-3"
                            />
                            <div className="card-body">
                                <form className="d-flex flex-column">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Nombre del proyecto</label>
                                        <input name="nombre" onChange={this.handleInputChange} type="text" className="form-control" id="name"  placeholder="Nombre" />
                                       
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputDescrp">Descripcion</label>
                                        <input name="descr" onChange={this.handleInputChange} type="text" className="form-control" id="descrip" placeholder="Description" />
                                    </div>
                                    
                                    <Card>
                                    <CardHeader
                              title="Nombre del archivo"/>
                                       
                                         <label className="label" >nombredelArchivo.zip</label>
                                         <button  type="submit" className="btn btn-primary mr-3 subirbtn">SUBIR ARCHIVO .ZIP</button>
                                         <div className="form-group">
                                        </div>
                                    </Card>
                                    <div className="form-group">
                                    <div>
                                         <label className="label" >Fecha de creacion:   </label>
                                         <label className="label" >14 de Noviembre de 2017</label>
                                          <label className="label" >Creador:   </label>
                                         <label className="label" >Carlos de los Reyes</label>
                                    </div>
                                    </div>
                                    
                                    <div className="text-center">
                                        
                                        <button  type="submit" className="btn btn-primary mr-3">Crear proyecto</button>
                                        
                                    </div>
                                </form>
                            </div>
                        </Card>
                    </div>

                </div>
            </div >
        </MuiThemeProvider>
            );
    }
    
    
    
    
    
    
    
}
export default NewProject;