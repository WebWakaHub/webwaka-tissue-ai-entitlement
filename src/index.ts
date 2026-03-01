/**
 * AiEntitlement — Tissue Layer
 * Composes cells per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: tissue → depends on → cell
 */

import { AccessCtrlComposition } from "@webwaka/cell-access-ctrl";
import { PolicyEvalComposition } from "@webwaka/cell-policy-eval";
import { AiCognitiveCellComposition } from "@webwaka/cell-ai-cognitive-cell";

export { AccessCtrlComposition } from '@webwaka/cell-access-ctrl';
export { PolicyEvalComposition } from '@webwaka/cell-policy-eval';
export { AiCognitiveCellComposition } from '@webwaka/cell-ai-cognitive-cell';

/**
 * AiEntitlement Composition
 * Assembles cell-layer components into a cohesive tissue-layer capability.
 */
export class AiEntitlementComposition {
  private accessCtrlComposition: AccessCtrlComposition;
  private policyEvalComposition: PolicyEvalComposition;
  private aiCognitiveCellComposition: AiCognitiveCellComposition;

  constructor() {
    this.accessCtrlComposition = new AccessCtrlComposition();
    this.policyEvalComposition = new PolicyEvalComposition();
    this.aiCognitiveCellComposition = new AiCognitiveCellComposition();
  }
}

export * from "./types";
