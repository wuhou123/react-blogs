import React, { useEffect, useState, useRef } from 'react'
import {
  Form,
  Input,
  Button,
  Tag,
  Comment,
  Tooltip,
  message,
  Modal,
  Spin,
} from 'antd'
import {
  AliwangwangFilled,
  MessageFilled,
  MessageOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons'
import MDEditor from '@uiw/react-md-editor'
import {
  UserOutlined,
  EyeOutlined,
  EditOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import styles from './index.module.less'
import api from '../../utils/api'
import utils from '@/utils'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const { TextArea } = Input
dayjs.extend(relativeTime)

const Detail = (props) => {
  const [detailData, setDetailData] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [visible, setVisible] = useState(false)
  const [currentItem, setCurrentItem] = useState({})
  console.log(props)
  const id = props.location.search ? props.location.search.split('=')[1] : ''

  useEffect(() => {
    getDetail()
  }, [])

  const getDetail = async () => {
    try {
      let res = await api.getDetail({ id: id })
      if (res.code === 200) {
        setDetailData(res.data)
      }
    } catch (e) {}
  }

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 24 },
  }
  const tailLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  }
  // 回复
  const formRef = useRef(null)
  const onFinish = async (values) => {
    setVisible(false)
    // 回复文章
    let oldParams = {
      target_id: id,
      target_type: 'article',
    }
    // 回复评论
    if (visible) {
      oldParams = {
        comment_id: currentItem.id,
      }
    }
    const params = {
      ...values,
      ...oldParams,
    }
    setSubmitting(true)
    let res = await api[visible ? 'reply' : 'submmitReply'](params)
    if (res.code === 200) {
      message.success('回复成功,可能数据会延迟1-2分钟')
      getDetail()
      formRef.current.resetFields()
    }
    setSubmitting(false)
  }

  const Editor = ({ submitting }) => (
    <Form
      {...layout}
      ref={formRef}
      name="control-ref"
      onFinish={(values) => onFinish(values)}
    >
      <Form.Item
        name="nickname"
        label="昵称"
        rules={[{ required: true }]}
        style={{
          display: 'inline-block',
          width: '50%',
        }}
      >
        <Input placeholder="请输入昵称" allowClear />
      </Form.Item>
      <Form.Item
        name="email"
        label="邮箱"
        rules={[{ type: 'email', required: true }]}
        style={{
          display: 'inline-block',
          width: 'calc(50% - 8px)',
          marginLeft: '8px',
        }}
      >
        <Input placeholder="请输入邮箱(不会对外公开)" allowClear />
      </Form.Item>
      <Form.Item
        {...tailLayout}
        name="content"
        label="评论"
        rules={[{ required: true }]}
      >
        <TextArea rows={4} placeholder="请输入评论内容..." />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button htmlType="submit" loading={submitting} type="primary">
          评论
        </Button>
      </Form.Item>
    </Form>
  )
  const TransferDate = (props) => {
    const { date } = props
    return (
      <Tooltip title={date} color="#2db7f5">
        <span>{dayjs(date).from(dayjs().format('YYYY-MM-DD'))}</span>
      </Tooltip>
    )
  }

  const hanlderReply = (item) => {
    setVisible(true)
    setCurrentItem(item)
  }

  const DetailTmp = () => {
    const {
      title = '',
      category = '',
      author = '',
      browse = '',
      content = '',
      article_comment = {},
      created_at = '',
    } = detailData
    return (
      <div className={styles['detail-container']}>
        <div className="loading-container">
          <Spin tip="加载中..." spinning={!content}></Spin>
        </div>
        {title ? (
          <header>
            <h1>{title}</h1>
            <ul className={styles['artical-tags']}>
              <li>
                <Tag color="blue">{category.name}</Tag>
              </li>
              <li className="user-only-pc">
                <UserOutlined />
                <span>{author}</span>
              </li>
              <li>
                <EyeOutlined />
                <span>{browse}</span>
              </li>
              <li>
                <MessageOutlined />
                <span>{(article_comment.data || []).length}</span>
              </li>
              <li>
                <FieldTimeOutlined />
                <span>{created_at}</span>
              </li>
            </ul>
          </header>
        ) : (
          <div style={{ height: '500px' }}></div>
        )}
        <MDEditor.Markdown source={utils.transformSpecifiedChar(content)} />
        <div>
          <div className={styles['editor-label']}>
            <EditOutlined />
            写评论
          </div>
          <Comment content={<Editor submitting={submitting} />} />
          <div className={styles['editor-label']}>
            <UnorderedListOutlined />
            评论列表
          </div>
          {article_comment.data &&
            article_comment.data.map((item, index) => {
              const { nickname, content, reply, created_at } = item
              return (
                <Comment
                  key={index}
                  actions={[
                    <a
                      key="comment-nested-reply-to"
                      onClick={() => hanlderReply(item)}
                    >
                      回复
                    </a>,
                  ]}
                  author={<p>{nickname}</p>}
                  avatar={
                    <AliwangwangFilled
                      style={{
                        color: '#2d8cf0',
                        fontSize: '20px',
                      }}
                    />
                  }
                  content={<p>{content}</p>}
                  datetime={<TransferDate date={created_at} />}
                >
                  {reply &&
                    reply.map((val, valIndex) => {
                      const { nickname, content, created_at } = val
                      return (
                        <Comment
                          key={valIndex}
                          avatar={
                            <MessageFilled
                              style={{
                                color: '#2d8cf0',
                                fontSize: '20px',
                              }}
                            />
                          }
                          author={<p>{`来自【${nickname}】的回复`}</p>}
                          content={<p>{content}</p>}
                          datetime={<TransferDate date={created_at} />}
                          style={{
                            background: '#f8f8f8',
                            padding: '0 10px',
                          }}
                        />
                      )
                    })}
                </Comment>
              )
            })}
        </div>
        <Modal
          title="回复"
          visible={visible}
          onCancel={() => setVisible(false)}
          maskClosable={false}
          footer={null}
        >
          <Comment content={<Editor submitting={submitting} />} />
        </Modal>
      </div>
    )
  }

  return <DetailTmp />
}

export default Detail
