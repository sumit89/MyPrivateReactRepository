import React, {useState, useEffect} from 'react';
import useResources from './useResources';
import axios from 'axios';

// class ResourceList extends React.Component {
//   state = {resources: []};
//   async componentDidMount(){
//     const response = await axios.get(`http://jsonplaceholder.typicode.com/${this.props.resource}`);
//     this.setState({resources: response.data})
//   }

//   // rerendered anytime parent component is updated or setstate is called inside this component
  
//   async componentDidUpdate(prevProps){
//     console.log(prevProps);
//     if(prevProps.resource !== this.props.resource){
//       const response = await axios.get(`http://jsonplaceholder.typicode.com/${this.props.resource}`);
//       this.setState({resources: response.data})
//     }
//   // // end into infinite loop of requests to the server
//   // const response = await axios.get(`http://jsonplaceholder.typicode.com/${this.props.resource}`);
//   //   // updating the state here keeps calling componentDidUpdate infinitely
//   // this.setState({resources: response.data})
//   }

//   render() {
//     return(
//       <div>
//         {/* {this.props.resource} */}
//         {this.state.resources.length}
//       </div>
//     );
//   }
// }


// this function can be reused anywehre
// const useResources = (resource) => {
//   const [resources, setResources] = useState([]);
//   useEffect(() => {
//     (async resource => {
//       const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
//       setResources(response.data);
//     })(resource);
//   }
//   ,[resource]
//   );
//   return resources;
// }

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  // const [resources, setResources] = useState([]);

  // const fetchResource = async (resource) => {
  //   const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
  //   setResources(response.data);
  //   // this.setState({resources: response.data})
  // }

  // useEffect(() => {
  //   fetchResource(resource);
  // }
  // // if second argument is not passed it will end in infinite loop
  // ,[resource]
  // // when empty array is passed it will not be called for the second time
  // // similar to componentDidMount
  // // ,[]
  // )

  // // async function not allowed inside useEffect
  // // must return a cleanup function or nothing
  // useEffect(async () => {
  //   const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
  //   setResources(response.data);
  // }
  // ,[resource]
  // )

  // this is allowed
  // useEffect(() => {
  //   (async resource => {
  //     const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
  //     setResources(response.data);
  //   })(resource);
  // }
  // ,[resource]
  // );

  // return(
  //   <div>
  //     {resources.length}
  //   </div>
  // );
  
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
