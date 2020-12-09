import React from "react"


class ModelAdding extends React.Component{
 constructor(props){
   super(props)
   this.state={
    id:0,
    title:'',
    category:'',
    description:'',
    image:''
   }
 }
 clearinput(){
   this.refs.title.value=""
   this.refs.category.value=""
   this.refs.description.value=""
   this.refs.image.value=""
 }
   savehandle(){
     
     const newdata=this.state
     this.props.addnewrow(newdata)
     this.clearinput()
   }
 inputchenge(e){
   let type=e.target.type
   if(type=="text"){
     this.setState({
       [e.target.name]:e.target.value
     })
     console.log(this.state)
   }else if (type=="file"){
     const newimage=URL.createObjectURL(e.target.files[0])
   this.setState({
    [e.target.name]:newimage
   })
   console.log(this.state)
   }
   
 }
 
    render(){
        return(
            <div id='modal_adding' className="modal" tabIndex="-1" role="dialog">
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
                    <label htmlFor="txt_newid">ID Product</label>
                    <input type="text" name='id' onChange={(e)=>this.inputchenge(e)} value={this.state.id} className="form-control" id="txt_newid" disabled="disabled" placeholder="product id"/>
                         </div>
                         <div className="form-group">
                          <label htmlFor="new_title">title</label>
                          <input type="text" ref='title' name='title' onChange={(e)=>this.inputchenge(e)}  className="form-control" id="new_title" placeholder="product title"/>
                               </div>
                  <div className="form-group">
                    <label htmlFor="new_category">category</label>
                    <input type="text" name='category' ref="category" onChange={(e)=>this.inputchenge(e)}   className="form-control" id="new_category" placeholder="product category"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="new_description">Description</label>
                    <input type="text" name='description' ref="description" onChange={(e)=>this.inputchenge(e)}   className="form-control" id="new_description" placeholder="product description"/>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="new_image">update Image</label>
                    <input type="file" name='image' ref="image" onChange={(e)=>this.inputchenge(e)}   className="form-control" id="new_image" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" id="save_newrow" data-dismiss="modal" className="btn btn-primary" onClick={()=>this.savehandle()}>add data</button>
                  <button type="button" className="btn btn-secondary" id="btn_close_adding_modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        )
    }

  
}

export default ModelAdding