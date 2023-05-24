import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { getActivities, createActivities, deleteActivities, editActivities } from "../api/activityApi";
import './Createactivity.css';

function CreateActivity() {
  const [activities, setActivities] = useState([]);
  const [activity_name, setName] = useState();
  const [activity_date, setDate] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [activity_start_time, setStartTime] = useState();
  const [activity_finish_time, setFinishTime] = useState();
  const [activity_type, setType] = useState();
  const [distance, setDistance] = useState();
  const [load, toggleReload] = useState(false);
  const [inputActive, setInputActive] = useState(false);
  const [editedActivity, setEditedActivity] = useState({});
  const [editedActivityId, setEditedActivityId] = useState(null);

  useEffect(() => {
    const getActivitieses = async () => {
      const activities = await getActivities();
      setActivities(activities);
    };

    getActivitieses();
  }, [load]);

  const save = async () => {
    const newActivity = {
      activity_name,
      activity_date,
      description,
      duration,
      activity_start_time,
      activity_finish_time,
      activity_type,
      distance,
    };
    await createActivities(newActivity);
    toggleReload(!load);
  };

  const confirmDelete = async (id) => {
    let text = "Press a button!\nEither OK or Cancel.";
    if (window.confirm(text)) {
      await deleteActivities(id);
      toggleReload(!load);
    } else {
      alert("You canceled!");
    } 
  }
  // editActivity
  const editActivity = (activity) => {
    setInputActive(true);
    setEditedActivity(activity);
    setEditedActivityId(activity._id);
  }
  // updateActivity
  const updateActivity = async (id) => {
    await editActivities(id, editedActivity);
    setInputActive(false);
    setEditedActivity({});
    setEditedActivityId(null);
    const updatedActivities = activities.map(activity => {
      if (activity._id === id) {
        return editedActivity;
      }
      return activity;
    });
    setActivities(updatedActivities);
  }

  return (
    <>
      <Layout/>
      <div className="create-activity">
        <h3 style={{color:"#fac031"}}>Create <span style={{color:"white", backgroundColor:"#fac031"}}>Activity</span></h3>
        <div className="create-form">
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Date</label>
          <input
            type="text"
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Start Time</label>
          <input
            type="text"
            placeholder="Start Time"
            onChange={(e) => setStartTime(e.target.value)}
          />
          <label>Finish Time</label>
          <input
            type="text"
            placeholder="Finish Time"
            onChange={(e) => setFinishTime(e.target.value)}
          />
          <label>Activity Type</label>
          <input
            type="text"
            placeholder="Type"
            onChange={(e) => setType(e.target.value)}
          />
          <label>Distance</label>
          <input
            type="text"
            placeholder="Distance"
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div className="create-btn">
          <button className="create-save-btn" onClick={save}>Save</button>
          <button>Cancel</button>
        </div>
      </div>

      <h3>Render</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Description</th>
            <th>Start_Time</th>
            <th>Finish_Time</th>
            <th>Type</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => {
            return (
              <tr key={activity._id}>
                <td>
                  <input
                    value={inputActive && editedActivityId === activity._id ? editedActivity.activity_name : activity.activity_name}
                    disabled={!inputActive}
                    className={`${inputActive ? 'inputTrue' : 'inputFalse'}`}
                    onChange={(e) => setEditedActivity({ ...editedActivity, activity_name: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    value={inputActive && editedActivityId === activity._id ? editedActivity.activity_date : activity.activity_date}
                    disabled={!inputActive}
                    className={`${inputActive ? 'inputTrue' : 'inputFalse'}`}
                    onChange={(e) => setEditedActivity({ ...editedActivity, activity_date: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    value={inputActive && editedActivityId === activity._id ? editedActivity.description : activity.description}
                    disabled={!inputActive}
                    className={`${inputActive ? 'inputTrue' : 'inputFalse'}`}
                    onChange={(e) => setEditedActivity({ ...editedActivity, description: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    value={inputActive && editedActivityId === activity._id ? editedActivity.activity_start_time : activity.activity_start_time}
                    disabled={!inputActive}
                    className={`${inputActive ? 'inputTrue' : 'inputFalse'}`}
                    onChange={(e) => setEditedActivity({ ...editedActivity, activity_start_time: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    value={inputActive && editedActivityId === activity._id ? editedActivity.activity_finish_time : activity.activity_finish_time}
                    disabled={!inputActive}
                    className={`${inputActive ? 'inputTrue' : 'inputFalse'}`}
                    onChange={(e) => setEditedActivity({ ...editedActivity, activity_finish_time: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    value={inputActive && editedActivityId === activity._id ? editedActivity.activity_type : activity.activity_type}
                    disabled={!inputActive}
                    className={`${inputActive ? 'inputTrue' : 'inputFalse'}`}
                    onChange={(e) => setEditedActivity({ ...editedActivity, activity_type: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    value={inputActive && editedActivityId === activity._id ? editedActivity.distance : activity.distance}
                    disabled={!inputActive}
                    className={`${inputActive ? 'inputTrue' : 'inputFalse'}`}
                    onChange={(e) => setEditedActivity({ ...editedActivity, distance: e.target.value })}
                  />
                </td>
                {inputActive ? (
                  <>
                    <td>
                      <button onClick={() => updateActivity(activity._id)}>Save</button>
                    </td>
                    <td>
                      <button onClick={() => setInputActive(false)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>
                      <button onClick={() => editActivity(activity)}>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => confirmDelete(activity._id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CreateActivity;
