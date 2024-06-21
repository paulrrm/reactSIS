import { Route, Outlet } from "react-router-dom"

import { Children, Fragment, lazy, LazyExoticComponent, Suspense } from "react"

interface RouteProps {
    path?: string;
    element?: LazyExoticComponent<() => JSX.Element> | null;
    layout?: LazyExoticComponent<(props: { children: React.ReactNode }) => JSX.Element> | null;
    children?: RouteProps[];
    guard?: LazyExoticComponent<(props: { children: React.ReactNode }) => JSX.Element> | null;
}

export const renderRoutes = (routes: RouteProps[]) => {
    return routes.map((route, index) => {
        const Layout = route.layout || Fragment;
        const Component = route.element || Fragment;
        const Guard = route.guard || Fragment
        return <Route
            key={index}
            path={route.path}
            element={
                <Suspense fallback={<h1>CARGANDO................</h1>}>
                    <Guard>
                        <Layout>
                            {route.children ? <Outlet /> : <Component />}
                        </Layout>
                    </Guard>

                </Suspense>
            }>
            {route.children && renderRoutes(route.children)}
        </Route >
    })
}
export const routes: RouteProps[] = [
    {
        layout: lazy(async () => await import("../layouts/AppLayout")),
        children: [
            {
                path: "/",
                element: lazy(async () => await import("../interfaces/Home")),

            },
            {
                path: "contact",
                element: lazy(async () => await import("../interfaces/Contact")),
            },
            {
                path: "/about",
                element: lazy(async () => await import("../interfaces/About")),

            },
            {
                path: "/login",
                element: lazy(async () => await import("../interfaces/Login")),

            },
        ]
    },
    {
        path: "/principalv2",
        element: lazy(async () => await import("../interfaces/Principal")),

        guard: lazy(async () => await import("../guards/AuthGuard")),
    },
    {
        layout: lazy(async () => await import("../layouts/PrincipalLayout")),
        children: [
            {
                path: "/principal",
                element: lazy(async () => await import("../interfaces/Principal")),
                guard: lazy(async () => await import("../guards/AuthGuard")),
            },
            {
                path: "/editusr",
                element: lazy(async () => await import("../interfaces/AdminUsuarios")),
                guard: lazy(async () => await import("../guards/AuthGuard")),
            },
        ]
    },
    {
        path:'*',
        element:lazy(async () => await import("../interfaces/E404")),
    },

]