import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, CardColumns } from 'reactstrap';
import RestaurantForm from './RestaurantForm';

const Restaurants = () => {

  const [restaurants, setRestaurants] = React.useState([]);


  React.useEffect(() => {
    setRestaurants(["demo", "demo"]);
  }, []);

  const createRestaurant = (data) => {
    console.log(data);
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
                    Card title
                  </CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </CardText>
                  <Button onClick={() => console.log("hello")}>
                    Button
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