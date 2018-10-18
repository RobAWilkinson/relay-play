/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EmployeeListNames$ref: FragmentReference;
export type EmployeeListNames = {|
  +lastName: ?string,
  +firstName: ?string,
  +subordinates: ?$ReadOnlyArray<?{|
    +id: string
  |}>,
  +$refType: EmployeeListNames$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "EmployeeListNames",
  "type": "Employee",
  "metadata": null,
  "argumentDefinitions": [],
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '92601e2015d0ea8966bd0f79d411b917';
module.exports = node;
