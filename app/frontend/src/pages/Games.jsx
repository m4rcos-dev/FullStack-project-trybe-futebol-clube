import React, { useState, useEffect } from 'react';
import GamesTable from '../components/GamesTable';
import Header from '../components/Header';
import AddNewMatchBtn from '../components/AddNewMatchBtn';
import LeaderboardBtn from '../components/LeaderboardBtn';
import LoginBtn from '../components/LoginBtn';
import GamerFilter from '../components/GameFilter';
import { matchsBtn } from '../images';
import Helmet from 'react-helmet';
import '../styles/pages/games.css';

const Games = () => {
  const [currentFilter, setCurrentFilter] = useState('Status do Jogo');
  const [isAdm, setIsAdm] = useState(false);
  const [logged, setLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token') || false;
    const role = localStorage.getItem('role') || false;
    if (token) setLogin(true);

    setIsAdm(role === 'admin');
  }, []);

  return (
    <>
      <Helmet title='TFC - Partidas' />
      <Header
        page="PARTIDAS"
        pageIcon={matchsBtn}
        FirstNavigationLink={ LeaderboardBtn }
        SecondNavegationLink={ LoginBtn }
        logged={ logged }
        setLogin={ setLogin }
      />
      <section className="games-section">
        <div className="games-handlers">
          <GamerFilter
            currentFilter={ currentFilter }
            setCurrentFilter={ setCurrentFilter }
          />
          {
            (isAdm)
              ? <AddNewMatchBtn />
              : null
          }
        </div>
        <GamesTable currentFilter={ currentFilter } isAdm={ isAdm } />
      </section>
    </>
  );
};

export default Games;
