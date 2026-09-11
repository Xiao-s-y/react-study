import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/Home/News";
import Message from "../pages/Home/Message";
import { element } from "prop-types";
import Detail from "../pages/Home/Message/Detail";



const routes=[
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/home',
        element:<Home/>,
        children:[
            {path:'news',element:<News/>},
            {path:'message',element:<Message/>,
                children:[
                    {path:'detail/:id/:title',element:<Detail/>}
                ]
            }

        ]
    },
    {
        path:'/', // 访问根路径 http://localhost:xxx/
        element: <Navigate to="/about" replace /> // 自动跳到/about
    }

]
export default routes