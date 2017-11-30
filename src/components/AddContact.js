import React, { Component } from 'react';
import uuid from 'uuid';
import toastr from 'toastr';
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  FormGroup,
  FormText,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  Table
} from 'reactstrap';

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: '', 
        }

        this.handleName = this.handleName.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleNumber(e) {
        this.setState({
            number: e.target.value
        });
    }

    handleSubmit(e) {
        const newContact = {
            id: uuid.v4(),
            name: this.state.name,
            number: this.state.number
        }
        
        this.props.addContact(newContact);
        this.setState({
            name: '',
            number: '',
        });

        e.preventDefault();

    }

    render() {

    return (
          <Col xs="6" md="6">
          <Card>
              <CardHeader>
                <strong>New</strong> Contact
              </CardHeader>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-name">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="hf-name" name="hf-name" placeholder="Enter Name..." required value={ this.state.name } onChange={ this.handleName }/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-mobile-number">Contact&nbsp;Number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="hf-mobile-number" name="hf-mobile-number" placeholder="Enter Contact Number..." required={ true } value={ this.state.number } onChange={ this.handleNumber }/>
                    </Col>
                  </FormGroup>
                  {/*<FormGroup row>
                                      <Col md="3">
                                        <Label htmlFor="file-input">Profile Picture (Optional)</Label>
                                      </Col>
                                      <Col xs="12" md="9">
                                        <Input type="file" id="file-input" name="file-input"/>
                                      </Col>
                                    </FormGroup>*/}
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="success" onClick={ this.handleSubmit.bind(this) }><i className="fa fa-dot-circle-o"></i> Submit</Button>
              </CardFooter>
          </Card>
          </Col>
    );
  }
}

export default AddContact;
