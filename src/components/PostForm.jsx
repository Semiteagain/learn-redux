import React, {useState} from 'react'

function PostForm() {

    const [item, setItems] = useState({
        title : '',
        body : ''
    })

    const [newPost, setPost] = useState([])

     function handleChange(e) {
         const {name, value} = e.target
         setItems((prevItem) =>{
             return {
                 ...prevItem,
                 [name] : value
             }
         })
     }

     const handleClick = (e) => {
         setPost(prevPost=>{
             return [...prevPost, newPost]
         })
        e.preventDefault();
     }



    return (
        <div>
            <h1>Add post</h1>
            <form>
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
                <button type="submit" onClick={handleClick}>Submit</button>

            </form>
        </div>
    )
}

export default PostForm
