import { useStoreSelector } from 'hooks'

function usePageStore() {
  return useStoreSelector((state) => state.page)
}

export default usePageStore
