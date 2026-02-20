import { useState } from "react"
import styles from "./profile.module.css"
import userImage from "../assets/user.jpg"

export const Profile = ({name, field, project, phone, email}) => {
  const workDays = ['Monday', 'Tuesday', 'Wednesday'];
  return(
    <div className = {`${styles.userProfile}`}>
        <h2>My Profile</h2>
        <div className={styles.container}>
          
          <div className= {`${styles.firstPart}`}>

           <div className = {`${styles.profile}`}>
              <div className = {`${styles.firstrow}`}>
                 <img src={userImage} alt="picture missing" />
                 <p>{name}</p>
              </div>
              <div className= {`${styles.field}`}>
               <p>{field}</p>
              </div>
            </div>
          <div className = {`${styles.project}`}>
              <h3>Current Project</h3>
              <ul>
                <li>Name: <b>{project}</b></li>
                <li>Timeline: Feb.02.2026 - April.20.2026</li>
                <li>Repo: <a href="https://github.com/floraihozoraissa-sketch/silver-spork">GitHub</a></li>
              </ul>
            </div>
           
          </div>
            
            <div  className = {`${styles.about}`}>
             <div className = {`${styles.aboutbox}`}>
              <h3>Work Days</h3>
              <ul>
                {workDays.map((day, index) => {
                return(
                    <li key = {index}>{day}</li>
                )
              })}
              </ul>
            </div>
            <div className = {`${styles.aboutbox}`}>
             <h3>Address</h3>
             <ul>
              <li>Email: {email}</li>
              <li>Phone number: {phone}</li>
             </ul>
            </div>
            </div>
            <div className = {`${styles.button}`}>
             <button>Get In Touch</button>
            </div>
            
        </div>
    </div>
  )
}