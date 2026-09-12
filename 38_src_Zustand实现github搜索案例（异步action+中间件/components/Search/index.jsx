import React,{useRef} from 'react'
import useUserStore from '../../store/store'

export default function Search() {
  // 创建ref绑定input
  const keyWordElement = useRef(null)
  // 只取出searchUsers这个异步方法！！selector只拿函数，不要执行
  const searchUsers = useUserStore(s => s.searchUsers)

  // 点击按钮才执行的搜索函数
  const handleSearch = ()=>{
    // 点击的时候，DOM已经存在，才能拿current.value
    const keyword = keyWordElement.current.value.trim()
    if(!keyword) return
    searchUsers(keyword)
  }

  return (
      <div>
         <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    <input type="text" placeholder="输入关键词进行搜索" ref={keyWordElement}/>&nbsp;
                    <button onClick={handleSearch}>搜索</button>
                </div>
            </section>

      </div>
    )
}
