import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Preloader from '../Preloader/Preloader';
import Octokit from '@octokit/rest';
import styles from './About.module.css';
import classnames from 'classnames';

const octokit = new Octokit();
const src_avatar = "images/crazysouslik1.png";

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
      console.log(result);
      this.setState({
        avatarUrl: result.data.avatar_url,
        name: result.data.name
      });
    });
    
    
  }
  render() {
    const { isLoading, repoList, fetchSucces, error, name, avatarUrl } = this.state;

    return (
      <CardContent>
        <div>{ isLoading ? <Preloader /> : <header>
              <div className={styles.wrapperImg}>
                <img src={avatarUrl} alt={name} className={styles.avatar}/>
              </div>
              <h1 class={styles.title}>Владимир Сысоев</h1>
            </header> }
        </div> 
        
        {!isLoading && 
          <div>
            
         
            {!fetchSucces ? (
              <div className={styles.error_box}>
                <img src='images/CrazySouslik2.png' className={styles.error_img}/>
                <span className={styles.error_text}>Упс! Произошла какая-то ошибка...</span>
              </div>              
            ) : 
              <div>
                <ol className={styles.list}>
                  {repoList.map(repo => (
                    <li key={repo.id} className={styles.itemList}>
                      <a href={repo.html_url} rel='noreferrer' className={styles.link}>
                        {repo.name}
                      </a>            
                    </li>
                  ))}
                </ol>                
              </div>                         
            }
          </div>          
        }
      </CardContent>
    );    
  }
};

export default About;