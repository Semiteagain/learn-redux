import './App.css';
import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import PostForm from './components/PostForm';

const store = createStore(() => [],{}, applyMiddleware());

function App() {

  const [post, setpost] = useState([])

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setpost(data))
  })



  return (
    <Provider store={store}>
    <div className="App">
      <PostForm />
      <hr/>
     {post.map(item =>{
       return <div key={item.id}>
         <h1>{item.title}</h1>
         <p>{item.body}</p>
         
       </div>
     })}

    </div>
    </Provider>
  );
}

export default App;
