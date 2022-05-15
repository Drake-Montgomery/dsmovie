import MovieScore from 'components/MovieScore';
import { Link } from 'react-router-dom';

function MovieCard() {
    const game = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "Demon's Souls",
        count: 2,
        score: 4.8,
    };

    return (
        <>
            <div>
                <img className='dsmovie-movies-card-image' src={game.image} alt={game.title} />
                <div className="dsmovie-card-bottom-container">
                    <h3>{game.title}</h3>
                    <MovieScore />
                    <Link to={`/form/${game.id}`}>
                        <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default MovieCard;