import myLogo from '../assets/investment-calculator-logo.png'
export default function Header() {
  return (
    <header className="center">
      <h1>React Investment Calculator</h1>
      <img
        src={myLogo}
        alt="Logo of a money bag"
      />
    </header>
  );
}
