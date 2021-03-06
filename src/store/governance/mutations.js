/**
 * @function SET_COSMOS_PROPOSALS
 */
export function SET_COSMOS_PROPOSALS(state, val) {
  Object.assign(state.govProposals.cosmos, val);
}

/**
 * @function SET_IRIS_PROPOSALS
 */
export function SET_IRIS_PROPOSALS(state, val) {
  Object.assign(state.govProposals.iris, val);
}

/**
 * @function SET_CURRENT_PROPOSAL
 * @description sets the current proposal for the ProposalModal
 */
export function SET_CURRENT_PROPOSAL(state, val) {
  state.currentProposal = val;
}
