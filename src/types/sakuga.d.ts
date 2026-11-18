import type { DetailedHTMLProps, HTMLAttributes } from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sakuga-tabs': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        label?: string
        selected?: number | string
      }
    }
  }
}
