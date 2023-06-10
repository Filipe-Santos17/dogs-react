import ErrorMsg from '../../Helpers/ErrorMsg'

export default function InputForm({label, type, value, nameId, onchange, error, onBlur}) {
  return (
    <div className='wrapper'>
      <label htmlFor={nameId} className='label'>{label}</label>
      <input type={type} className='input' name={nameId} id={nameId} value={value}  onChange={onchange} onBlur={onBlur}/>
      <ErrorMsg err={error}/>
    </div>
  )
}
