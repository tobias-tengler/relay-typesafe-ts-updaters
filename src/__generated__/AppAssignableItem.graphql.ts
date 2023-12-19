/**
 * @generated SignedSource<<3350dbe7a6024deb70ea5c6a85849603>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { FragmentRefs } from "relay-runtime";

const node: any = {};

(node as any).hash = "f3da6d6881ab08b7241982ae030eac0d";

export default node;

export function validate(value: {
  readonly __id: string;
  readonly __isAppAssignableItem?: string;
  readonly " $fragmentSpreads": FragmentRefs<"AppAssignableItem">;
}): false | {
  readonly __id: string;
  readonly __isAppAssignableItem: string;
  readonly " $fragmentSpreads": FragmentRefs<"AppAssignableItem">;
} {
  return value.__isAppAssignableItem != null ? value : false;
}
