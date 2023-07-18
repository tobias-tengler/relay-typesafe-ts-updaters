/**
 * @generated SignedSource<<1a215ef5cb0411ac8beb8de7d3e6ceea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type App_user$data = {
  readonly best_friend: {
    readonly $updatableFragmentSpreads: FragmentRefs<"AppUpdatableFragment">;
  } | null;
  readonly id: string;
  readonly name: string | null;
  readonly " $fragmentType": "App_user";
};
export type App_user$key = {
  readonly " $data"?: App_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"App_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "App_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "best_friend",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AppUpdatableFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "1c1882ef30b683b7538b081b10001960";

export default node;
