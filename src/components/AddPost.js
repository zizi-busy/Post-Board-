import React , { Component} from 'react'

class AddPost extends Component {
    state = {
        title: null,
        category: null,
        newPost:null,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value //id from form-input in html
        });
    }

   handleSubmit = (e) =>{
      e.preventDefault();
       this.props.addPost(this.state); //function from  App
       console.log(this.state)

   } 
    render (){
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" onChange={this.handleChange}/>
                    <label htmlFor="newPost">Write New Post:</label>
                    <textarea value={this.state.value} type="text" id="newPost" onChange={this.handleChange} cols={40} rows={10} />
                    <button>Submit</button>

                </form>
            </div>
        )
    }
}

export default AddPost
    

