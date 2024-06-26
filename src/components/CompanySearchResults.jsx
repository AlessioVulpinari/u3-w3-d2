import { useEffect } from "react"
import { Container, Row, Col, Alert, Spinner, Placeholder } from "react-bootstrap"
import Job from "./Job"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getJobsAction } from "../redux/actions"

const CompanySearchResults = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.jobs.content)
  const hasError = useSelector((state) => state.jobs.hasError)
  const errorMsg = useSelector((state) => state.jobs.errorMsg)
  const isLoading = useSelector((state) => state.jobs.isLoading)

  useEffect(() => {
    dispatch(getJobsAction(params.company))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row>
        {hasError && !isLoading ? (
          <Alert variant='danger' className='my-2'>
            <Alert.Heading>WARNING!</Alert.Heading>
            <p>{errorMsg}</p>
          </Alert>
        ) : isLoading ? (
          <Row className='mx-0 mt-3 p-3' style={{ border: "1px solid #00000033", borderRadius: 4 }}>
            <Placeholder as={Col} animation='glow'>
              <Placeholder xs={3}></Placeholder>
            </Placeholder>
            <Placeholder as={Col} animation='glow'>
              <Placeholder xs={9}></Placeholder>
            </Placeholder>
          </Row>
        ) : (
          <Col className='my-3'>
            <h1 className='display-4'>Job posting for: {params.company}</h1>
            {jobs.data.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default CompanySearchResults
