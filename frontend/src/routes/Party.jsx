import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import partyFetch from "../axios/config";

const Party = () => {
  const { id } = useParams();

  const [party, setParty] = useState(null);

  // Carregar festa
  useEffect(() => {
    const loadParty = async () => {
      const res = await partyFetch.get(`/parties/${id}`);

      setParty(res.data);
    };

    loadParty();
  }, []);

  if (!party) return <p>Carregando...</p>;

  return (
    <div className="party">
      <h1>{party.title}</h1>
      <div className="actions-container">
        <Link className="btn">Editar</Link>
        <button className="btn-secondary">Excluir</button>
      </div>
      <p>Orçamento: R${party.budget}</p>
      <h3>Serviços contratados:</h3>
      <div className="services-container">
        {party.services.map((service) => (
          <div className="service" key={service._id}>
            <img src={service.image} alt={service.name} />
            <p>{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Party;
