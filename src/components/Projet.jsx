import './Projet.scss';

export default function Projet() {
  return (
    <div className='projet'>
      <div className='h2header'>Mes Projets</div>

      <ul id='timeline'>
        <li class='work'>
          <input class='radio' id='work1' name='works' type='radio' checked />
          <div class='relative'>
            <label for='work1'>WildMarket</label>
            <span class='date'>Octobre 2021</span>
            <span class='circle'></span>
          </div>
          <div class='content'>
            <p>
              WildMarket est le 1er projet fait à la Wild Code School, le but
              était de faire un site en HTML/CSS en 2 semaines.
              <br />
              <br />
              <a
                href='https://github.com/BenZen59/wildmarket'
                className='lienProjet'
              >
                Lien du projet
              </a>
            </p>
          </div>
        </li>
        <li class='work'>
          <input class='radio' id='work2' name='works' type='radio' checked />
          <div class='relative'>
            <label for='work2'>KeepN</label>
            <span class='date'>
              Novembre à <br />
              Décembre 2021
            </span>
            <span class='circle'></span>
          </div>
          <div class='content'>
            <p>
              Le 2e projet consiste à crée une application web sur les films
              grâce à l'api de TMDB en React, possibilité de consulter des
              fiches de films et de les ajouter à une collection.
              <br />
              <br />
              <a
                href='https://github.com/WildCodeSchool/p2-g2-sept21-lille-react-Videotheque'
                className='lienProjet'
              >
                Lien du projet
              </a>
            </p>
          </div>
        </li>
        <li class='work'>
          <input class='radio' id='work3' name='works' type='radio' checked />
          <div class='relative'>
            <label for='work3'>Projet Client Ophtalmology</label>
            <span class='date'>
              Décembre 2021 <br />à Février 2022
            </span>
            <span class='circle'></span>
          </div>
          <div class='content'>
            <p>
              Le 3e projet consiste à refaire de zéro un site pour un chirurgien
              ophtalmologue, un back office fut crée également pour que le
              client pour éditer/ajouter du contenue
              <br />
              <br />
              <a
                href='https://github.com/WildCodeSchool/p3-g1-sept21-lille-reactJs-ophtalmology-frontend'
                className='lienProjet'
              >
                Lien du projet front
              </a>
              <br />
              <a
                href='https://github.com/WildCodeSchool/p3-g1-sept21-lille-ophtalmology-backend'
                className='lienProjet'
              >
                Lien du projet back
              </a>
              <br />
              <a
                href='https://github.com/WildCodeSchool/-p3-g1-sept21-lille-reactJs-ophtalmology-admin'
                className='lienProjet'
              >
                Lien du projet back office
              </a>
            </p>
          </div>
        </li>
        <li class='work'>
          <input class='radio' id='work4' name='works' type='radio' checked />
          <div class='relative'>
            <label for='work4'>Site cinéma Japonais</label>

            <span class='circle'></span>
          </div>
          <div class='content'>
            <p>Projet perso en React sur le cinéma japonais en général</p>
          </div>
        </li>
        <li class='work'>
          <input class='radio' id='work5' name='works' type='radio' checked />
          <div class='relative'>
            <label for='work5'>Site CV</label>

            <span class='circle'></span>
          </div>
          <div class='content'>
            <p>Mon CV en version web</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
