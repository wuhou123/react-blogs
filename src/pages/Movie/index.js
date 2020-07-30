import React,{useState} from 'react'
import { Input,Card ,Col, Row} from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import styles from './index.module.less'
import api from '@/utils/api'

const { Search } = Input
const { Meta } = Card

const Movie = props =>{
 const [list,setList] = useState([])
 const handlerSearch = async (value)=>{
  const res = await api.movieSeach({kw:value})
  if(res.code === 1){
   let {data} = res.data
   setList(data||[])
  }
}

 return     (
 <div className={styles['movie-config']}>
  <Search
 placeholder="SO一下"
 enterButton="SO"
 size="large"
 style={{ width: '80%',textAlign:'center',margin:'60px auto',display:'block' }}
 onSearch={value => handlerSearch(value)}
/>
<Row gutter={16}>
{
 list&&list.length>0&&list.map((item,index)=>{
  const {label,name,pic,type,updateTime} = item
  return <Col span={8}><Card
  style={{ width: 200 }}
  cover={
    <img
      alt="图片"
      src={pic}
    />
  }
  actions={[
  <div><SettingOutlined key="setting"/>{type}</div>,
  <div><EditOutlined key="edit" />{updateTime}</div>
 ]}
>
  <Meta
    title={name}
    description={label}
  />
</Card>
</Col>
 })
}
  </Row>
</div>
)
}

export default Movie