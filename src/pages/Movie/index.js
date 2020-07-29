import React from 'react'
import { Input } from 'antd';
import styles from './index.module.less'

const { Search } = Input;

const Movie = props =>{
 return     (<Search
 placeholder="SO一下"
 enterButton="SO"
 size="large"
 style={{ width: '80%',textAlign:'center',margin:'60px auto',display:'block' }}
 onSearch={value => console.log(value)}
/>)
}

export default Movie