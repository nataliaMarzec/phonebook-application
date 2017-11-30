import React, {Component} from 'react';
import uuid from 'uuid';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container, Row} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import toastr from 'toastr';

import Dashboard from '../../views/Dashboard/';

import Contacts from '../../components/Contacts'
import AddContact from '../../components/AddContact'
import EditContact from '../../components/EditContact'

class Full extends Component {
  constructor() {
  super();
  this.state = {
    contacts: (typeof localStorage["contacts"] !== "undefined") ? JSON.parse(localStorage.getItem('contacts')) : [
      {id: uuid.v4(), profile: "default.png", name: "Mark Andrey Dela Cruz", number: "09269566991"},
      {id: uuid.v4(), profile: "default.png", name: "Jan Cruz", number: "09269566991"},
      {id: uuid.v4(), profile: "default.png", name: "April Cruz", number: "09269566991"},
      {id: uuid.v4(), profile: "default.png", name: "Peter Parker", number: "09269566991"}
    ]
  }
    this.handleAddContact =  this.handleAddContact.bind(this);
    this.handleDeleteContact =  this.handleDeleteContact.bind(this);
  }

  handleAddContact(contact) {
    let contacts = this.state.contacts;
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    this.setState({contacts:contacts});
    alert('New Contact Added');
  }

  handleDeleteContact(id) {
    let contacts = this.state.contacts;
    let index = contacts.findIndex( x => x.id === id);
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    this.setState({contacts:contacts});
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Row>&nbsp;</Row>
            <Container fluid>
            <Row>
              <AddContact addContact={ this.handleAddContact }/>
              {/*<EditContact addContact={ this.handleAddContact }/>*/}
            </Row>
              <Contacts onDelete={ this.handleDeleteContact } contacts = { this.state.contacts }/>
            </Container>
          </main>
          <Aside />
        </div>
          <Footer />
      </div>
    );
  }
}

export default Full;

