import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { fetchUser } from './store/authSlice';

import Header from './components/Header';
import Landing from './components/Landing';

const DashBoard = () => <h2>DashBoard</h2>;
const SurveyNew = () => <h2>Surveynew</h2>;

const App = () => {
  const dispatch = useDispatch();
  const didLogRef = useRef(false);
  useEffect(() => {
    if (didLogRef.current === false) {
      didLogRef.current = true;
      dispatch(fetchUser());
    }
  }, [dispatch]);

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={DashBoard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
