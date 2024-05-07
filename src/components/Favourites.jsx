import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content)
  const dispatch = useDispatch()
  return (
    <Container>
      <Row>
        {favourites.map((companyName) => (
          <Col key={companyName} xs={12} className='border border-primary my-1 py-1 d-flex justify-content-between'>
            <Link to={`/${companyName}`}>{companyName}</Link>
            {favourites && favourites.includes(companyName) ? (
              <i className='bi bi-star-fill' onClick={() => dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: companyName })} />
            ) : (
              <i className='bi bi-star' onClick={() => dispatch({ type: "ADD_TO_FAVOURITES", payload: companyName })} />
            )}
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Favourites
