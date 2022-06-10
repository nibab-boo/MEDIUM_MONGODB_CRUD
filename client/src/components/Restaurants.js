import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, CardColumns } from 'reactstrap';
import RestaurantForm from './RestaurantForm';
import { useNavigate } from 'react-router-dom';

const Restaurants = () => {

  const navigate = useNavigate();
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
      setRestaurants([...restaurants, newRestaurant])
    }
  }

  const goToShow = (id) => {
    navigate(`/restaurants/${id}`);
  }

  const deleteRestaurant = async (id) => {
    const res = await fetch(`/api/restaurants/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.code === "success") {
      console.log(data);
      const newRestaurants = restaurants.filter((restaurant) => restaurant._id !== data.restaurantId);
      console.log(newRestaurants);
      setRestaurants([...newRestaurants]);
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
                  <Button onClick={() => goToShow(restaurant._id)}>
                    Details
                  </Button>
                  <Button color='danger' className='mx-3' onClick={() => deleteRestaurant(restaurant._id)}>
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