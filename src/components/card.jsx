const Card = ({ children }) => {
  return (
    <div 
    style = {{
        border : "1px solid gray",
        padding : "20px",
        borderRadius : "10px",
        width : "fit-content",
        textAlign : "start",
        boxShadow : "0px 0px 20px gray",
    }}>
        {children}
    </div>
  )
}

export default Card;