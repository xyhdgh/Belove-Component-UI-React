import { useEffect } from 'react'

const useSnakeBorder = (tagType: string) => {
  let ref;
  const addBorder = (current: HTMLElement) => {
    for (let i = 0; i < 4; i++) {
      let ele = document.createElement(tagType)
      current.appendChild(ele)
    }
  }
  useEffect(() => {
    if (ref && ref.current) {
      addBorder(ref.current)
    }
  }, [ref?.current])
  const createSnakeBorder = (eleRef: React.MutableRefObject<HTMLButtonElement>) => {
    ref = eleRef
  }
  return {
    createSnakeBorder
  }
}

export default useSnakeBorder