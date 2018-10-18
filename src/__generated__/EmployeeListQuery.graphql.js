/**
 * @flow
 * @relayHash f476c3b720d65b9db14863287a447879
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EmployeeListNames$ref = any;
export type EmployeeListQueryVariables = {||};
export type EmployeeListQueryResponse = {|
  +viewer: ?{|
    +employeeList: ?$ReadOnlyArray<?{|
      +$fragmentRefs: EmployeeListNames$ref
    |}>
  |}
|};
export type EmployeeListQuery = {|
  variables: EmployeeListQueryVariables,
  response: EmployeeListQueryResponse,
|};
*/


/*
query EmployeeListQuery {
  viewer {
    employeeList(limit: 100) {
      ...EmployeeListNames
      id
    }
  }
}

fragment EmployeeListNames on Employee {
  lastName
  firstName
  subordinates {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "limit",
    "value": 100,
    "type": "Int"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "EmployeeListQuery",
  "id": null,
  "text": "query EmployeeListQuery {\n  viewer {\n    employeeList(limit: 100) {\n      ...EmployeeListNames\n      id\n    }\n  }\n}\n\nfragment EmployeeListNames on Employee {\n  lastName\n  firstName\n  subordinates {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EmployeeListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "employeeList",
            "storageKey": "employeeList(limit:100)",
            "args": v0,
            "concreteType": "Employee",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "EmployeeListNames",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EmployeeListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "employeeList",
            "storageKey": "employeeList(limit:100)",
            "args": v0,
            "concreteType": "Employee",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "lastName",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "firstName",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subordinates",
                "storageKey": null,
                "args": null,
                "concreteType": "Employee",
                "plural": true,
                "selections": [
                  v1
                ]
              },
              v1
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5fed1d01b8e76be134c208a4404a40f5';
module.exports = node;
