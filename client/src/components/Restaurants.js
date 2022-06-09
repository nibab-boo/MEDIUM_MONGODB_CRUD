import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, CardColumns } from 'reactstrap';
import RestaurantForm from './RestaurantForm';

const Restaurants = () => {

  const [restaurants, setRestaurants] = React.useState([]);


  React.useEffect( () => {
    (async () => {
      const res = await fetch("/api/restaurants")
      const data = await res.json();
      console.log(data);
      setRestaurants([...(data.restaurants)])
    })();
  }, []);

  const createRestaurant = async (restaurant) => {
    const res = await fetch("/api/restaurants/create", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(restaurant),
    })
    const data = await res.json();
    if (data.code === "success") {
      const newRestaurant = data.restaurant;
      console.log(newRestaurant);
      setRestaurants([...restaurants, { newRestaurant }])
    }
  }

  return (
    <div className="row pt-5">
      <h2 className='pb-5'>Restaurants</h2>
      <div className='col-6'>
        <CardColumns>
          {
            restaurants.map(restaurant => (
              <Card className='my-3'>
                <CardBody>
                  <CardTitle tag="h5">
                    {restaurant.title}
                  </CardTitle>
                  <CardText>
                    {restaurant.description}
                  </CardText>
                  <Button onClick={() => console.log("hello")}>
                    Details
                  </Button>
                  <Button color='danger' className='mx-3' onClick={() => console.log("hello")}>
                    Delete
                  </Button>
                </CardBody>
              </Card>
            ))
          }
        </CardColumns>
      </div>
      <div className='col-6 mt-3 p-3 border '>
        <RestaurantForm submitAction={ createRestaurant } />
      </div>
    </div>
  );
};

export default Restaurants;