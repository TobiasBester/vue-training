export default function (storeKey: string) {
  const getItem = () => JSON.parse(localStorage.getItem(storeKey) || '{}')
  const setItem = (value: any) => localStorage.setItem(storeKey, JSON.stringify(value))

  return { getItem, setItem }
}
