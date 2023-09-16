import PropTypes from 'prop-types'

const Selected = ({selected}) => {
  const {title} = selected
  return (
    <div>
        <h3>{title}</h3>
    </div>
  )
}

Selected.propTypes = { 
  selected: PropTypes.object
}

export default Selected