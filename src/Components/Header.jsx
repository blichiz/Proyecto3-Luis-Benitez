import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav>
      <div className="historial">
        <Link to="historial">
          <span title="Ver Historial" id="botonEmoji">📋</span>
        </Link>
      </div>
      <h1 className="center separador">Asegura tu Casa 🏡</h1>
    </nav>
  );
}

export default Header;
