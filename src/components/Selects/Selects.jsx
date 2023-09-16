import PropTypes from 'prop-types'
import Selected from '../Selected/Selected'

const Selects = ({ selects }) => {
    return (
        <div className='w-1/2 bg-slate-200 p-4 m-4'>
            <h3 className='text-xl font-bold mb-8'>Course Name:{selects.length}</h3>

            {
                selects.map(selected=><Selected key={selected.id} selected={selected}></Selected>)
            }
        </div>
    )
}

Selects.propTypes = {
    selects:PropTypes.object
}

export default Selects