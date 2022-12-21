---
title: Crear un CRUD con React
date: 2022/12/21
description: Crear un CRUD con React
tag: react, crud, bootstrap
author: Marlon Falcon Hernandez
---

# Crear un CRUD con React
import Image from 'next/image'


Un [crud](/tags/crud) es una aplicación que permite crear, leer, actualizar y eliminar datos. En este tutorial vamos a crear un crud con React, para ello vamos a utilizar el framework Bootstrap para darle un poco de estilo a nuestra aplicación.

link: https://github.com/crud-demos/react-crud

<Image
  src="/images/posts/react-crud.png"
  alt="odoo9"
  width={1280}
  height={720}
  priority
  className="next-image"
/>

src/App.js

```jsx
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Input, Button , Container, Modal, ModalBody, ModalHeader,
          FormGroupm, ModalFooter, FormGroup
} from "reactstrap";
import React, {useState} from "react"

import AddModal from './components/AddModal';
import EditModal from './components/EditModal';
import Footer from './components/Footer';
import axios from 'axios';

import { BsFillPencilFill, BsTrash } from "react-icons/bs";

const URL = "https://jsonplaceholder.typicode.com/users"

function App() {
  const initialState = [
    { id: 1, name: "maria" , lastname: "Falcon", email: "a@gmail.com", admin: true, language: "ES" },
    { id: 2, name: "Yoel" , lastname: "Herrera", email: "b@gmail.com", admin: false, language: "EN" }
  ]

  const[data, setData] =  useState(initialState)


  // Modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  
  const [item, setItem] = useState({})

  const insertFn = () => {
    setShowAddModal(true);
  }

  const editFn = (item) => {
    setShowEditModal(true);
    setItem(item);
 }

 const deleteFn = (id) => {
   let opcion = window.confirm("Are you sure you want to delete"+id);
   if (opcion == true) {
      const newdata = data.filter(e => e.id !== id );
      setData(newdata)
    }
}

 const restartFn = () => {
    setData(initialState);
 }

 const loadAxios = () => {
   axios.get(URL).then(resp => {
        const nuewData = []
        const dataAxios = resp.data
        
        dataAxios.map(item => {
          nuewData.push(
                          {id: item.id,     
                          name: item.name.split(" ")[0],
                          lastname: item.name.split(" ")[1],
                          email: item.email,
                          admin: Math.random() < 0.5,
                          language: "ES"},
                       )
        })
        setData(nuewData)
    });
 }


   const loadFetch = async () => {
    const nuewData = []
    try {
    let res = await fetch(URL);
    const dataFetch  = await res.json();
    dataFetch.map(item => {
      nuewData.push(
                      {id: item.id,     
                      name: item.name.split(" ")[0],
                      lastname: item.name.split(" ")[1],
                      email: item.email,
                      admin: Math.random() < 0.5,
                      language: "ES"},
                   )
    })
    setData(nuewData)

    }
       catch (error) {
          console.log(error);
      }

  }

  
  return (
    <>
    <Container>
        <br></br>
          <Button color="primary" color="success" onClick={()=>insertFn()}  className='m-2'>Insert New Person</Button>
          <Button color="primary"  onClick={()=>restartFn()}  className='m-2'>Restart Data</Button>
          <Button onClick={()=>loadAxios()}  className='m-2'>Load with Axios</Button>
          <Button onClick={()=>loadFetch()}  className='m-2'>Load with Fech</Button>
        <br></br>
        <Table responsive>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>lastname</th>
                <th>admin</th>
                <th>email</th>
                <th>language</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {data.map((item)=>(
                      <tr key={item.id}>
                         <td>{item.id}</td>
                         <td>{item.name}</td>
                         <td>{item.lastname}</td>
                         <td><Input type="checkbox" disabled="true" checked={item.admin}/></td>
                         <td><a href={`mailto:${item.email}`}>{item.email}</a></td>
                         <td>{item.language}</td>
                         <td>
                           <Button color="warning" onClick={()=>editFn(item)}><BsFillPencilFill/></Button>{" "}
                           <Button color="danger" onClick={()=>deleteFn(item.id)}><BsTrash/></Button> 
                        </td>
                      </tr>  
                ))}
            </tbody>
        </Table>
    </Container>

    <AddModal  showAddModal={showAddModal} setShowAddModal={setShowAddModal} setData={setData} data={data}  />
    <EditModal  showEditModal={showEditModal} setShowEditModal={setShowEditModal} setData={setData} data={data} item={item} />
    
    <Container>
      <Footer/>
    </Container>
    </>
  );
}

export default App;
```

src/components/AddModal/AddModal.js

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { Button , Label, Col, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Form, Input
} from "reactstrap";
import React, {useState} from "react"

