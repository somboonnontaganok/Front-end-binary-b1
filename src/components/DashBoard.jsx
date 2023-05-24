import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import {
  getActivities,
  createActivities,
  deleteActivities,
  editActivities,
} from "../api/activityApi";
import "./Createactivity.css";

function DashBoard() {
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
    if (confirm(text) == true) {
      await deleteActivities(id);
      toggleReload(!load);
    } else {
      alert("You canceled!");
    }
  };

  return (
    <>
      <Layout />
      <div>DashBoard</div>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>

                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
