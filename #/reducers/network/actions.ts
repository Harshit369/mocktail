import { NetworkRow } from '#/interfaces';
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('GLOBAL');

const actions = {
  appendRow: actionCreator<NetworkRow>('appendRow'),
  updateRow: actionCreator<NetworkRow>('updateRowResponse'),
  clearRows: actionCreator('clearRows'),
};

export default actions;
