import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import axios from 'axios'

// ✅ 单个github用户类型（多个属性，对应接口返回的数据）
type GithubUser = {
  login: string
  id: number
  avatar_url: string
  html_url: string
}

// ✅ 整个仓库类型
type UserStoreType = {
    users:GithubUser[], // 用户数组，每一项是GithubUser,
    isFirst:boolean,
    isLoading:boolean,
    err:string,
    // actions
    setUsers: (list: GithubUser[]) => void
    setLoading: (flag: boolean) => void
    setErr: (msg: string) => void
    // 异步action：搜索github用户
    searchUsers: (keyword: string) => Promise<void>
}

const useUserStore = create(
  devtools(
    (set): UserStoreType => ({
      users: [],
      isFirst: true,
      isLoading: false,
      err: "",

      setUsers: (list) => set({ users: list }),
      setLoading: (flag) => set({ isLoading: flag }),
      setErr: (msg) => set({ err: msg }),

      searchUsers: async (keyword: string) => {
        set({ isLoading: true, err: "" })
        try {
          const response = await axios.get(`/api/search/users?q=${keyword}`)
          const jsonData = response.data
          set({
            users: jsonData.items,
            isFirst: false
          })
        } catch (error) {
          if (axios.isAxiosError(error)) {
            set({ err: error.response?.data?.message || "请求出错" })
          } else {
            set({ err: (error as Error).message })
          }
        } finally {
          set({ isLoading: false })
        }
      }
    }),
    {
      name: "Github搜索仓库-axios版"
    }
  )
)

export default useUserStore