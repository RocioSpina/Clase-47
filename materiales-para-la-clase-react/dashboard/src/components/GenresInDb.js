import React, { Component } from 'react';
import Genre from './Genre';

class GenresInDb extends Component{

    constructor() {
        super()
        this.state = {
            genresList: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/genres")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((genres) => {
            console.log(genres)
            this.setState({ genresList: genres.data });
          })
          .catch((error) => console.log(error));
    }    

    fondo(){
        let caja = document.querySelector(".fondoCaja")
        caja.classList.toggle("bg-secondary")
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={()=>{this.fondo()}}>Genres in Data Base</h6>
                        </div>

                        <div className="card-body fondoCaja">
                            <div className="row">
                                {
                                    this.state.genresList.map((genre, index) => {
                                        return <Genre  {...genre} key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default GenresInDb;