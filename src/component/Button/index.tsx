import React, { useCallback, useRef } from 'react'
import useTipple from '../../hooks/useTipple'
import useSnakeBorder from '../../hooks/useSnakeBorder'
import './index.module.less'

interface ButtonProps {
  children?: string;
  borderColor?: string;
  hoverColor?: string;
  shape?: string;
  width?: number;
  height?: number;
  padding?: string;
  fontSize?: number;
  onClick?: React.MouseEventHandler<HTMLElement>;
  backgroundColor?: {
    direction?: 'left' | 'right' | 'top' | 'bottom';
    startColor?: string;
    endColor?: string;
  };
  type?: {
    name: 'tipple' | 'snakeBorder';
    color: string;
    radius?: number;
  }
}

export default ({ children = 'Default', borderColor = '#999', hoverColor = '#0099FF', shape, width = 80, height = 50, padding = '5px 10px', fontSize = 16, onClick, backgroundColor, type }: ButtonProps) => {
  const { eleRef, createTipple } = useTipple(500, 'span')
  const { createSnakeBorder } = useSnakeBorder('span')
  const colorType = backgroundColor && backgroundColor.startColor && backgroundColor.endColor ? 'linear' : 'normal'
  let backgroundStyle;
  if (colorType === 'linear') {
    backgroundStyle = `linear-gradient(to ${backgroundColor?.direction ? backgroundColor?.direction : 'bottom'}, ${backgroundColor?.startColor}, ${backgroundColor?.endColor})`
  } else {
    backgroundStyle = backgroundColor?.startColor ? backgroundColor?.startColor : backgroundColor?.endColor
  }
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement>)(e)
    }
    if (type && type.name === 'tipple') {
      createTipple(e)
    }
  }, [])
  if (type && type.name === 'snakeBorder') {
    createSnakeBorder()
  }
  return (
    <button onClick={handleClick} ref={eleRef}>
      {children && children}
      <style jsx>{`
        button {
          border-color: ${borderColor && borderColor};
          color: ${borderColor};
          border-radius: ${shape && shape === 'circle' ? `${height / 2}px` : '0px'};
          width: ${width}px;
          height: ${height}px;
          padding: ${padding};
          font-size: ${fontSize}px;
          background: ${backgroundStyle ? backgroundStyle : '#fff'};
          position: relative;
        }
        button:hover {
          border-color: ${hoverColor ? hoverColor : '#0099FF'};
          color: ${hoverColor ? hoverColor : '#0099FF'};
        }
      `}</style>
    </button>
  )
}
