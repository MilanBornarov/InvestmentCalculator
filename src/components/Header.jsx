import logoImg from "../assets/investment-calculator-logo.png"

export default function Header({title}){
    return (
        <header id='header'>
        <img src={logoImg} alt="logo - money bag"/>
        <h1>{title}</h1>
        </header>
    )
}