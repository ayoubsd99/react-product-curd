import React from 'react'
import './App.css';
import ProductsDataa from "./ProdyctsData"
import ModalShow from "./modalshow"
import Modalupdate from './UpdateModal'
 import Modaadding from "./Modaladding" 



class  App extends React.Component {
  constructor(props){
    super(props)
    this.updaterow=this.updaterow.bind(this)
    this.ModalShow=this.showinfoinmodal.bind(this)
    this.addnewrow=this.addnewrow.bind(this)
    this.state={
      itemindex:0,
      data:ProductsDataa
    }
    
  }
   updaterow(item){
     const index=this.state.itemindex
     const ndata=this.state.data
     ndata[index]=item
     this.setState({data:ndata})
   }
  addnewrow(item){
   
      this.setState(prevState => ({
        data: [...prevState.data, item]
      }))
      
    
  }
  showlastid(){
    this.setState({
      data:this.state.data.pop()
    })
  }
  deletrow(index){
    console.log(index)
      let newstate=this.state.data
      newstate.splice(index,1)
      console.log(newstate)
      this.setState({
        data:newstate
      });
  }
  showinfoinmodal(index){
    console.log(index)
     this.setState({
       itemindex:index
     });
   

  }
 
  render(){  
  
    const prod= this.state.data.map((itm,index)=>{
      return(
          <tr key={index}>
              <td>{itm.id}</td>
              <td>{itm.title}</td>
              <td>{itm.category}</td>
              <td>{itm.description}</td>
              <td><img src={itm.image} alt={itm.tilte}/></td>
              <td><button data-target="#modal_update" data-toggle="modal" onClick={()=>this.showinfoinmodal(index)}>Edit</button></td>
              <td><button  onClick={()=>this.deletrow(index)}>Delete</button></td>
              <td><button data-target="#modal-show" data-toggle="modal"   onClick={()=>this.showinfoinmodal(index)}>Show</button></td>
              </tr>     
  
  )
});



const itemindex=this.state.itemindex
 let prodshaw=this.state.data[itemindex]
 console.log(prodshaw);
 var lastitem=this.state.data[this.state.data.length-1]
  return(
    
    <div>
      <button type="button" data-toggle="modal"  data-target="#modal_adding" >Add New+</button>
    <table className="table-prod" className="table table-sm">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Title</th>
        <th scope="col">Category</th>
        <th scope="col">Description</th>
        <th scope="col">Image</th>
        <th scope="col">Update row</th>
        <th scope="col">Delete row</th>
        <th scope="col">Show row </th>
      </tr>
    </thead>
    <tbody>
   
       {prod}
    </tbody>
  </table>
  <ModalShow 
    id={prodshaw.id}
    title={prodshaw.tilte}
    description={prodshaw.description}
    image={prodshaw.image}
  />
   <Modalupdate
    id={prodshaw.id}
    title={prodshaw.title}
    category={prodshaw.category}
    description={prodshaw.description}
    image={prodshaw.image}
    updaterow={this.updaterow}
  />
   <Modaadding
    addnewrow={this.addnewrow}
    />
  </div>
  )
      
  }

  }



export default App
