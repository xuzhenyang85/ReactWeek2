
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import './style.css'

const products = [
    {number: '101', name: 'Osmel Mora', title: 'How to handle state in React. The missing FAQ.'}
    ,{number: '102', name: 'Konstantin Tarkus', title: 'You might not need React Router'}
    ,{number: '103', name: 'Dan Abramov', title: 'Mixins Considered Harmful'}
    ,{number: '104', name: 'Dan Abramov', title: 'React Design Principles'}
    ,{number: '105', name: 'Dave Ceddia', title: 'A Simple React Router v4 Tutorial'}
];
const RoutingDemo = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Main />
    </div>
    </BrowserRouter>
);
export default RoutingDemo;

const Header = () => (
    <div id="header">
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Articles</Link></li>
                <li><Link to='/images'>Images</Link></li>
                <li><Link to='/about'>About us</Link></li>
            </ul>
        </nav>
    </div>
);

const Main = () => (
    <div id="main">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/products' component={Product}/>
            <Route path='/images' component={Images}/>
            <Route path='/about' component={About}/>
        </Switch>
    </div>
);
const Home = () => (
    <div>
        <h1>Welcome to xu Website!</h1>
    </div>
);
const Images = () => (
    <div>
        <img src="../img.jpg" />
        <img src="../img.jpg" />
        <img src="../img.jpg" />
    </div>
);
const Product = () => (
    <Switch>
        <Route exact path='/products' component={ProductList}/>
        <Route path='/products/:number' component={ProductDetails}/>
    </Switch>
);
const ProductList = () => (
    <div>
        <h2>Articles: </h2>
        <ul>
            {
                products.map(p => (
                    <li key={p.number}>
                        <Link to={`/products/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
);
const ProductDetails = (props) => {
    const productsFiltered = products.filter((p)=>p.number === props.match.params.number, 10);
    const product = (productsFiltered.length > 0)?productsFiltered[0]:null;
    if (!product) {
        return <div>Sorry, but the product {props.match.params.number} was not found</div>
    }
    return (
        <div>
            <h2>Article details:</h2>
            <h3>{product.name} (#{product.number})</h3>
            <h3>Title: {product.title}</h3>
        </div>
    );
}
const About = () => (
    <div>
        <p>We are a large corporation with more than 10000 employees. Contact us if you need a job and feel that you have some skills</p>
        <p>Fullname</p><input type="text" />
        <p>Messege: </p><textarea rows="4" cols="50">
        </textarea>
        <input type="submit" value="send" />
    </div>
);
