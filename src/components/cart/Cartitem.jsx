import './Cartitem.css'
const cartitem = (data) => {
console.log(data)
  return (
    <>
    <div className='card'>
    <div className="title">{data.title}</div>
    <div className='imgdiv'><img className='image' src={data.image}/></div>
    <h2 className='desc'>{data.desc}</h2>
    </div>
    </>
  )
}

export default cartitem