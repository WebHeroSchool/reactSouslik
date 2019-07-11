import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Preloader from '../Preloader/Preloader';
import Octokit from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit();

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
        <h1>{ isLoading ? <Preloader /> : this.state.name }</h1>
        {!isLoading && 
          <div>
            {!fetchSucces ? "Error " + error : 
              <div>
                <div>
                  <img src={avatarUrl} alt={name} className={styles.images}/>
                </div>             
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