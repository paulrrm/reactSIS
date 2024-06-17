import { Route } from "react-router-dom"

import { Fragment, lazy } from "react"



export const renderRoutes = () => {
    return routes.map((route) => {
        const Layout = route.layout || Fragment;
        const Component = route.elemnet || Fragment;
        return <Route path={route.path} element={<Layout><Component /></Layout>} />
    })
}
export const routes = [
   
    {
        path: "/",
        elemnet: lazy(async () => await import("../interfaces/Home")),
        layout: lazy(async () => await import("../layouts/AppLayout")),
    },
    {
        path: "contact",
        elemnet: lazy(async () => await import("../interfaces/Contact")),
        layout: lazy(async () => await import("../layouts/AppLayout")),
    },
    {
        path: "/about",
        elemnet: lazy(async () => await import("../interfaces/About")),
        layout: lazy(async () => await import("../layouts/AppLayout")),
    },
    {
        path: "/login",
        elemnet: lazy(async () => await import("../interfaces/Login")),
        layout: lazy(async () => await import("../layouts/AppLayout")),
    },

]