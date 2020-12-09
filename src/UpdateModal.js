import React from 'react'

class ModalUpdate extends React.Component{
constructor(props){
    super(props)
    this.handlesave=this.handlesave.bind(this)
    this.state={
      id:0,
      title:'',
      category:'',
      description:'',
      image:''
    }
}
handlesave(){
    const item=this.state
    this.props.updaterow(item)
  }

  inputchange(e){
    if(e.target.type==="text"){
      this.setState({[e.target.name]:e.target.value})  
    }else if(e.target.type==="file"){
      const newurl=URL.createObjectURL(e.target.files[0])
      this.setState({[e.target.name]:newurl})
      console.log(this.state)
  }
    }
    
 

    
UNSAFE_componentWillReceiveProps(nextprops){
    this.setState({
     id:nextprops.id,
     title:nextprops.title,
     category:nextprops.category,
     description:nextprops.description,
     image:nextprops.image
    })
}
render(){
 
    return(
        <div id='modal_update' className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update product</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="txt_upid">ID Product</label>
                <input type="text" value={this.state.id} className="form-control" id="txt_upid" disabled="disabled" placeholder="product id"/>
                     </div>
                     <div className="form-group">
                      <label htmlFor="up_title">title</label>
                      <input type="text" name='title' onChange={(e)=>this.inputchange(e)}  value={this.state.title} className="form-control" id="up_title"  placeholder="product title"/>
                           </div>
              <div className="form-group">
                <label htmlFor="up_category">category</label>
                <input name='category' type="text" onChange={(e)=>this.inputchange(e)}  value={this.state.category} className="form-control" id="up_category" placeholder="product category"/>
              </div>
              <div className="form-group">
                <label htmlFor="up_description">Description</label>
                <input type="text" name='description' onChange={(e)=>this.inputchange(e)} value={this.state.description} className="form-control" id="up_description" placeholder="product description"/>
              </div>
              <div className="form-group">
                <label htmlFor="up_img">image</label><br/>
                <img id="up_img" src={this.state.image} id="up_img" alt={this.state.title}/>
              </div>
              <div className="form-group">
                <label htmlFor="up_image">update Image</label>
                <input type="file" name="image" onChange={(e)=>this.inputchange(e)} className="form-control" id="up_image" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" id="save_update" data-dismiss="modal" className="btn btn-primary" onClick={()=> this.handlesave()}>Update</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      )
}
}

export default ModalUpdate