export function Property({ datos, setPropiedad }) {
  const handleChange = (e) => {
    setPropiedad(e.target.value);
  };

  return (
    <div>
      <label htmlFor="propiedad">Tipo de Propiedad</label>
      <select id="propiedad" onChange={handleChange}>
        <option disabled selected>
          ...
        </option>
        {datos.map((item, index) => (
          <option key={index} value={item.tipo}>
            {item.tipo}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Property;
