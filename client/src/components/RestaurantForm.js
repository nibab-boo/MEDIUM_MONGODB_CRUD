import React from 'react';
import { Form, FormGroup, Label, Button, Input } from 'reactstrap'

const RestaurantForm = ({ submitAction }) => {
  const [title, setTitle ] = React.useState("");
  const [description, setDescription ] = React.useState("");
  
  const submitForm = (e) => {
    e.preventDefault();
    if (!title || !description) return
    submitAction({
      title,
      description
    })
    setTitle("");
    setDescription("");
  }

  return (
    <Form inline onSubmit={submitForm}>
      <FormGroup floating>
        <Input
          id="restaurantTitle"
          name="title"
          placeholder="Max Burger"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value) }
        />
        <Label for="restaurantTitle">
          Restaurant Name
        </Label>
      </FormGroup>
      {' '}
      <FormGroup floating>
        <Input
          id="Description"
          name="description"
          placeholder="textfield"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value) }
        />
        <Label for="Description">
          Description
        </Label>
      </FormGroup>
      {' '}
      <Button>
        Submit
      </Button>
    </Form>
  );
};

export default RestaurantForm;