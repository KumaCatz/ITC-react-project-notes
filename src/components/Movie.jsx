import React from 'react';
import "../css/Movie.css";

const [currentTime, setCurrentTime] = useState(new Date())

const Movie = (props) => {

    const totalMinutes = props.runtime;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    // const genres = use join() function
    // or map with html elements in this case

    return (
        <div className="container">
        <header>
            <h1>Movies Page</h1>
        </header>
        <main>
            <section>
                <img src={ this.props.poster } />
            </section>
            <section>
                <h1>
                    { this.props.name }
                </h1>
                <h3>
                    { this.props.year } | { this.hours }h { this.minutes }min
                </h3>
                <p>
                    { this.props.plot }
                </p>
                <div>
                    { this.props.genres.map( genre => <p>{genre}</p> ) }
                </div>
                <p>
                    <a href={ this.props.imdb } target="_blank">More info...</a>
                </p>
            </section>
        </main>
    </div>
    )
}

// class Movie extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     // this is old grammar. now, we use functions mostly

//     render() {
//     }    
// }


export default Movie;