/**
 * @generated SignedSource<<3626efa94cd7d13d6b4f1f42aefa9ac9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type App_best_friend$data = {
  readonly id: string;
  readonly name: string | null;
  readonly " $fragmentType": "App_best_friend";
};
export type App_best_friend$key = {
  readonly " $data"?: App_best_friend$data;
  readonly " $fragmentSpreads": FragmentRefs<"App_best_friend">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "App_best_friend",
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "6a519acd6d201b0dd2aa60e21cfaf24a";

export default node;
