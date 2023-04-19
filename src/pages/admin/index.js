import {useState, useEffect} from 'react'
import Format from '@/layout/format';
import styles from "./admin.module.css"
import FormTrainer from "../../components/forms/trainerForm/formTrainer"
import AddPicture from "../../components/forms/addPicture/addPicture"
import ClassForm from '@/components/forms/addClass/classForm';
import FormUser from "../../components/forms/addUser/formUser"
import TrainersTable from '@/components/tables/trainersTable';
import UsersTable from '@/components/tables/usersTable';
import ClassesTable from '@/components/tables/classesTable';
import { io } from "socket.io-client";

export default function Admin() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userProfile = localStorage.getItem("profile");
      if (userProfile) {
        setUser(JSON.parse(userProfile));
      }
    }
  }, []);

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!user?._id) return;
    setSocket(
      io(
        // "https://dawrafun1.herokuapp.com/" ||
        "http://localhost:5000"
      )
    );
    // console.log(socket);
  }, [user]);
  useEffect(() => {
    if (!user?._id) return;
    socket?.emit("addUser", user?._id);
  }, [socket, user]);

  
  const [btnClicked, setBtnClicked] = useState(false);

  const showFormTrainer = (e)=>{
    if(btnClicked === 'הוסף מאמן'){
      console.log(btnClicked)
      setBtnClicked(false)
    }else{
      setBtnClicked(e.target.innerText)
    }
  }
  const showFormUser = (e)=>{
    if(btnClicked === 'הוסף לקוח'){
      console.log(btnClicked)
      setBtnClicked(false)
    }else{
      setBtnClicked(e.target.innerText)
    }
  }
  const showFormClass = (e)=>{
    if(btnClicked === 'הוסף חוג'){
      console.log(btnClicked)
      setBtnClicked(false)
    }else{
      setBtnClicked(e.target.innerText)
    }
  }
  const showFormGallery = (e)=>{
    if(btnClicked === 'הוסף תמונות'){
      console.log(btnClicked)
      setBtnClicked(false)
    }else{
      setBtnClicked(e.target.innerText)
    }
  }
  const showTableTrainers = (e)=>{
    if(btnClicked === 'מאמנים'){
      console.log(btnClicked)
      setBtnClicked(false)
    }else{
      setBtnClicked(e.target.innerText)
    }
  }
  const showTableClasses = (e)=>{
    if(btnClicked === 'חוגים'){
      console.log(btnClicked)
      setBtnClicked(false)
    }else{
      setBtnClicked(e.target.innerText)
    }
  }
  const showTableUsers = (e)=>{
    if(btnClicked === 'לקוחות'){
      console.log(btnClicked)
      setBtnClicked(false)
    }else{
      setBtnClicked(e.target.innerText)
    }
  }
  
  return (
    <Format>
      <div className={styles.adminContainer}>
        <h2 style={{textAlign:"center"}}>דף מנהל</h2>
        <div className={styles.addbtndiv}>
        <button className={styles.AddTrainerBtn} onClick={(e)=>showFormUser(e)}>הוסף לקוח</button>
      <button className={styles.AddTrainerBtn} onClick={(e)=>showFormTrainer(e)}>הוסף מאמן</button>

      <button className={styles.AddTrainerBtn}  onClick={(e)=>showFormClass(e)}>הוסף חוג</button>
      <button className={styles.AddTrainerBtn} onClick={(e)=>showFormGallery(e)}>הוסף תמונות</button>
      </div>
      <div className={styles.forms}>
        {btnClicked === 'הוסף מאמן' &&<FormTrainer/>}
        {btnClicked === 'הוסף לקוח' &&<FormUser/>}
        {btnClicked === 'הוסף חוג' &&<ClassForm/>}
        {btnClicked === 'הוסף תמונות' &&<AddPicture/>}
      
      
      </div>
      <div className={styles.btns}>
      <button className={styles.adminFilterBTN}  onClick={(e)=>showTableUsers(e)}>לקוחות</button>
        <button className={styles.adminFilterBTN}  onClick={(e)=>showTableTrainers(e)}>מאמנים</button>
        <button className={styles.adminFilterBTN}  onClick={(e)=>showTableClasses(e)}>חוגים</button>
      </div>
      {btnClicked === 'מאמנים' &&<TrainersTable />}
      {btnClicked === 'לקוחות' &&<UsersTable setBtnClicked={setBtnClicked} socket={socket}/>}
      {btnClicked === 'חוגים' &&<ClassesTable setBtnClicked={setBtnClicked} />}
      </div>
    </Format>
  )
}