export default function AddModal(props) {
    const { showAddModal, setShowAddModal, data, setData , ...rest } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setShowAddModal(!showAddModal);

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const lastname = e.target.lastname.value;
        const email = e.target.email.value;
        const language = e.target.language.value;
        const admin = e.target.admin.checked;
        const id =  data.length + 1; 
        setData([{id, name, lastname, admin, email, language},...data]);
        setShowAddModal(false)
    }


    return (
        <Modal isOpen={showAddModal} toggle={toggle}>
            <Form onSubmit={handleSubmit}>
                <ModalHeader>
                    <div><h3>Insert</h3></div>
                </ModalHeader>

                <ModalBody>
                <FormGroup row className='mt-2'>
                <Label sm={3}>Name</Label>
                <Col sm={9}>
                    <input className="form-control"  type="text"
                                name="name"
                                placeholder="Juan"
                                required
                                />
                               </Col> 
                </FormGroup>

                <FormGroup row className='mt-2'>
                    <Label sm={3}>Last Name</Label>
                    <Col sm={9}>
                    <input className="form-control"  type="text"
                            required
                            placeholder="Hdez"
                            name="lastname"
                    />
                    </Col>
                </FormGroup>
                
                <FormGroup row className='mt-2'>
                    <Label sm={3}>Email</Label>
                    <Col sm={9}>
                    <input className="form-control"  type="email"
                            required
                            placeholder="hello@hello.com"
                            name="email"
                    />
                    </Col>
                </FormGroup>

                <FormGroup row className='mt-2'>
                        <Label  sm={3}>Select</Label>
                        <Col sm={9}>
                        <Input type="select" name="select" name="language">
                            <option>ES</option>
                            <option>EN</option>
                            <option>PT</option>
                        </Input>
                        </Col>
               </FormGroup>

                <FormGroup row className='mt-2'>
                    <Label  sm={3}>Is Admin</Label>
                    <Col sm={9}>
                    <Input  type="checkbox"
                            name="admin"
                    />
                    </Col>
                </FormGroup>

                </ModalBody>

                <ModalFooter>
                    <Button color="primary" type="submit">Insert</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Form>
        </Modal>
    )
}
```

src/components/EditModal/EditModal.js
```jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { Button , Label, Col, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Form, Input
} from "reactstrap";
import React, {useState} from "react"

export default function EditModal(props) {
    const { showEditModal, setShowEditModal, data, setData, item , ...rest } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setShowEditModal(!showEditModal);

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const lastname = e.target.lastname.value;
        const email = e.target.email.value;
        const language = e.target.language.value;
        const admin = e.target.admin.checked;
        const id =  item.id
        const personArray = [{ name, lastname, email, language, admin, id}]
        let nuewData = data.map(obj => personArray.find(o => o.id === obj.id) || obj);
        setData(nuewData);
        setShowEditModal(false)
    }

    console.log("data:", data)


    return (
        <Modal isOpen={showEditModal} toggle={toggle}>
            <Form onSubmit={handleSubmit}>
                <ModalHeader>
                    <div><h3>Edit</h3></div>
                </ModalHeader>
                <ModalBody>
                <FormGroup row>
                <Label sm={3}>ID</Label>
                <Col sm={9}>
                    <input className="form-control"  type="text"
                                name="id"
                                readOnly
                                value={item.id}
                                />
                               </Col> 
                </FormGroup>

                

                <FormGroup row className='mt-2'>
                <Label sm={3}>Name</Label>
                <Col sm={9}>
                    <input className="form-control"  type="text"
                                name="name"
                                placeholder="Juan"
                                defaultValue={item.name}
                                required
                                />
                               </Col> 
                </FormGroup>

                <FormGroup row className='mt-2'>
                    <Label sm={3}>Last Name</Label>
                    <Col sm={9}>
                    <input className="form-control"  type="text"
                            required
                            placeholder="Hdez"
                            name="lastname"
                            defaultValue={item.lastname}
                    />
                    </Col>
                </FormGroup>
                
                <FormGroup row className='mt-2'>
                    <Label sm={3}>Email</Label>
                    <Col sm={9}>
                    <input className="form-control"  type="email"
                            required
                            placeholder="hello@hello.com"
                            name="email"
                            defaultValue={item.email}
                    />
                    </Col>
                </FormGroup>

                <FormGroup row className='mt-2'>
                        <Label  sm={3}>Select</Label>
                        <Col sm={9}>
                        <Input type="select" name="select" name="language" defaultValue={item.language}>
                            <option>ES</option>
                            <option>EN</option>
                            <option>PT</option>
                        </Input>
                        </Col>
               </FormGroup>

                <FormGroup row className='mt-2'>
                    <Label  sm={3}>Is Admin</Label>
                    <Col sm={9}>
                    <Input  type="checkbox"
                            name="admin" defaultChecked={item.admin}
                    />
                    </Col>
                </FormGroup>

                </ModalBody>

                <ModalFooter>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Form>
        </Modal>
    )
}

```

src/components/Footer/Footer.js
```jsx
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import {  Col } from "reactstrap";


export default function Footer() {
    return (
        <div className="row">
            <Col md={2}>
                <img src="/img/react.png" width="100%" alt="1"/>
            </Col>
            <Col md={2}>
                <img src="/img/bootstrap.png" width="100%"  alt="2"/>
            </Col>
            <Col md={2}>
                <img src="/img/api_rest.png" width="100%"  alt="3"/>
            </Col>
            <Col md={2}>
                <img src="/img/reactstrap.png" width="100%"  alt="4"/>
            </Col>
        </div>
    )
}
```