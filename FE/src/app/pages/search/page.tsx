"use client";
import { useEntidadesByname } from "@/app/hooks/query/useEntidadesByName";
import debounce from "lodash.debounce";
import React, { useCallback, useEffect, useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedTerm, setDebouncedTerm] = useState<string>(searchTerm);

  const { data, isLoading, isError, refetch } =
    useEntidadesByname(debouncedTerm);

  // Debounce function for setting the search term
  const debouncedSearch = useCallback(
    debounce((term: string) => {
      setDebouncedTerm(term);
    }, 500),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term); // Debounce the search term
  };

  // Manual search when clicking the button
  const handleSearchClick = () => {
    setDebouncedTerm(searchTerm);
  };

  useEffect(() => {
    if (debouncedTerm) {
      refetch(); // Only refetch when debouncedTerm changes and is not empty
    }
  }, [debouncedTerm, refetch]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar entidades..."
        className="search-input"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {/* <button onClick={handleSearchClick}>Buscar</button> */}

      {/* {isLoading && <div>Buscando...</div>} */}
      {isError && <h2>Error al buscar entidades.</h2>}

      {data && data.length > 0 ? (
        <div className="table-container">
          <table className="entidades-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Acrónimo</th>
                <th>Tipo</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Correo Electrónico</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entidad) => (
                <tr key={entidad.id}>
                  <td>{entidad.nombre}</td>
                  <td>{entidad.acronimo}</td>
                  <td>{entidad.tipoEntidad === 0 ? "Pública" : "Privada"}</td>
                  <td>{entidad.direccion}</td>
                  <td>{entidad.telefono}</td>
                  <td>{entidad.correoElectronico}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2>No se encontraron entidades.</h2>
      )}
    </div>
  );
};

export default Search;
