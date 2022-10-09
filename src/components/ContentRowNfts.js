import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let nftsInDB = {
    title: 'Nfts in Data Base',
    color: 'primary', 
    cuantity: '48',
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalColeccion = {
    title:' Total coleccion', 
    color:'success', 
    cuantity: '12',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let usersQuantity = {
    title:'Users quantity' ,
    color:'warning',
    cuantity:'32',
    icon:'fa-user-check'
}

let cartProps = [nftsInDB, totalColeccion, usersQuantity];

function ContentRowNfts(){
    return (
    
        <div className="row">
            
            {cartProps.map( (data, i) => {

                return <SmallCard {...data} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowNfts;