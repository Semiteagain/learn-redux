import React from 'react'

function PostForm() {
    return (
        <div>
            <form>
                <input type='text' name='title' />
                <br/>
                <textarea type='text' name='body' />

            </form>
        </div>
    )
}

export default PostForm
