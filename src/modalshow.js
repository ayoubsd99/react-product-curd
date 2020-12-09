import React from 'react'



class Modalshow extends React.Component{  
  constructor(props){
    super(props)
    this.state={
             id:0,
             title:'',
             description:"",
             image:''
    }
  
  }

     UNSAFE_componentWillReceiveProps(nextprops){
       this.setState({
        id:nextprops.id,
        title:nextprops.title,
        description:nextprops.description,
        image:nextprops.image
       })
  }
    render(){   
        return(
            <div  id="modal-show" className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <h1>SHOW product information</h1>
                  <p>id : <label>{this.state.id}</label></p>
                  <p>title: <label>{this.state.title}</label></p>
                  <p>description: <label>{this.state.description}</label></p>
                  <p>image :<img src={this.state.image} alt={this.state.title}/></p>
                </div>
                <div className="modal-footer">
                
                  <button  type="button" className="btn btn-secondary" data-dismiss="modal">Hide</button>
                </div>
              </div>
            </div>
          </div>
        )
   
    }   
}



export default Modalshow