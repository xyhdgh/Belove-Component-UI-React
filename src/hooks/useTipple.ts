import { useRef } from 'react'

const useTipple = (ms: number, tagType: string) => {
  const eleRef = useRef(null)
  const createTipple = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,) => {
    const x = event.clientX - (event.target as HTMLButtonElement).offsetLeft
    const y = event.clientY - (event.target as HTMLButtonElement).offsetTop
    const ele = document.createElement(tagType)
    ele.style.left = x + 'px'
    ele.style.top = y + 'px';
    (eleRef as React.RefObject<HTMLButtonElement>).current.appendChild(ele)
    setTimeout(() => {
      ele.remove()
    }, ms)
  }
  return {
    eleRef,
    createTipple
  }
}

export default useTipple