import { useStoreSelector } from 'hooks'

function useSearchStore() {
  return useStoreSelector((state) => state.search)
}

export default useSearchStore
