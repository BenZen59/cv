import { NavLink } from 'react-router-dom';
import './CV.scss';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import photo from '../images/image.png';

export default function CV() {
  return (
    <>
      <header>
        <h1>Benoît ZENONE</h1>
        "RECHERCHE D'UN STAGE
        <br />
        OU/ET UNE ALTERNANCE EN
        <br />
        DÉVELOPPEMENT WEB <br />
        FULLSTACK"
      </header>

      <nav>
        <img src={photo} alt='cv' className='photoCV' />
        <div className='imagePerso'>
          <a href='https://www.linkedin.com/in/beno%C3%AEt-zenone-7763aab1/'>
            <div className='lienPerso'>
              <img src={linkedin} alt='lien linkedin' className='navImg' />
            </div>
          </a>
          <a href='https://github.com/BenZen59'>
            <div className='lienPerso'>
              <img src={github} alt='lien github' className='navImg' />
            </div>
          </a>
        </div>
        <span className='github'>GitHub</span>{' '}
        <span className='linkedin'>Linkedin</span>
        <p>
          <h1>INTRODUCTION</h1>
        </p>
        <p>
          Bonjour, Benoît 28 ans,, je suis
          <br />
          actuellement à la recherche d'une
          <br />
          alternance pour une formation de 1 an
          <br />à la Wild Code School
        </p>
        <p>
          <h1>DOMAINES DE COMPETENCES</h1>
        </p>
        <p>
          <h2>Hard Skills</h2>
        </p>
        <p>
          Git/GitHub
          <br />
          HTML/CSS/JS
          <br />
          Node.JS
          <br />
          React
          <br />
          MySQL
          <br />
          Express
        </p>
        <p>
          <h2>Soft Skills</h2>
        </p>
        <p>
          Autonomie
          <br />
          Flexibilité
          <br />
          Esprit d'équipe
          <br />
          Curieux
          <br />
          Passionné
        </p>
        <p>
          <h2>Langues</h2>
        </p>
        <p>
          Anglais (niveau B1, lu, écrit, parlé)
          <br />
          Japonais (notion)
        </p>
        <p>
          <h1>COORDONNEES</h1>
        </p>
        <p>
          07 81 70 95 11
          <br />
          benoit.zenone@gmail.com
          <br />
          LILLE, 59000
        </p>
        <p>
          <h1>CENTRES D’INTÉRÊTS</h1>
        </p>
        <p>
          Cinéma
          <br />
          Animation japonaise
          <br />
          Manga
          <br />
          Littérature asiatique
          <br />
          Littérature Science-fiction/Fantasy
          <br />
          Jeux-vidéo (RPG, Retrogaming)
          <br />
          Montage de maquette
        </p>
      </nav>

      <section>
        <h1>PROJETS DÉVELOPPEMENT WEB</h1>
        <p>
          <span className='boldSection'>Portfolio</span>
          , version CV du site avec une page projet également
          <br />
          <br />
          <span className='boldSection'>Site sur le cinéma Japonais, </span>
          projet perso
          <br />
          <br />
          <span className='boldSection'>WildMarket,</span> conception d'un site
          e-commerce en HTML/CSS
          <br />
          <br />
          <span className='boldSection'>KeepN,</span> application web pour
          rechercher des films et créer une Watch List, utilisation de l'api
          TMDB
          <br />
          <br />
          <span className='boldSection'>Site vitrine</span>, refaire un site à
          partir de zéro pour un chirurgien ophtalmologue, implémentation d'un
          back office également
          <br />
          <br />
          <span className='boldSection'>CartFood</span>, système de commande
          avec un panier
          <br />
          <br />
        </p>
        <p>
          <button className='projet'>
            <NavLink to='/projet'>En savoir plus</NavLink>
          </button>
        </p>
        <h1>EXPÉRIENCES PROFESSIONNELLES</h1>
        <p>
          <span className='boldSection'>
            Novembre 2019 - Janvier 2020 août-septembre 2020
          </span>
          <br /> Cdd à la librairie Page & Plume, Limoges (87)
          <br />
          <br />
          <span className='boldSection'>Juillet 2017 - Juillet 2019</span>
          <br /> Apprentissage en librairie pour l'obtention d'un bp libraire à
          la libraire Page & Plume, Limoges (87)
          <br />
        </p>
        <h1>FORMATION</h1>
        <p>
          <span className='boldSection'>
            Septembre 2022 - Septembre 2023 Formation alternance
          </span>
          <br /> À la Wild Code School
          <br />
          <br />
          <span className='boldSection'>
            Septembre 2021 - Février 2022 Formation web
          </span>
          <br />
          À la Wild Code School de Lille
          <br />
          <br />
          <span className='boldSection'>2016 - 2019 Diplôme Bp Libraire</span>
          <br /> À L'infl (institut National De Formationde La Librairie)
          <br />
          <br />
          <span className='boldSection'>
            2016 Séjour De 6 Mois En Angleterre
          </span>
          <br /> À L’école Ses À Folkestone
          <br />
          <br />
          <span className='boldSection'>
            {' '}
            2015 Diplôme D’analyste-programmeur Niveau Iii
          </span>
          <br />
          De L’école Exia.cesi D’arras (62) Bac +2
          <br />
          <br />
          <span className='boldSection'>
            Juin 2012 Baccalauréat Sti (sciences Et Techniques De L’ingénieur)
          </span>
          <br /> Spécialité Génie Électronique, Lycée Léonard De Vinci, Calais
          (62)
        </p>
      </section>
    </>
  );
}
