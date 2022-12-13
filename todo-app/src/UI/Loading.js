import search from '../img/search.png';
import classes from './Loading.module.css';

export const Loading = () => {
    return (
        <div className={classes.loading}>
            <div className={classes['loading-box']}>
                <img src={search} alt="loading indicator"/>
                <div className={classes['out-box']}>
                    <i className={classes['in-box']}></i>
                </div>
                <p>Loading...</p>
            </div>
        </div>
    );
};
