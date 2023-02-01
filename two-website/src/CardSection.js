import React from "react";
import Card from "./Card";
const CardSection = () => {
  return (
    <section class="contact bg-success ">
      <div class="container ">
        <h2 class="text-white">
          We love new friends!
        </h2>
        <div class="row">
          <div class="col-4">
           <Card title="Card title" buttonText="First Card" subtitle="Some quick example text to build on the card title and make up
                  the bulk of the card's content." imagepath={"https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          </div>
          <div class="col-4">
          <Card title="Card Two" buttonText="Second Card" subtitle="Some quick example text to build on the card title and make up
                  the bulk of the card's content." imagepath={"https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          </div>
          <div class="col-4">
          <Card title="Card Three" buttonText="Thurd Card" subtitle="Some quick example text to build on the card title and make up
                  the bulk of the card's content." imagepath={"https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
