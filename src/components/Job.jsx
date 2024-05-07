import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourites.content)
  const dispatch = useDispatch()

  return (
    <Row className='mx-0 mt-3 p-3' style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <div className='d-flex align-items-center justify-content-between'>
          <a href={data.url} target='_blank' rel='noreferrer'>
            {data.title}
          </a>
          {favourites && favourites.includes(data.company_name) ? (
            <i
              className='bi bi-star-fill'
              onClick={() => dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: data.company_name })}
            />
          ) : (
            <i className='bi bi-star' onClick={() => dispatch({ type: "ADD_TO_FAVOURITES", payload: data.company_name })} />
          )}
        </div>
      </Col>
    </Row>
  )
}

export default Job
