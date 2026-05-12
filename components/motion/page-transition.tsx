'use client'

import * as React from 'react'
import { HTMLMotionProps } from 'framer-motion'

import { MotionBox } from './box'

export interface PageTransitionProps extends Omit<HTMLMotionProps<'div'>, 'transition'> {
  children?: React.ReactNode
  width?: string | number | (string & {})[]
  height?: string | number | (string & {})[]
  display?: string | (string & {})[]
  alignItems?: string | (string & {})[]
}

export const PageTransition: React.FC<PageTransitionProps> = (props) => {
  const { children, ...rest } = props
  return (
    <MotionBox
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      {...rest}
    >
      {children}
    </MotionBox>
  )
}
