import { LayoutProps } from "../types"

const AppLayout = ({ children }: LayoutProps) => {
    return (
        <>  <h1 id="app_title" className="m-20 text-teal-300 text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-center" >Rick And Morty</h1>
            <main>{children}</main>

            <footer className="p-12 text-center">Made by Doyts ❤️❤️</footer>
        </>
    )
}

export default AppLayout