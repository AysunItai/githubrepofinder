import { useSelector } from 'react-redux';
 import { Link } from 'react-router-dom';
import Header from './header';


function Repos() {
     const { repositories, loading, error }= useSelector(state => state.data)
  console.log(repositories)
     return (
        <>
        <h4 >
      <Link className='link' to="/">Back</Link>
    </h4>
        <Header title={'Search Results'}/>
    <div className="reopos-container">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}       

          {
            repositories.map((repo) => (
              <div key={repo.id} className="repoLink">
                <a href={repo.html_url}>{repo.name}</a>
              </div>

            ))
          }
        </div>  
        </>

  )
}
export default Repos;