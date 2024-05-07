import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addFromFavourites, removeFromFavourites } from "../redux/actions"

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
              <i className='bi bi-star-fill' onClick={() => dispatch(removeFromFavourites(companyName))} />
            ) : (
              <i className='bi bi-star' onClick={() => dispatch(addFromFavourites(companyName))} />
            )}
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Favourites
