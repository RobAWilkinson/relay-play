import React, { Component } from 'react'
import graphql from 'babel-plugin-relay/macro';
import {QueryRenderer, createFragmentContainer} from 'react-relay';
          import CustomerConnectionList from './CustomerConnectionList'


export default class EmployeeList extends Component {
  render(){
    return (
      <QueryRenderer
      environment={this.props.environment}
      variables={{}}
      query={graphql`
      query EmployeeListQuery{
        viewer {
          employeeList(limit: 100){
            ...EmployeeListNames
          }
        }
      }
      `}
      render={({error, props}) => {
        if(error){
          console.error(error)
          return <h1>Hello</h1>
        }
        if(!props) {
          return <h1>Loading</h1>
        }
        return(
          <div>
          <CustomerConnectionList relay={{environment: this.props.environment}}/>
            {props.viewer.employeeList.map(data => (<Wrapped data={data} />))}
          </div>
        )
      }}
      />
    )


  }
}

class Employee extends Component {
  render() {
    const { firstName, lastName } = this.props.data;
    return (
      <div>
        {firstName} {lastName}
      </div>
    )
  }
}
const Wrapped = createFragmentContainer(Employee,
  graphql`
    fragment EmployeeListNames on Employee {
      lastName
      firstName
      subordinates {
              id
      }
    }
  `
  )