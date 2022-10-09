import React, {useState, useEffect} from 'react';
import imagenFondo from '../assets/images/edificio.png'

function LastNft(){
    const [lastNft, setLastNfts] =  useState ([]);
    useEffect(() => {
        fetch('http://localhost:3031/api/products', {Origin: 'http://localhost:3000'})
        .then(response => response.json())
        .then(data => {
           
            setLastNfts(data.products.pop())
            
        })
    }, [])
    
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Nft : {lastNft.name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Nft Price : {lastNft.price} <br></br>
                       Coleccion : {lastNft.coleccion}
                    </p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastNft;
