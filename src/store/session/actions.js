import { BottomSheet } from 'quasar';

export const toggleLeftDrawer = async ({ commit }, payload) => {
  commit('SET_LEFT_DRAWER', payload);
};

export const toggleRightDrawer = async ({ commit }, payload) => {
  commit('SET_RIGHT_DRAWER', payload);
};

export const toggleNetworkSheet = async ({ commit }) => {
  BottomSheet.create({
    dark: true,
    message: 'Network Selection',
    grid: true,
    actions: [
      {
        label: 'Cosmos',
        img: 'statics/logos/cosmos.svg',
        id: 'cosmos',
        meta: 'Cosmos',
      },
      {
        label: 'Irisnet',
        img: 'statics/logos/irisnet.svg',
        id: 'iris',
        meta: 'Irisnet',
      },
      {
        label: 'Kava',
        img: 'statics/logos/kava.svg',
        id: 'kava',
        meta: 'Kava',
      },
    ],
  }).onOk((action) => {
    commit('SET_NETWORK_NAME', action.meta);
    commit('SET_NETWORK', action.id);
    commit('ADD_LOG_MESSAGE', `Now connected to ${action.id}`);
  }).onCancel(() => {
    // console.log('Dismissed')
  }).onDismiss(() => {
    // console.log('I am triggered on both OK and Cancel')
  });
};


export const logInfo = async ({ commit }, payload) => {
  const log = {
    severity: 'info',
    message: payload,
  };
  commit('ADD_LOG_MESSAGE', log);
};

export const logWarning = async ({ commit }, payload) => {
  const log = {
    severity: 'warning',
    message: payload,
  };
  commit('ADD_LOG_MESSAGE', log);
};

export const logError = async ({ commit }, payload) => {
  const log = {
    severity: 'error',
    message: payload,
  };
  commit('ADD_LOG_MESSAGE', log);
};

export const showLedgerVoteSteps = async ({ commit }) => {
  commit('SHOW_LEDGER_VOTE_STEPS');
};
export const showStepContainer = async ({ commit }) => {
  commit('SHOW_STEPS_CONTAINER');
};
