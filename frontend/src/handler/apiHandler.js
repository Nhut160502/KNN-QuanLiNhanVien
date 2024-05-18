import { activeLoading, disActiveLoading } from 'src/providers/loadingSlice'

export const getListData = async (dispatch, apiCallBack, params) => {
  dispatch(activeLoading())
  try {
    const res = await apiCallBack(params)
    dispatch(disActiveLoading())
    return res
  } catch (error) {
    dispatch(disActiveLoading())
    return error
  }
}

export const storeData = async (dispatch, apiCallBack, data, navigate, url) => {
  dispatch(activeLoading())
  try {
    await apiCallBack(data)
    dispatch(disActiveLoading())
    navigate(url)
  } catch (error) {
    dispatch(disActiveLoading())
    return error
  }
}
