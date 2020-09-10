import React,{useState} from 'react'
import { Input,Card ,Col, Row,Modal} from 'antd'
import DPlayer from "react-dplayer";
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import styles from './index.module.less'
import api from '@/utils/api'

const { Search } = Input
const { Meta } = Card

const Movie = props =>{
 const [list,setList] = useState([])
 const [visible,setVisible] = useState(false)
 const [options,setOptions] = useState({})

 const handlerSearch = async (value)=>{
  const res = await api.movieSeach({kw:value})
  if(res.code === 1){
   let {data} = res.data
   setList(data||[])
  }
}

const hanlderDetail = async (item)=>{
  const {vid} = item
  let res = await api.getDetail({vid:vid})
  console.log(res)
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
  className="move-card"
  style={{ width: 200}}
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
 onClick={()=>hanlderDetail(item)}
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
  <Modal
    title="Basic Modal"
    visible={visible}
  >
            <DPlayer
                options={options}
                />
  </Modal>
</div>
)
}

export default Movie