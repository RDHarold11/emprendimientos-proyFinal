import "./header.css"

const Header = ({text}) => {
  return (
    <section className="section-header fondo-section">
        <h2>{text}</h2>
    </section>
  )
}

export default Header