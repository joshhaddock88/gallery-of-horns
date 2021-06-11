import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import HornedBeast from './HornedBeast';
import React from 'react';



class Main extends React.Component {

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('Submitted');
    this.filterBeastList();
  }

  filterBeastList = () => {
    this.props.filterBeastList(this.props.beastList, document.getElementById('formValue').value)
  }


  
  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.handleFormSubmit}>
            <Form.Group controlID='bootStrapFormSelect'>
              <Form.Label>Select</Form.Label>
              <Form.Control id="formValue" as="select" custom>
                <option value="1">1 Horn</option>
                <option value="2">2 Horns</option>
                <option value="3">3 Horns</option>
                <option value="4">4 Horns</option>
              </Form.Control>
            </Form.Group>
            <Button type="submit" >Filter</Button>
          </Form>
        </Container>
        <CardColumns >
          {this.props.beastList.map(beast => 
            <HornedBeast 
              image_url={beast.image_url} 
              title={beast.title} 
              description={beast.description} 
              keyword={beast.keyword}
              showModal={this.props.showModal}
              index = {this.props.beastList.indexOf(beast)}
            />)
          }
        </CardColumns>
      </>
    );
  }
}

export default Main;

// onSubmit the whole things goes down.

// filter beast

// create function called set value.
// on submit, the set value function will run.

