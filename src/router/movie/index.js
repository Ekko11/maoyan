import Now from "views/movie/now"
import Coming from "views/movie/coming"

export default{
    path:"/movie",
    name:"Movie",
    component:()=>import("views/movie"),
    children:[
        {
            path:"now",
            name:"now",
            component:Now,
        },
        {
            path:"coming",
            name:"coming",
            component:Coming,
        },
    ]
}