import Home from './pages/home/home.jsx'
import Form from './pages/form/form.jsx'


const routes = [
    {
        exact: true,
        path: '/',
        element: <Home />
    },
    {
        exact: true,
        path: '/form',
        element: <Form />
    }
]

export default routes