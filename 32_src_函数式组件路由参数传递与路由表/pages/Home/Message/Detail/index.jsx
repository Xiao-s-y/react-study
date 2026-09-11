import React from 'react'
import { useParams } from 'react-router-dom' 

export default function Detail() {
   /*  路由的动态参数必须用 useParams() 钩子拿 */
   // 从url中提取动态参数 id 和 title，prams传递
  const { id, title } = useParams() 

  // useSearchParams 返回数组：[查询参数对象, 修改参数的方法]，search传递
 /*  const [searchParams] = useSearchParams()
  // 使用 .get() 获取参数
  const id = searchParams.get('id')
  const title = searchParams.get('title')
 */
   
  /* // 获取location，里面包含state
    const location = useLocation()
  // 取出state里的数据
    const { id, title } = location.state || {} // ||{} 防止刷新state丢失报错 */


  const DetailData=[
    {id:'01',content:'你好，中国'},
    {id:'02',content:'你好，尚硅谷'},
    {id:'03',content:'你好，未来的自己'}
  ]

  
    const findResult=DetailData.find((detailObj)=>{
        return detailObj.id===id
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
}
