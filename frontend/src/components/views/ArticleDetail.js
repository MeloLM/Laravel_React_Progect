import React , { useEffect ,useState } from "react";
import { useParams } from "react-router-dom";

function ArticleDetail() {

    const [article, setArticle] = useState([]);
    const {articleId} = useParams()

    useEffect( () => {
        fetch(`http://127.0.0.1:8000/api/article/${articleId}`)
        .then((response) => response.json())
        .then((data) => {
            setArticle(data)
        })
    }, [])

    return(
       <div className="container mt-5">
        <div className="row border shadow">
            <h1>Articolo n.{article.id}</h1>
            <div className="col">
                <h2>{article.title}</h2>
                <h3>{article.subtitle}</h3>
                <p>{article.body}</p>
            </div>
        </div>
       </div>
    )
}

export default ArticleDetail;