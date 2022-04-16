import { useDispatch } from 'react-redux'
import type { AppDispatch } from 'stores'

const useStoreDispatch = () => useDispatch<AppDispatch>()

export default useStoreDispatch
