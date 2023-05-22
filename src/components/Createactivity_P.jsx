// import { useForm } from "react-hook-form";
// import {useForm} from 'react-hook-form';
import { useForm } from "react-hook-form";
import '../components/Createactivity.css';
import Layout from '../components/Layout';

function Createactivity() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const { register, handleSubmit } = useForm();


    // ถึงเวลาจริงสามารถเอาออกได้ เพราะไม่จำเป็นต้อง console ออกมา
      console.log(watch());

  return (
    <>
    <Layout/>
            {/* for onSubmit  */}
            <form className="create-activty" onSubmit={handleSubmit((data) => {
                console.log(data);
            })}>          
                <section className="create-activity-left-page">
                    <div className="activity-topic">
                        <h1 className="topic">Create Activity</h1>
                    </div>
                    <div>
                        <h3>Input your Image</h3>
                        <input className="input-img" type="file" id="input-img" {...register("title",{required: 'This is required to push Name.'})}/>
                    </div>
                    <div className="activity-title">
                        <h3 className="title">Title</h3>
                        {/* ...register = useState   */}
                        <input className="input-title" {...register("title",{required: 'This is required to push Name.'})} 
                        placeholder="Title" />
                    </div>
                    <div className="activity-workout-types">
                        <h3 className="workout-types">Workout Types</h3>
                        <select className="input-workout-types" {...register("Workout Types")}>
                            <option value="hiit">HIIT</option>
                            <option value="strength">Strength</option>
                            <option value="yoga">Yoga</option>
                            <option value="pilates">Pilates</option>
                            <option value="weight">Weight</option>
                        </select>
                    </div>
                </section>

                <section className="create-activity-right-side">
                    <div className="activity-description">
                        <h3 className="description">Description</h3>
                        <input className="input-description"{...register("Description",{required: false})} 
                        placeholder="Description" />
                    </div>
                    <div className="activity-duration">
                        <h3 className="duration">Duration</h3>
                        <input className="input-duration" {...register("Duration",{required: 'This is required to push Name.'})} 
                        placeholder="xx:xx" />
                    </div>
                    <div className="activity-distance">
                        <h3 className="distance">Distance</h3>
                        <input className="input-distance" {...register("Distance",{required: 'This is required to push Name.'})} 
                        placeholder="xxx" />
                    </div>
                    <div className="activity-date">
                        <h3 className="date">Date</h3>
                        <input className="input-date" {...register("Date",{required: 'This is required to push Name.'})} 
                        placeholder="xx:xx" />
                    </div>
                </section>
                    <div className="activity-button">
                        <input className="input-button" type="submit" />
                    </div>
            
            </form>
    </>
  )
}

export default Createactivity