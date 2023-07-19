/**
 * @generated SignedSource<<ce9f72d5df6761ba85bda66dc797b97f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppAssignableQuery$variables = {};
export type AppAssignableQuery$data = {
  readonly me: {
    readonly best_friend: {
      readonly name: string | null;
    } | null;
    readonly name: string | null;
  };
  readonly otherUser: {
    readonly __typename: "User";
    readonly __id: string;
    readonly name: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"AppAssignableUser">;
  };
};
export type AppAssignableQuery = {
  response: AppAssignableQuery$data;
  variables: AppAssignableQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppAssignableQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "best_friend",
            "plural": false,
            "selections": [
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "otherUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AppAssignableUser"
          },
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppAssignableQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "best_friend",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "otherUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "53ab37b482db3aabfac0ff5a62a4bbb1",
    "id": null,
    "metadata": {},
    "name": "AppAssignableQuery",
    "operationKind": "query",
    "text": "query AppAssignableQuery {\n  me {\n    name\n    best_friend {\n      name\n      id\n    }\n    id\n  }\n  otherUser {\n    name\n    ...AppAssignableUser\n    id\n  }\n}\n\nfragment AppAssignableUser on User {\n  __typename\n}\n"
  }
};
})();

(node as any).hash = "fddc811af01640d116b06b4eda9401d0";

export default node;
