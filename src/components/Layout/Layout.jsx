import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"
import css from "./Layout.module.css"

export const Layout = () => {

    let activeStyle = {
        color: "coral",
    };

    return (
        <div className={css.container}>
            <header>
                <nav>
                    <ul className={css.navList}>
                        <li className={css.navList_item}><NavLink to={"/"} style={({ isActive }) =>
                            isActive ? activeStyle : undefined}>
                            Home
                        </NavLink>
                        </li>
                        <li className={css.navList_item}><NavLink to={"/movies"} style={({ isActive }) =>
                            isActive ? activeStyle : undefined}>
                            Movies
                        </NavLink></li>
                    </ul>
                </nav>
            </header>
            <main className={css.content}>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}

console.log()