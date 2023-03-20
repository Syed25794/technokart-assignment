
export const Timer = ({time}) => {

  return (
    <>
    <div>
    <h3>
      {(`${Math.floor(time/ 60)}` > 0) ? <span style={{fontSize:"30px"}}>{`${Math.floor(time/60)%60}`}<span style={{color:"green",fontSize:"15px",fontWeight:"lighter"}}>m</span></span> : null }
      <span style={{fontSize:"30px"}}>{`${Math.floor(time%60)}`}<span style={{color:"green",fontSize:"15px",fontWeight:"lighter"}}>s</span></span></h3>
    </div>
    </>
  )
}
