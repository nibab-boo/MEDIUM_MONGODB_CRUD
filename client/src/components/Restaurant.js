import React from 'react';

import { Card, CardBody, CardTitle, CardText, Button, CardColumns } from 'reactstrap';
import RestaurantForm from './RestaurantForm';
import ReviewForm from './ReviewForm';

const Restaurant = () => {

  const [restaurant, setRestaurant] = React.useState({});


  React.useEffect(() => {
    setRestaurant({
      title: 'Burger',
      description: "Fake description",
      reviews: [{ content: "fake_review1" }, { content: "fake_review2" }]
    });
  }, []);

  const createReview = (data) => {
    console.log(data);
  }

  const updateRestaurant = (data) => {
    console.log(data)
  }

  return (
    <div className='row wrap-reverse'>
       <h2 className='pb-5'>Restaurant</h2>
      <div className='col-12 col-md-6'>
        <CardColumns>
            <Card className='my-3'>
              <CardBody>
                <CardTitle tag="h5">
                  { restaurant.title }
                </CardTitle>
                <CardText>
                  {restaurant.description}
                </CardText>
                <Button color={"danger"} onClick={() => console.log("hello")}>
                  Delete
                </Button>
              </CardBody>
            </Card>
        </CardColumns>
        <div>
          { restaurant.reviews &&
            restaurant.reviews.map(review => (
              <div className='p-3 w-100 border'>
                <form>
                  <input placeholder={review.content} />
                  <button class="btn-sm btn btn-warning" onClick={() => console.log("edit")} type='submit'>Edit</button>
                  <button class="btn-sm btn btn-danger" onClick={() => console.log("delete")} type='submit'>Delete</button>
                </form>
              </div>
            ))
          }
        </div>
        <div className='d-block mt-3'>
          <ReviewForm submitAction={ createReview } />
        </div>
      </div>
      <div className='col-12 mt-3 p-3 border col-md-6'>
        <h4 className='my-3'> Update Restaurant </h4>
        < RestaurantForm oldTitle={restaurant.title} oldDesc={restaurant.description} submitAction={ updateRestaurant }/>
      </div>
    </div>
  );
};

export default Restaurant;