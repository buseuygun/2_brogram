export default function Layout(props) {
    const { children } = props

    const header = (
        <header>
            <h1>The FitLog</h1>
            <span>YOUR FITNESS JOURNEY ✨</span>
        </header>
    )

    const footer = (
        <footer>
            <p>Check   <a href="https://github.com/buseuygun"
            target="_blank">  <br/>Github</a> & <a 
            href="https://www.linkedin.com/in/busenuruygun95/"
            target="_blank">Linkedin</a></p>
        </footer>
    )


    return (
        <>
            {header}
            {children}
            {footer}
        </>)

}