import React from 'react';
import educationIcon from '../assets/education (s).png';
import gamesIcon from '../assets/games (s).png';
import newsIcon from '../assets/newspaper (square).png';
import aiLabsIcon from '../assets/ai labs (s).png';
import stakingIcon from '../assets/stacking (s).png';
import gamingGuildIcon from '../assets/gaming guild (s).png';

const ecosystemItems = [
  {
    icon: educationIcon,
    title: 'Education Platform',
    description: 'Learn & Grow'
  },
  {
    icon: gamesIcon,
    title: 'Games',
    description: 'Play & Earn'
  },
  {
    icon: newsIcon,
    title: 'News Portal',
    description: 'Stay Informed'
  },
  {
    icon: aiLabsIcon,
    title: 'AI Labs',
    description: 'Innovate & Create'
  },
  {
    icon: stakingIcon,
    title: 'Staking',
    description: 'Earn Rewards'
  },
  {
    icon: gamingGuildIcon,
    title: 'Gaming Guild',
    description: 'Join & Compete'
  }
];

const Ecosystem = () => {
  return (
    <section className="dg-service2 pb130 pt130" id="ecosystem" style={{ background: '#000' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading-2 text-center">
              <h2 className="mb30">Kumami World Ecosystem</h2>
            </div>
          </div>
        </div>
        <div className="row upset ovr-bg1 ho-gdnt">
          {ecosystemItems.map((item, index) => (
            <div key={index} className="col-lg-2 col-sm-6 mt30">
              <div className="s-block up-hor ovr-base">
                <div className="nn-card-set">
                  <div className="s-card-icon">
                    <img src={item.icon} alt={item.title} className="img-fluid" />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
