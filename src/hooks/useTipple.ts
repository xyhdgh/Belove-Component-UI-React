const useTipple = (ref: React.RefObject<HTMLButtonElement>, ms: number, tagType: string) => {
  const createTipple = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,) => {
    const x = event.clientX - (event.target as HTMLButtonElement).offsetLeft
    const y = event.clientY - (event.target as HTMLButtonElement).offsetTop
    const ele = document.createElement(tagType)
    ele.style.left = x + 'px'
    ele.style.top = y + 'px';
    (ref as React.RefObject<HTMLButtonElement>).current.appendChild(ele)
    setTimeout(() => {
      ele.remove()
    }, ms)
  }
  return {
    createTipple
  }
}

export default useTipple