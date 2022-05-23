import styles from '../../styles/githubCard.module.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Doughnut } from 'react-chartjs-2';

import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
Chart.register(ArcElement, Legend, Tooltip);

const GithubCard = () => {
  const userName = 'dannycoll';
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [profileSrc, setProfileSrc] = useState('');
  const [recentRepos, setRecentRepos] = useState([]);
  const [repos, setRepos] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Languages Used',
        data: [],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(255, 0, 0)',
          'rgb(0, 204, 0)',
        ],
        hoverOffset: 4,
      },
    ],
  });

  const fetchData = async () => {
    const fetched = await (await fetch('https://api.github.com/users/dannycoll')).json();
    setFollowers(fetched.followers);
    setFollowing(fetched.following);
    setProfileSrc(fetched.avatar_url);
  };
  const fetchData2 = async () => {
    const fetched = await (await fetch('https://api.github.com/users/dannycoll/events')).json();
    let recentRepos = [
      ...fetched.map(x => ({
        name: x.repo.name,
        url: `https://github.com/${x.repo.name}`,
      })),
    ];
    recentRepos = recentRepos.filter((item, pos) => recentRepos.map(x => x.name).indexOf(item.name) == pos);
    setRecentRepos([...recentRepos]);

    const reposFetched = await (await fetch('https://api.github.com/users/dannycoll/repos')).json();
    reposFetched = reposFetched.map(x => ({
      name: x.name,
      lang: x.language,
    }));
    setRepos([...reposFetched]);
    chartData.labels = [...new Set(reposFetched.map(x => x.lang))];
    chartData.datasets[0].data = [
      ...chartData.labels.map(x => reposFetched.map(y => y.lang).filter(y => y == x).length),
    ];
    setChartData({ ...chartData });
  };
  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

  return (
    <div className={styles.display}>
      <div className={styles.statsWrapper}>
        <div className={styles.usernameWrapper} style={{ paddingLeft: '2rem' }}>
          <FontAwesomeIcon icon={faGithub} className={styles.faIconLarge} />{' '}
          <div className={styles.heading}>GitHub Stats</div>
        </div>
        <div className={styles.usernameWrapper}>
          <img src={profileSrc} height={50} width={50} className={styles.avatar} />
          <div className={styles.heading}>{userName}</div>
        </div>
        <div>
          <div className={styles.infoWrapper}>
            <span className={styles.labels}>Followers:</span> {followers}
          </div>
          <div className={styles.infoWrapper}>
            <span className={styles.labels}>Following:</span> {following}
          </div>
          <div className={styles.infoWrapper}>
            <span className={styles.labels}>Projects:</span> {repos.length}
          </div>
          <br />
          <div>
            <div className={styles.infoWrapper}>
              <span className={styles.labels}>Recent Projects:</span>
            </div>
            <ul className={styles.repoList}>
              {recentRepos.map(x => (
                <li>
                  <a href={x.url} className={styles.ghLinks}>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.faIcon} />
                    {x.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.chartWrapper}>{chartData.labels.length > 0 && <Doughnut data={chartData} />}</div>
    </div>
  );
};

export default GithubCard;
