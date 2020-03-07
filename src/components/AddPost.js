import React , { Component} from 'react'

class AddPost extends Component {
    state = {
        title: null,
        category: null,
        newPost:null,
    }

    handleChange = (e) => {
        e.preventDefault()
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
            <div class = "post-container">
           
                <form onSubmit = {this.handleSubmit}>
                    <h1>New Post</h1>
                <div class="form-inner">
        
                    <div class="input-holder">
                        <span class="label"> Title:</span>
                         <input class = "input-text" type="text" id="title" onChange={this.handleChange}/>
                         
                    
                     </div>
        
                    <div class="input-holder">
                        <span class="label"> Category:</span>
                        <input class="input-text" type="text" id="category"onChange={this.handleChange}/>
                     
                    </div>  
                        
                    <div class = "input-holder">
                        <span class="label"> Write new post:</span>  
                        <textarea class="input-text" value={this.state.value} type="text" id="newPost" onChange={this.handleChange}></textarea> 
                                 
                    </div>      
                            <button class="postBtn">Post</button>
                            <button>Cancel</button>
                </div> 

                </form>
            </div>
        
        )
    }
}

export default AddPost
    

