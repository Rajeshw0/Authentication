const Alert = ({ message, type }) => {
    return (
      <div className={`alert ${type}`}>
        {message}
        <style jsx>{`
          .alert {
            padding: 1em;
            margin: 1em 0;
            border-radius: 5px;
            display: inline-block;
            width: calc(100% - 2em);
          }
          .alert.success {
            background-color: #d4edda;
            color: #155724;
          }
          .alert.error {
            background-color: #f8d7da;
            color: #721c24;
          }
        `}</style>
      </div>
    );
  };
  
  export default Alert;