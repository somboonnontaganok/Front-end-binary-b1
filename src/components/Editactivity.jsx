import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { getActivities, createActivities } from "../api/activityApi";
import { useParams } from "react-router-dom";
import axios from 'axios';

function Editactivity() {
  const { activityId } = useParams();
  const [activities, setActivities] = useState([]);
  const [activity_name, setName] = useState("");
  const [activity_date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [activity_start_time, setStartTime] = useState("");
  const [activity_finish_time, setFinishTime] = useState("");
  const [activity_type, setType] = useState("");
  const [distance, setDistance] = useState("");
  // const [load, toggleReload] = useState(false);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const activities = await getActivities();
        setActivities(activities);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []);

  const save = async () => {
    try {
      const newActivity = {
        activity_name,
        activity_date,
        description,
        duration,
        activity_start_time,
        activity_finish_time,
        activity_type,
        distance,
        // สร้างกิจกรรมใหม่
      };
      await createActivities(newActivity);
      setActivities([...activities, newActivity]);
      // รีเซ็ตค่าในฟอร์ม
      setActivities("");
      setName("");
      setDate("");
      setDuration("");
      setStartTime("");
      setFinishTime("");
      setType("");
      setDistance("");
    } catch (error) {
      console.error("Error creating activity:", error);
    }
  };

  return (
    <>
      <Layout />
      <div>
        <h3>Create</h3>
        <input
          type="text"
          placeholder="Name"
          value={activity_name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Date"
          value={activity_date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <input
          type="text"
          placeholder="Start Time"
          value={activity_start_time}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Finish Time"
          value={activity_finish_time}
          onChange={(e) => setFinishTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type"
          value={activity_type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <button onClick={save}>Save</button>
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
                <td>{activity.activity_name}</td>
                <td>{activity.activity_date}</td>
                <td>{activity.description}</td>
                <td>{activity.activity_start_time}</td>
                <td>{activity.activity_finish_time}</td>
                <td>{activity.type}</td>
                <td>{activity.distance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Editactivity;
