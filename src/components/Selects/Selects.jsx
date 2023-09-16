import PropTypes from 'prop-types'
import Selected from '../Selected/Selected'

const Selects = ({totalMoney, selects, remaining, totalCredit }) => {
    return (
        <div className='w-full md:w-1/2 lg:w-1/2 m-2'>
            <div className='bg-white p-2 rounded-xl'>

                <div className='border-b-2 bg-white'>

                    <h3 className='text-blue-600 font-semibold'>Credit Hour Remaining {remaining} hr</h3>
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
                <div className='my-6 border-b-2'>
                    Total credit Hour: {totalCredit}
                </div>
                <div className='my-6'>
                    Total Price: {totalMoney} USD
                </div>
            </div>

        </div>
    )
}

Selects.propTypes = {
    selects: PropTypes.object,
    remaining: PropTypes.number,
    totalCredit: PropTypes.number,
    totalMoney: PropTypes.number

}

export default Selects