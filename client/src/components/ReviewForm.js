import React from 'react';
import { Form, FormGroup, Label, Button, Input } from 'reactstrap'

const ReviewForm = ({ submitAction }) => {
  const [review, setReview ] = React.useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (!review ) return
    submitAction({
      review,
    })
    setReview("");
  }

  return (
    <Form inline onSubmit={submitForm}>
      <FormGroup floating>
        <Input
          id="restaurantReview"
          name="Review"
          placeholder="Max Burger"
          type="text"
          value={review}
          onChange={(e) => setReview(e.currentTarget.value) }
        />
        <Label for="restaurantReview">
          Write your Review
        </Label>
      </FormGroup>
      {' '}
      <Button>
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;