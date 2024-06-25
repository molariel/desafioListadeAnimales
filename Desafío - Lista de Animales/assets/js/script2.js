

<form id="formulario">
    <label for="propietario">Nombre del Propietario:</label>
    <input type="text" id="propietario" required><br>

    <label for="nombreMascota">Nombre de la Mascota:</label>
    <input type="text" id="nombreMascota" required><br>

    <label for="direccion">Dirección:</label>
    <input type="text" id="direccion" required><br>

    <label for="telefono">Teléfono:</label>
    <input type="text" id="telefono" required><br>

    <label for="enfermedad">Enfermedad:</label>
    <input type="text" id="enfermedad" required><br>

    <label for="tipo">Tipo de Mascota:</label>
    <select id="tipo">
        <option value="perro">Perro</option>
        <option value="gato">Gato</option>
        <option value="conejo">Conejo</option>
    </select><br>

    <button type="submit">Agregar Mascota</button>
</form>

<div id="resultado">
    <h3>Información de la Mascota:</h3>
    <ul></ul>
</div>
