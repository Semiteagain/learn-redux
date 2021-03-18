import './App.css';
import React, {useState, useEffect} from 'react'
import PostForm from './components/PostForm';

function App() {

  const [post, setpost] = useState([])

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setpost(data))
  })



  return (
    <div className="App">
      <PostForm />
     {post.map(item =>{
       return <div key={item.id}>
         <h1>{item.title}</h1>
         <p>{item.body}</p>
         
       </div>
     })}

    </div>
  );
}

export default App;
