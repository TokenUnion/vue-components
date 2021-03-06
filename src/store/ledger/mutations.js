export function SET_APP(state, app) {
  state.ledgerApp = Object.assign({}, JSON.parse(JSON.stringify(app)));
}

export function SET_LEDGER_APP_INFO(state, val) {
  state.version = `${val.major}.${val.minor}.${val.patch}`;
  state.locked = val.device_locked;
  state.test_mode = val.test_mode;
  state.detected = true;
}


/**
 * @function SET_COSMOS_ADDRESS
 * @description sets a given Cosmos address within the state
 *              differs from SET_COSMOS_ACCOUNT as this is only
 *              setting the address (used in getAddressModal)
 */
export function SET_COSMOS_ADDRESS(state, val) {
  state.address.cosmos = val;
}

/**
 * @function SET_IRIS_ADDRESS
 * @description sets a given Iris address within the state
 *              differs from SET_IRIS_ACCOUNT as this is only
 *              setting the address (used in getAddressModal)
 */
export function SET_IRIS_ADDRESS(state, val) {
  state.address.iris = val;
}
