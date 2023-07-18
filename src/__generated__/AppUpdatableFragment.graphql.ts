/**
 * @generated SignedSource<<4d4f7e0a51187039128b92190b7f7cd8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { UpdatableFragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppUpdatableFragment$data = {
  name: string | null;
  readonly " $fragmentType": "AppUpdatableFragment";
};
export type AppUpdatableFragment$key = {
  readonly " $data"?: AppUpdatableFragment$data;
  readonly $updatableFragmentSpreads: FragmentRefs<"AppUpdatableFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppUpdatableFragment",
  "selections": [
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

(node as any).hash = "9ff59bde975b69b0e989205af14f95a6";

export default node;
