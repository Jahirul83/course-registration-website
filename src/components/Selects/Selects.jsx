import PropTypes from 'prop-types'
import Selected from '../Selected/Selected'

const Selects = ({ selects, remaining, totalCredit }) => {
    return (
        <div className='w-full md:w-11/12 lg:w-1/2 m-2'>
            <div className='bg-white p-2 rounded-xl'>

                <div className='border-b-2 bg-w'>

                    <h3 className='text-purple-400'>Credit Hour Remaining {remaining} hrs</h3>
                </div>
                <div className='border-b-2'>
                    <h3 className='text-xl font-bold mb-8 text-center'>Course Name</h3>

                    {
                        selects.map((selected, idx) => <Selected
                            idx={idx}
                            key={selected.id}
                            selected={selected}
                        ></Selected>)
                    }
                </div>
                <div className='m-6'>
                    Total credit Hour: {totalCredit}
                </div>
            </div>

        </div>
    )
}

Selects.propTypes = {
    selects: PropTypes.object,
    remaining: PropTypes.number,
    totalCredit: PropTypes.number

}

export default Selects