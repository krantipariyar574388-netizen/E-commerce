// const Input = ({ onChange, label, id, placeholder, type = "text" }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         gap: "10px",
//         textAlign: "start",
//         fontSize: "20px",
//       }}
//     >
//       {/* label */}
//       <label htmlFor={id}>{label}</label>
//       {/* input  */}
//       <input
//         style={{
//           padding: "12px 10px",
//           fontSize: "20px",
//           border: "1px solid indigo",
//           borderRadius: "8px",
//         }}
//         onChange={onChange}
//         id={id}
//         placeholder={placeholder}
//         type={type}
//       />
//     </div>
//   );
// };

// export default Input;



const Input = ({ onChange, label, id, name, placeholder, type = 'text' }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                textAlign: 'start',
                fontSize: '20px'
            }}>
            <label htmlFor={id}>{label}</label>
            <input
                style={{
                    padding: '12px 10px',
                    fontSize: '20px',
                    border: '1px solid indigo',
                    borderRadius: '8px'
                }}
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                required />
        </div>

    )
};

export default Input;