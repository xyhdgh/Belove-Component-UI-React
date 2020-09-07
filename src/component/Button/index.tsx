import React, { useCallback } from 'react'
import './index.module.less'

interface Props {
  children?: string;
  borderColor?: string;
  hoverColor?: string;
  shape?: string;
  width?: number;
  height?: number;
  padding?: string;
  fontSize?: number;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export default (props: Props) => {
  const { children, borderColor, hoverColor, shape, width, height, padding, fontSize, onClick } = props
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement>)(e)
    }
  }, [])
  return (
    <button onClick={handleClick}>
      {children ? children : 'Default'}
      <style jsx>{`
        button {
          border-color: ${borderColor && borderColor};
          color: ${borderColor && borderColor};
          border-radius: ${shape && shape === 'circle' ? '50%' : '2px'};
          width: ${width}px;
          height: ${height}px;
          padding: ${padding};
          font-size: ${fontSize}px;
        }
        button:hover {
          border-color: ${hoverColor ? hoverColor : '#0099FF'};
          color: ${hoverColor ? hoverColor : '#0099FF'};
        }
      `}</style>
    </button>
  )
}
