import React , {useState, useEffect} from 'react';
import ArticleCard from '../UI/ArticleCard';

function Home(){

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/articles')
        .then( (response)=> response.json())
        .then((data) => {
            setArticles(data);
        })
    }, [])

    return(

        <div className="container">
            <div className="row">
                <div className="col-12 mb-4">
                    <h1>Progetto React Laravel</h1>
                </div>
                {articles.map((article) => {
                    return (
                        <div className="col-12 col-md-4 my-2" key={article.id}>
                            <ArticleCard article={article} />
                        </div>
                    )
                })}

            </div>
        </div>

    )
}

export default Home;
