import style from "./card.module.css";

export default function Card({counts, title, icon}) {
  return (
    <>
    <div className={`${style.card} d-flex flex-row justify-content-between align-items-center gap-3 p-3 py-5`}>  
        <div className={`${style.iconContainer} w-50 d-flex justify-content-center align-items-center`}>
            <i className={`${icon} fs-2`}></i>
        </div>
        <div className="cardContent w-50 d-flex flex-column gap-2 align-items-center">
            <span className={`${style.info} fw-bold fs-3`}>{counts}</span>
            <span className={`${style.info} fw-bold`}>{title}</span>
        </div>
    </div>
    </>
  )
}
