export default function Layout(props) {
    const { children } = props

    const header = (
        <header>
            <h1 className="text-gradient">The Brogram</h1>
            <p><strong>The 30 simple Workout Programs</strong></p>
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