import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTopicsRequest} from "../../actions/general";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {useHistory} from "react-router-dom";

const Topics = () => {

  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const topics = useSelector(state => state.general.topics);
  const history = useHistory();

  useEffect(() => {
    dispatch(getTopicsRequest());
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {topics.map(item =>
          <Tab label={item.title} onClick={() => {
            console.log(43234);
            history.push(`/topics/${item.slug}`)
          }}/>
        )}
      </Tabs>
    </div>
  )
};

export default Topics;