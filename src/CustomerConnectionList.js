import React, { Component } from 'react'
import graphql from 'babel-plugin-relay/macro';
import {createPaginationContainer} from 'react-relay';

class CustomerComponent extends Component {
  render() {
    console.log(this.props)
    console.log(this.props.relay.hasMore())
    if(this.props.relay.isLoading()){
      return <h1>Loading</h1>
    }
    return (
      <div>
        {this.props.companyName}
      </div>
    );
  }
}

export default createPaginationContainer(
  CustomerComponent,
graphql`
      fragment CustomerConnectionList_customer on Viewer {
      customerConnection(
          first: $first,
          after: $after,
        ) @connection(key: "Link_customerConnection"){
          edges{
            cursor
            node {
              companyName
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `
  ,
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      console.log("here", props)
      return props.customer
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
      console.log(arguments)
      return {
        count,
        cursor,
        orderBy: fragmentVariables.orderBy,
        // userID isn't specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.
        userID: fragmentVariables.userID,
      };
    },
    query: graphql`
      query CustomerConnectionListForwardQuery(
          $first: Int!
          $after: String
      ) {
        viewer {
            ...CustomerConnectionList_customer
        }
      }
    `
  }
)