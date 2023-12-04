import styles from "./page.scss";

function Posgrados() {
  return (
    <div>
      <section id="titulo">
        <p>
          <span class="primer-texto">
            Formación de Profesionistas
            <br />
          </span>
          <span class="segundo-texto">
            <strong>Posgrados</strong>
          </span>
        </p>
      </section>

      <section id="info">
        <div class="card mb-3" style={{width: '700px', display: 'inline-block', margin: '10px', cursor: 'pointer'}}>
        <div class="row g-0">
        <div class="col-md-4">
            <img src="/imagenes/Posgrados.png" class="img-fluid rounded-start" />
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">Especialidad en Diseño y Desarrollo de Equipamiento</h5>
            <a class="card-text" style={{textDecoration: 'none'}} href="https://www.utags.edu.mx/index.php/component/txeducation/course/piam">LEER MÁS...</a>
        </div>
        </div>
        </div>
        </div>
      </section><br></br><br /><br /> <br />
    </div>
  );
}

export default Posgrados;
