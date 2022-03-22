import { NavLink } from 'react-router-dom';
import './CV.scss';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import photo from '../images/image.png';

export default function CV() {
  return (
    <>
      <header>
        <h1>ZENONE Benoît</h1>
      </header>

      <nav>
        <img src={photo} alt='photo du cv' className='photoCV' />
        <div className='imagePerso'>
          <a href='https://github.com/BenZen59'>
            <div className='lienPerso'>
              <img src={github} alt='lien github' className='navImg' />
            </div>
          </a>

          <a href='https://www.linkedin.com/in/beno%C3%AEt-zenone-7763aab1/'>
            <div className='lienPerso'>
              <img src={linkedin} alt='lien linkedin' className='navImg' />
            </div>
          </a>
        </div>
        <span className='github'>GitHub</span> Linkedin
        <p>
          <button className='projet'>
            <NavLink to='/projet'>Mes projets</NavLink>
          </button>
        </p>
        <p>
          <h1>INTRODUCTION</h1>
        </p>
        <p>
          Bonjour, Benoît 28 ans,
          <br />
          actuellement en recherche de <br />
          stage en développement web
        </p>
        <p>
          <h1>DOMAINES DE COMPETENCES</h1>
        </p>
        <p>
          <h2>Informatique</h2>
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
          Téléphone: 07 81 70 95 11
          <br />
          Email: benoit.zenone@gmail.com
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
        <h1>Expériences profesionnelles</h1>
        <p>
          <div className='boldSection'>
            Novembre 2019 - Janvier 2020 août-septembre 2020
          </div>{' '}
          Cdd à la librairie Page & Plume, Limoges (87)
          <br />
          <div className='boldSection'>Juillet 2017 - Juillet 2019</div>{' '}
          Apprentissage en librairie pour l'obtention d'un bp libraire à la
          libraire Page & Plume, Limoges (87)
          <br />
          <div className='boldSection'>Avril – Juin 2015</div> Stage à
          association culture & liberté à Arras,édition d’un site wordpress et
          mise en place de plugins
          <br />
          <div className='boldSection'> Septembre – Novembre 2014</div> Stage à
          inf’audit.com, magasin spécialisé en réparation informatique, Calais
          (62)
        </p>
        <h1>Formation</h1>
        <p>
          <div className='boldSection'>
            Septembre 2021 - Février 2022 Formation web
          </div>
          À la Wild Code School de Lille
          <br />
          <div className='boldSection'>2016 - 2019 Diplôme Bp Libraire</div> À
          L'infl (institut National De Formationde La Librairie)
          <br />
          <div className='boldSection'>
            2016 Séjour De 6 Mois En Angleterre
          </div>{' '}
          À L’école Ses À Folkestone
          <br />
          <div className='boldSection'>
            {' '}
            2015 Diplôme D’analyste-programmeur Niveau Iii
          </div>
          De L’école Exia.cesi D’arras (62) Bac +2
          <br />
          <div className='boldSection'>
            Juin 2012 Baccalauréat Sti (sciences Et Techniques De L’ingénieur)
          </div>{' '}
          Spécialité Génie Électronique, Lycée Léonard De Vinci, Calais (62)
        </p>
        <h1>Expériences diverses</h1>
        <p>
          Écriture D'un Dossier Pour Le Bp Libraire Sur Le Sujet
          Suivant"promouvoir La Culture Japonaise À Travers La Librairie"
          <br /> <br />
          Option Cinéma Au Lycée Pour Le Bac, Avec La Réalisation D’un
          Court-métrage Et Un Passage À L’oral
          <br /> <br />{' '}
        </p>
      </section>
    </>
  );
}
