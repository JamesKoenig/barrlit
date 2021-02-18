import   React     from 'react';
import { connect } from 'react-redux';
import { Link    } from 'react-router-dom';

const SplashHeader = ({ navs=[] }) => (
  <header id="header">
    <Link to="/">
      <h1 className="logo-char logo-char-animation">
        B
      </h1>
    </Link>
    <div>
      {navs}
    </div>
  </header>
)

const mSTP = state => ({
});

const mDTP = dispatch => ({
});

export default connect(mSTP,mDTP)(SplashHeader);