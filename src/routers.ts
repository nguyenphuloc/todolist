import Home from './pages/home';
import AddToDo from './pages/addToDo/index';
import EditToDo from './pages/editToDo/editToDo';

interface IRouter {
    path ?: string | undefined;
    element ?: object;
    exact ?: boolean;
    protect ?: boolean
}

// const routers: IRouter[] = [
//     {
//         path: "/",
//         element={<Home />},
//         protect: false
//     },
//     {
//         path: "/add-todo",
//         // component: AddToDo,
//         // exact: true,
//         protect: false
//     },
//     {
//         path: "/edit-todo",
//         // component: EditToDo,
//         // exact: true,
//         protect: false
//     }
// ]
// export {
//     routers
// }