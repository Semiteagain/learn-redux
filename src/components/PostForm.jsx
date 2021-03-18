import React from 'react'

function PostForm() {
    return (
        <div>
            <h1>Add post</h1>
            <form>
                <div>
                    <label htmlFor="">Title</label> <br/>
                <input type='text' name='title' />
                </div>
               
                <br/>
                <div>
                    <label htmlFor="">Body</label> <br/>
                <textarea type='text' name='body' />
                </div>
                <br/>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default PostForm
