import {useDispatch, useSelector} from "react-redux";
import classes from './Counter.module.css';
import {counterActions} from "../store/counter";

const Counter = () => {
    //action 가져오기
    const dispatch = useDispatch();
    //store 에서 가져올 state 가져오기
    //subscribing 까지 한번에 해준다
    const counter = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.showCounter);

    const incrementHandler = () => {
        // dispatch({
        //     type: INCREMENT,
        // })
        dispatch(counterActions.increment());
    };

    const increaseHandler = () => {
        // dispatch({
        //     type: INCREASE,
        //     amount: 5,
        // })
        dispatch(counterActions.increase(5));
    }

    const decrementHandler = () => {
        // dispatch({
        //     type: DECREMENT,
        // })
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        // dispatch({
        //     type: TOGGLE,
        // })
        dispatch(counterActions.toggle());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>INCREMENT</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decrementHandler}>DECREMENT</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

// class Counter extends Component{
//     incrementHandler() {
//         this.props.INCREMENT()
//     }
//     decrementHandler() {
//         this.props.DECREMENT()
//     }
//     toggleCounterHandler() {}
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>INCREMENT</button>
//                     <button onClick={this.decrementHandler.bind(this)}>DECREMENT</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//             </main>
//         );
//     }
// }
//
// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     }
// }
//
// const mapDispatchToProps = dispatch => {
//     return {
//         INCREMENT: () => dispatch({type: 'INCREMENT'}),
//         DECREMENT: () => dispatch({type: 'DECREMENT'}),
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
