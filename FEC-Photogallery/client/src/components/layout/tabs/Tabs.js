import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Tab from "./Tab";
import "./Tabs.scss";

const Tabs = (props) => {
  const { children, onTabClick } = props;
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
    // onTabClick(activeTab);
    onTabClick(tab);
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child) => {
          const { label } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  photos: PropTypes.array.isRequired,
  children: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  photos: state.restaurant.photos,
  loading: state.restaurant.loading,
});

export default connect(mapStateToProps)(Tabs);
