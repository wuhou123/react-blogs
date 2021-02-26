import React from 'react'
import * as utils from '@/utils'
import { Link, connect } from 'umi'

interface IProps {
  owner: any
  children: any
  locale: string
  to: string
}

const mapState = (state: any, owner: any) => {
  return {
    locale: state.index.locale,
    owner,
  }
}

const Index = ({ locale, children, owner }: IProps) => {
  const isEn = locale === 'en'
  let to = ''
  if (owner.to.search(/\?/) === -1) {
    to = owner.to + '?l=en'
  } else {
    to = owner.to.replace('?', '?l=en&')
  }
  return (
    <Link
      {...owner}
      to={isEn ? to : owner.to}
      target={utils.isIniframe || owner.target ? '_blank' : '_self'}>
      {children}
    </Link>
  )
}

export default connect(mapState)(Index)
