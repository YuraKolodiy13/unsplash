import React, {useState} from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link, NavLink, useHistory} from "react-router-dom";
import {TOPICS} from '../../helpers/constants';

const TopicsNav = () => {

  const history = useHistory();
  const tabIndex = TOPICS.findIndex(item => item.slug === history.location.pathname.slice(8));
  const [value, setValue] = useState(tabIndex !== -1 ? tabIndex : false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <NavLink to={'/'} onClick={e => handleChange(e, false)}>Home</NavLink>
      <NavLink to={'/login'} onClick={e => handleChange(e, false)}>Login</NavLink>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {TOPICS.map(item =>
          <Tab label={item.title} component={Link} to={`/topics/${item.slug}`} key={item.slug}/>
        )}
      </Tabs>
    </div>
  )
};

export default TopicsNav;