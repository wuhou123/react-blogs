import api from '@/utils/api'

export interface IState {
  showLoading: boolean
  baseInfo: object
  taskList: Array<object>
}

export default {
  state: {
    showLoading: false,
    baseInfo: {},
    taskList: [],
  },
  reducers: {
    setBase(state: IState, { payload: baseInfo }: { payload: object }) {
      return {
        ...state,
        baseInfo,
      }
    },
    setTaskList(state: IState, { payload: taskList }: { payload: object }) {
      return {
        ...state,
        taskList,
      }
    },
    setLoading(state: IState, { payload: showLoading }: { payload: boolean }) {
      return {
        ...state,
        showLoading,
      }
    },
  },
  effects: {
    *getDouyin({ payload }: any, { call, put }: any) {
      const res = yield call(api.getDouyin, payload)
      const { success, data } = res || {}
      if (success) {
        yield put({
          type: 'setBase',
          payload: data,
        })
      }
    },
    *loadingStatus({ payload }: any, { call, put }: any) {
      yield put({
        type: 'setLoading',
        payload: payload,
      })
    },
  },
}
