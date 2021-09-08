import React from "react";
import "./ActivityList.css";
import Activity from "./Activity";

function ActivityList({activities}) {
  const mainActivityList = activities.map(({time, description}) => {
    return <Activity time={time} description={description} />
  })

  return (
    <div className="ActivityList">
      <tabke>
        <tbody>
          {mainActivityList}
        </tbody>
      </tabke>
    </div>
  )

}

export default ActivityList;
