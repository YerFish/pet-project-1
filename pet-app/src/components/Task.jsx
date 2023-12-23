import "../styles/style.css";
import calendar from "../img/calendar_icon.svg";
import image_top from "../img/image_top_default.svg";
import emoji_reaction from "../img/emoji_reaction.svg";
import profile_1 from "../img/profile_01.svg";
import profile_2 from "../img/profile_02.svg";

const tasks = [
  {
    img: image_top,
    title: "Task Title",
    emoji: emoji_reaction,
    description: "Add a short description or link a web page.",
    date: "Jan 01, 2021",
    profile1: profile_1,
    profile2: profile_2,
    progress: 100,
    id: 0,
  },
];
export function Task() {
  return (
    <>
      {tasks.map((task) => {
        return (
          <div key={task.id} className="div-card">
            <div className="div-container-card">
              <img src={task.img} alt="top" />
              <div className="div-at-a-glance">
                <h1>{task.title}</h1>
                <img src={task.emoji} className="emoji" alt="emoji" />
              </div>
              <p>{task.description}</p>
              <div className="div-more-info">
                <div className="div-due-date">
                  <img src={calendar} alt="calendar icon" />
                  <p className="p-date">{task.date}</p>
                </div>
                <div className="div-assigned-to">
                  <img
                    src={task.profile1}
                    className="profile1"
                    alt="person 1"
                  />
                  <img
                    src={task.profile2}
                    className="profile2"
                    alt="person 2"
                  />
                </div>
              </div>

              <div className="div-progress">
                <p>*progress bar {task.progress}* </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
