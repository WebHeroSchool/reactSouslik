import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Preloader from '../Preloader/Preloader';
import Octokit from '@octokit/rest';
import styles from './About.module.css';
import Warning from '../Warning/Warning';
import classnames from 'classnames';

const octokit = new Octokit();
let src_avatar = "images/crazysouslik1.png";
class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    userName: 'ChuVo',
    fetchSucces: false,
    error: ''
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: this.state.userName,
    }).then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false,
        fetchSucces: true
      });

    })
    .catch(err => {
      this.setState({
        error: err,
        isLoading: false,
        fetchSucces: false
      });
    });

    octokit.users.getByUsername({
      username: this.state.userName
    })
    .then(result =>{      
      src_avatar = result.data.avatar_url;
      this.setState({
        name: result.data.name
      });
    });
  }

  render() {
    const { isLoading, repoList, fetchSucces, name } = this.state;

    return (
      <CardContent className={styles.p_0}>
        <header className={styles.header}>
          <div className={styles.avatar}>
            <a href="https://crazysouslik.pro" target="_blank" rel="noopener noreferrer">
              <img src={src_avatar} alt={name} className={styles.avatar__img}/>
            </a>            
          </div>
          <div className={styles.title_wrapper}>
            <h1 className={styles.title}>Владимир Сысоев</h1>
          </div>
          <div className={styles.about_text}>
             <span className={styles.text}>Junior Frontend-разработчик.<br />
              HTML-верстальщик для ваших проектов</span>
          </div>
          <div className={styles.contacts}>
            <a href="mailto:crazysouslik@ya.ru" className={styles.contacts_link}>
              <img src="../images/email.svg"alt="E-mail CrazySouslik`s" className={styles.contact__img} />
              <span>crazysouslik@ya.ru</span>
            </a>
            <a href="tel:+79535189008" className={styles.contacts_link}>
            <img src="../images/tg.svg" alt="Telegram CrazySouslik`s" className={styles.contact__img} />
            <span>+7 (953) 518-90-08</span>
            </a>
          </div>
            
          
          <div className={styles.social}>
            <a href="https://t.me/CrazySouslik" className={styles.social__item} target="_blank" rel="noopener noreferrer">
              <img src="../images/tg.svg" alt="Telegram CrazySouslik`s" className={styles.social__img}/>
            </a>
            <a href="https://github.com/ChuVo" className={styles.social__item} target="_blank" rel="noopener noreferrer">
              <img src="../images/git.svg" alt="GitHub CrazySouslik`s" className={styles.social__img}/>
            </a>
            <a href="https://www.linkedin.com/in/vladimir-sysoev-571a97176/" className={styles.social__item} target="_blank" rel="noopener noreferrer">
              <img src="../images/in.svg" alt="LinkedIn CrazySouslik`s" className={styles.social__img}/>
            </a>
            <a href="https://vk.com/chuiv" className={styles.social__item} target="_blank" rel="noopener noreferrer">
              <img src="../images/vk.svg" alt="vk CrazySouslik`s" className={styles.social__img}/>
            </a>
          </div>         
        </header>

        <main className={styles.main}>
          {isLoading ? <Preloader /> : 
            <div className={styles.list_wrapper}>
                { !isLoading &&
                <div>
                  {!fetchSucces ?
                    ( <Warning
                        warningTitle = 'Упс! Что-то пошло не так'
                        warningSubtitle = 'Попробуй загрузить чуть позже...'
                    /> ) :

                    <div>
                      { repoList.length === 0 ? ( <div className={styles.error_box}>
                        <Warning
                          warningTitle = 'Репозитории отсутствуют'
                          warningSubtitle = 'Добавьте как минимум один репозиторий на github.com'
                        />
                        </div> ) : 
                      ( <div>
                          <ol className={styles.list}>
                            {repoList.map(repo => (
                              <li key={repo.id} className={styles.itemList}>
                                <a href={repo.html_url} target="_blank" className={styles.link} rel="noopener noreferrer">
                                  {repo.name}                                  
                                
                                <div className={styles.data_wrapp}>
                                  <div className={styles.row}>
                                    <div className={classnames({
                                      [styles.repo_lang_indic]:true,
                                      [styles.lang_html]: repo.language === 'HTML',
                                      [styles.lang_js]: repo.language === 'JavaScript'
                                    })
                                      }></div>
                                    <span className={styles.repo_lang}>{repo.language}</span>
                                    <div className={classnames({
                                        [styles.data_icon]: true,
                                        [styles.data_icon_visible]: repo.stargazers_count !== 0 })
                                      }>
                                        <img src="images/star.svg" alt="is Like" />
                                        {repo.stargazers_count}                                    
                                    </div>
                                    <div className={classnames({
                                        [styles.data_icon]: true,
                                        [styles.data_icon_visible]: repo.forks_count !== 0 })
                                      }>
                                        <img src="images/follow.svg" alt="is follow" />
                                        {repo.forks_count}                                    
                                    </div>
                                  </div>
                                  <div>{getUpdate_at(repo.updated_at)} </div>
                                </div>
                                </a>                                
                              </li>
                            ))}
                          </ol>
                        </div> )
                      }              
                    </div>                
                  }
                </div>
              }
            </div>            
          }
        </main>
      </CardContent>
    );
  }
};

export default About;

function getUpdate_at(i) {
  const width = window.screen.width,
        monthFull = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"],
        monthShort = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];
  let month = "",
      up = 'Up ';

  if (width <= 470) {
    month = monthShort;   
  } else {
    month = monthFull;
    up = 'Update ';
  }
  
  month = month[+i.substring(5,7)];

  i = i.substring(0, 10).split('-').reverse().join(' ');
  i = i.substring(0,2) + " " + month + " " + i.substring(6);
  
  return up + i;
}