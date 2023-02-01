import React from "react";


const Card = ({title="Cricket", buttonText="Love Cricket", subtitle="some text", imagepath}) =>{
    return(

        <div class="card" style={{width: "18rem"}}>
        <img
          src={imagepath}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">
            {subtitle}
          </p>
          <a href="#" class="btn btn-success">{buttonText}</a>
        </div>
      </div>
    )
}

export default Card