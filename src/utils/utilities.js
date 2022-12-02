import React from 'react';
import { useTabState, usePanelState } from '@bumaga/tabs';
import { Fade } from 'react-slideshow-image';
import MainAccount from '../components/pages/dashboard/MainAccount';
// import MyAccount from "../components/pages/dashboard/account/MyAccount";
import AddProduct from '../components/pages/dashboard/AddProducts';
import AddCategory from '../components/pages/dashboard/AddCategories';
// import ManageCategories from "../components/pages/dashboard/ManageCategories";

export const resetMessage = (setError) => {
  setTimeout(() => {
    setError('');
  }, 4000);
};

/* USER DASHBOARD COMPONENT */
const Tab = ({ children }) => {
  const { onClick } = useTabState();
  return <p onClick={onClick}>{children}</p>;
};

const Panel = ({ children }) => {
  const isActive = usePanelState();
  return isActive ? <span>{children}</span> : null;
};

export const dashboardMenu = (_) => {
  return (
    <>
      <div className="login__title title--menu">my account</div>
      <div className="dashboard__main--details">
        <ul className="dashboard__menu--list">
          <li>
            <Tab>User Information</Tab>
          </li>
          {/* <li>
            <Tab>My Account</Tab>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export const dashboardAdminMenu = (_) => {
  return (
    <>
      <div className="login__title title--menu admin--menu">Admin</div>
      <div className="dashboard__main--details">
        <ul className="dashboard__menu--list">
          <li>
            <Tab>Add Products</Tab>
          </li>
          <li>
            <Tab>Add Categories</Tab>
          </li>
          {/* <li>
            <Tab>Manage Categories</Tab>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export const dashboardPanel = (_) => {
  return (
    <>
      <Panel>
        <MainAccount />
      </Panel>
      {/* <Panel>
        <MyAccount />
      </Panel> */}
      <Panel>
        <AddProduct />
      </Panel>
      <Panel>
        <AddCategory />
      </Panel>
      {/* <Panel>
        <ManageCategories />
      </Panel> */}
    </>
  );
};

export const createProductsList = (list, title) => {
  return (
    <>
      <option value="">{title}</option>
      {list.map((item, i) => (
        <option value={item._id} key={i}>
          {item.name}
        </option>
      ))}
    </>
  );
};

/*  */
export const createOptions = (type) => {
  return (
    <>
      <option value="">{type}</option>
      <option value="true">Yes</option>
      <option value="false">No</option>
    </>
  );
};

export const createOptionsDropdown = (
  name,
  errors,
  register,
  title,
  errorLabel
) => {
  return (
    <div>
      <select
        name={name}
        className={errors.publish ? 'error' : ''}
        ref={register({ required: true })}>
        {createOptions(title)}
      </select>
      {errors.publish && errors.publish.type === 'required' && (
        <p className="login__error">{errorLabel}</p>
      )}
    </div>
  );
};

export const createFretOption = (name, errors, register, errorLabel) => {
  return (
    <div>
      <select
        name={name}
        className={errors.publish ? 'error' : ''}
        ref={register({ required: true })}>
        <>
          <option value="">Fret</option>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
        </>
      </select>
      {errors.publish && errors.publish.type === 'required' && (
        <p className="login__error">{errorLabel}</p>
      )}
    </div>
  );
};

export const createField = (
  type,
  name,
  placeHolder,
  errors,
  register,
  errorLabel
) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        className={errors.name ? 'error' : ''}
        autoComplete="off"
        ref={register({ required: true })}
      />
      {errors.name && errors.name.type === 'required' && (
        <p className="login__error">{errorLabel}</p>
      )}
    </div>
  );
};

export const createDropdown = (
  name,
  list,
  label,
  errors,
  register,
  errorLabel
) => {
  return (
    <div>
      <select
        name={name}
        className={errors.brand ? 'error' : ''}
        ref={register({ required: true })}>
        {createProductsList(list, label)}
      </select>
      {errors.brand && errors.brand.type === 'required' && (
        <p className="login__error">{errorLabel}</p>
      )}
    </div>
  );
};

export const createEmailField = (name, errors, register) => {
  return (
    <>
      <input
        type="email"
        name={name}
        placeholder="Enter your email"
        className={errors.email ? 'error' : ''}
        autoComplete="off"
        ref={register({
          required: ' ',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Email format: you@yourmail.com',
          },
        })}
      />
      {errors.email && errors.email.type === 'required' && (
        <p className="login__error">Please type in your email</p>
      )}
      {errors.email && errors.email.message && (
        <p className="login__error">{errors.email.message}</p>
      )}
    </>
  );
};

/* HOME COMPONENT */
export const slideImages = [
  {
    url: '/images/featured/featured_home.jpg',
    lineOne: 'Fender',
    lineTwo: 'Custom Shop',
    linkTitle: 'Shop Now',
    linkTo: '/guitards',
  },
  {
    url: '/images/featured/featured_home_2.jpg',
    lineOne: 'B-Stock',
    lineTwo: 'Awesome Discount',
    linkTitle: 'View Offers',
    linkTo: '/guitards',
  },
];

export const featuredHomeLast = {
  url: '/images/featured/featured_home_3.jpg',
  lineOne: 'UP TO 40% OFF',
  lineTwo: 'IN SECOND HAND GUITARDS',
  linkTitle: 'Shop Now',
  linkTo: '/guitards',
};

export const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    //console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

/* HOME COMPONENT SLIDE SHOW */
export const Slideshow = (_) => {
  return (
    <div className="slide-container">
      <Fade {...properties}>
        {slideImages.map((item, i) => {
          return (
            <div
              style={{
                backgroundImage: `url(${item.url})`,
                height: `${window.innerHeight}px`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
              key={i}>
              <div className="line">
                <div className="line__one">{item.lineOne}</div>
                <div className="line__two">{item.lineTwo}</div>
                <a
                  href={item.linkTo}
                  className="login__button login__bold link__btn">
                  {item.linkTitle}
                </a>
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export const SecondSlideShow = (_) => {
  return (
    <div
      style={{
        backgroundImage: `url(${featuredHomeLast.url})`,
        height: `50vh`,
      }}
      className="last__featured">
      <div className="line line__top">
        <div className="line__one">{featuredHomeLast.lineOne}</div>
        <div className="line__two line__two--fix">
          {featuredHomeLast.lineTwo}
        </div>
        <a
          href={featuredHomeLast.linkTo}
          className="login__button login__bold link__btn">
          {featuredHomeLast.linkTitle}
        </a>
      </div>
    </div>
  );
};

export const bestSelling = (guitards) => {
  return guitards.list.get.filter((item) => item.sold > 1);
};

/* LOADER SECTION */
export const Loader = ({ title = 'Loading the guitard list' }) => {
  return (
    <div className="home__best">
      <div className="home__best--container loader--position">
        <div className="loader"></div>
        <div className="loading__title">{title}</div>
      </div>
    </div>
  );
};

/* GUITARDS PAGE */
export const GuitardsTitle = ({ title }) => {
  return (
    <div className="guitards__home--title">
      <div className="title">{title}</div>
    </div>
  );
};

/* FIND GUITARD BY ID */
export const findProductById = (array, id) => {
  return array.find((item) => item._id === id);
};

export const isGuitardInCart = (id, list) => {
  const selectedGuitard = list.find((item) => item._id === id);

  if (!selectedGuitard) return false;

  return true;
};
