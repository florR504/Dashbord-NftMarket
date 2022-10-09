import React, { useState, useEffect } from 'react';

function ColeccionInDb() {
const [coleccion, setColeccion]  = useState([]);
	
useEffect(() => {
     console.log("se monto el componente para colecciones")
     fetch(`http://localhost:3031/api/products/`)
      .then(response => response.json())
      .then(data => {
        console.log("data de categorias")
        console.log(data)
        setColeccion(data.countByCategory)})
      .catch(error => console.error(error));
  }, [])
  
return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
           <h5 className="m-0 font-weight-bold text-gray-800">Total de Categorias {coleccion.length}</h5>
        </div>       
        {coleccion.length === 0 && <p>Cargando...</p>}
				{coleccion.map((col, i) => {
						return (
              <div className="card-body" key={i}>
                <div className="row" key={i}>
                 <div className="col-lg-6 mb-4"key={i}>
                   <div className="card bg-dark text-white shadow"key={i}>							    
								      <h5 key={i}>{col.name}</h5>	
                    
										</div>
                  </div>
                </div>
              </div>					
            )})
          }
      </div>
    </div>
  ) 
}

export default ColeccionInDb;