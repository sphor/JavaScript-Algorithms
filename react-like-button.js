import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 100,
            liked: false
        };
    }

    handleLikeClick = () => {
        this.setState(prevState => ({
            likes: prevState.liked ? prevState.likes - 1 : prevState.likes + 1,
            liked: !prevState.liked
        }));
    }

    render() {
        const { likes, liked } = this.state;
        return (
            <>
                
                <div>
                    <button className={cx('like-button', {'liked': liked})} onClick={this.handleLikeClick}>Like | <span className="likes-counter">{likes}</span></button>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}
