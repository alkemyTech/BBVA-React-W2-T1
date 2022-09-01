import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/Content/Content';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import About from './Components/About/About';
import Footer from './Components/PublicWeb/Footer';
import Home from './Components/Home/Home';
import './css/bootstrap.min.css';
import LoginForm from './Components/Auth/LoginForm';
import RegisterForm from './Components/Auth/RegisterForm';
import Header from './Components/PublicWeb/Header';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />         
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-news" component={NewsForm} />

          <Route path="/backoffice/slides" component={SlidesForm} />
          <Route path="/backoffice/slides/create" component={SlidesForm} />
          <Route path="/backoffice/slides/:id" component={SlidesForm} />

          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />

          <Route path="/campaign" component={SchoolCampaign} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />

          <Route path="/login-form" component={LoginForm} />
          <Route path="/about-us" component={About} />
          <Route path="/register-form" component={RegisterForm} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
