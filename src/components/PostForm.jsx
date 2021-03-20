import React, {useState} from 'react'

function PostForm() {

    const [item, setItems] = useState({
        title : '',
        body : ''
    })

    // const [post, setPost] = useState([])

  

     function handleChange(e) {
         const {name, value} = e.target
         setItems((prevItem) =>{
             return {
                 ...prevItem,
                 [name] : value
             }
         })
     }

     function submitPost(e) {
         e.preventDefault();

         const post = {
             title : item.title,
             body : item.body
         };

         fetch('https://jsonplaceholder.typicode.com/posts', {
             method : 'POST',
             headers : {
                 'content-type' : 'application/json'
             },
             body : JSON.stringify(post)
         })

         .then(res => res.json())
         .then(data => console.log(data))
     }



        
     





    return (
        <div>
            <h1>Add post</h1>
            <form  onSubmit={submitPost}>
                <div>
                    <label htmlFor="">Title</label> <br/>
                <input type='text' name='title' value={item.title} onChange={handleChange} />
                </div>
               
                <br/>
                <div>
                    <label htmlFor="">Body</label> <br/>
                <textarea type='text' name='body' value={item.body} onChange={handleChange} />
                </div>
                <br/>
                <button type="submit" >Submit</button>

            </form>

            
        </div>
    )
}

export default PostForm
