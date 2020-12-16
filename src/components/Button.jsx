 
export default function Button({children,handleOnClick,btnClass}) {
  return <button className={btnClass} onClick={handleOnClick}>{children}</button>; 
}
