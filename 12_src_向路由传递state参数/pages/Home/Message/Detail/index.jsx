import React, { Component } from 'react'

const DetailData=[
    {id:'01',content:'你好，中国'},
    {id:'02',content:'你好，尚硅谷'},
    {id:'03',content:'你好，未来的自己'}
]
export default class Detail extends Component {
  render() {
   /*   接收search参数 
    const {search}=this.props.location
    // 使用浏览器原生API替代 qs.parse
    const searchParams = new URLSearchParams(search)
    const id = searchParams.get('id')
    const title = searchParams.get('title') */

    /* 接收state参数 */
    const {id,title}=this.props.location.state || {}

    const findResult=DetailData.find((detailObj)=>{
        return detailObj.id===id||{}
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
