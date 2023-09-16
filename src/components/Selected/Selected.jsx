import PropTypes from 'prop-types'

const Selected = ({selected,idx}) => {
  const {title} = selected
  return (
    <div className='m-6'>
        <h3>{idx+1}. {title}</h3>
    </div>
  )
}

Selected.propTypes = { 
  selected: PropTypes.object,
  idx: PropTypes.number
}

export default Selected