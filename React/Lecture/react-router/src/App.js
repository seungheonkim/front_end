import {Navigate, Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
    return (
        <div>
            <MainHeader/>
            <main>
                <Routes>
                    {/*/ 로 가면 알아서 /welcome 으로 자동 연결*/}
                    <Route path={'/'} element={<Navigate replace to={'/welcome'}/>}/>
                    {/*nesting-route 구현*/}
                    <Route path={'/welcome'} element={<Welcome/>}>
                        <Route path={'new-user'} element={<p>Welcome, new-user!!</p>}/>
                    </Route>
                    <Route path={'/products'} element={<Products/>}/>
                    {/*dynamic path routing*/}
                    <Route path={'/products/:productId'} element={<ProductDetail/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;

//domain.com/welcome => welcome component
//domain.com/products => products component
//domain.com/product-detail/book => productDetail component